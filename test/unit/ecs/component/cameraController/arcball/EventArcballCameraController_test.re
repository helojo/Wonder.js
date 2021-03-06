open Wonder_jest;

open BasicCameraViewAPI;

open ArcballCameraControllerAPI;

let _ =
  describe("test arcball cameraController event", () => {
    open Expect;
    open Expect.Operators;
    open Sinon;
    let sandbox = getSandboxDefaultVal();

    beforeEach(() => sandbox := createSandbox());
    afterEach(() => restoreSandbox(refJsObjToSandbox(sandbox^)));

    describe("bind arcballCameraController's event", () => {
      let _prepareMouseEvent = () =>
        EventCameraControllerTool.prepareMouseEvent(sandbox);

      let _prepareKeyEvent = () => {
        let state = EventCameraControllerTool.prepareKeyboardEvent(sandbox);
        let (
          state,
          gameObject,
          transform,
          (cameraController, basicCameraView, perspectiveCameraProjection),
        ) =
          ArcballCameraControllerTool.createGameObject(state);
        let (posX, posY, posZ) as pos = (1., 2., 3.);
        let state =
          state |> TransformAPI.setTransformLocalPosition(transform, pos);
        let _ = TransformAPI.getTransformPosition(transform, state);
        let target = pos;
        let moveSpeedX = 0.1;
        let moveSpeedY = 0.2;
        let state =
          state
          |> setArcballCameraControllerTarget(cameraController, target)
          |> setArcballCameraControllerMoveSpeedX(
               cameraController,
               moveSpeedX,
             )
          |> setArcballCameraControllerMoveSpeedY(
               cameraController,
               moveSpeedY,
             );
        let state = state |> NoWorkerJobTool.execInitJobs;
        let state =
          ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
            cameraController,
            state,
          );

        (state, cameraController, (moveSpeedX, moveSpeedY), pos);
      };

      describe("test bind one arcballCameraController's event", () => {
        let _prepareArcballCameraEvent = () => {
          let state = _prepareMouseEvent();
          let (state, _) =
            MouseEventTool.prepareForPointerLock(sandbox, state);
          let (
            state,
            gameObject,
            transform,
            (cameraController, basicCameraView, perspectiveCameraProjection),
          ) =
            ArcballCameraControllerTool.createGameObject(state);

          let state = state |> NoWorkerJobTool.execInitJobs;
          let state =
            ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
              cameraController,
              state,
            );

          (cameraController, state);
        };

        describe("bind event", () => {
          describe("support pointer lock", () => {
            let _prepareTouchEvent = () =>
              EventCameraControllerTool.prepareTouchEvent(sandbox);

            describe("bind point drag start event", () => {
              let _prepareForPointerLock = (sandbox, state) =>
                MouseEventTool.prepareForPointerLock(sandbox, state);

              let _prepareRequestLockAndEvent = () => {
                let state = _prepareMouseEvent();
                let (state, requestPointerLockStub) =
                  _prepareForPointerLock(sandbox, state);
                let (state, _, _, (cameraController, _, _)) =
                  ArcballCameraControllerTool.createGameObject(state);

                let state = state |> NoWorkerJobTool.execInitJobs;
                let state =
                  ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
                    cameraController,
                    state,
                  );

                (requestPointerLockStub, MainStateTool.setState(state));
              };

              test("if is mouse event, request canvas pointerLock", () => {
                let (requestPointerLockStub, state) =
                  _prepareRequestLockAndEvent();

                EventTool.triggerDomEvent(
                  "mousedown",
                  EventTool.getPointEventBindedDom(state),
                  MouseEventTool.buildMouseEvent(),
                );
                let state = EventTool.restore(state);

                requestPointerLockStub |> expect |> toCalledOnce;
              });
              test(
                "else if is touch event, not request canvas pointerLock", () => {
                let (requestPointerLockStub, state) =
                  _prepareRequestLockAndEvent();

                EventTool.triggerDomEvent(
                  "touchstart",
                  EventTool.getPointEventBindedDom(state),
                  TouchEventTool.buildTouchEvent(),
                );
                let state = EventTool.restore(state);

                requestPointerLockStub |> expect |> not_ |> toCalled;
              });
            });

            describe("bind point drag drop event", () => {
              let _prepareForPointerLock =
                  (sandbox, pointerLockElement, state) => {
                let document = DomExtend.document |> Obj.magic;

                document##pointerLockElement #= pointerLockElement;

                let exitPointerLockStub =
                  createEmptyStubWithJsObjSandbox(sandbox);
                document##exitPointerLock #= exitPointerLockStub;

                MouseEventTool.prepareForPointerLock(sandbox, state);

                (state, exitPointerLockStub);
              };

              let _prepareExitLockAndEvent = (canvas, state) => {
                let (state, exitPointerLockStub) =
                  _prepareForPointerLock(sandbox, canvas, state);
                let (state, _, _, (cameraController, _, _)) =
                  ArcballCameraControllerTool.createGameObject(state);
                let state = state |> NoWorkerJobTool.execInitJobs;
                let state =
                  ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
                    cameraController,
                    state,
                  );

                (exitPointerLockStub, MainStateTool.setState(state));
              };

              describe("if is mouse event", () => {
                test(
                  "if document.pointerLockElement === canvas, exitPointerLock",
                  () => {
                  let state = _prepareMouseEvent();
                  let canvas = ViewTool.unsafeGetCanvas(state) |> Obj.magic;
                  let (exitPointerLockStub, state) =
                    _prepareExitLockAndEvent(canvas, state);

                  EventTool.triggerDomEvent(
                    "mousedown",
                    EventTool.getPointEventBindedDom(state),
                    MouseEventTool.buildMouseEvent(),
                  );
                  EventTool.triggerDomEvent(
                    "mouseup",
                    EventTool.getPointEventBindedDom(state),
                    MouseEventTool.buildMouseEvent(),
                  );
                  let state = EventTool.restore(state);

                  exitPointerLockStub |> expect |> toCalledOnce;
                });
                test("else, not exitPointerLock", () => {
                  let state = _prepareMouseEvent();
                  let (exitPointerLockStub, state) =
                    _prepareExitLockAndEvent(Obj.magic(1), state);

                  EventTool.triggerDomEvent(
                    "mousedown",
                    EventTool.getPointEventBindedDom(state),
                    MouseEventTool.buildMouseEvent(),
                  );
                  EventTool.triggerDomEvent(
                    "mouseup",
                    EventTool.getPointEventBindedDom(state),
                    MouseEventTool.buildMouseEvent(),
                  );
                  let state = EventTool.restore(state);

                  exitPointerLockStub |> expect |> not_ |> toCalled;
                });
              });

              describe("else if is touch event", () =>
                test("not exitPointerLock", () => {
                  let state = _prepareMouseEvent();
                  let canvas = ViewTool.unsafeGetCanvas(state) |> Obj.magic;
                  let (exitPointerLockStub, state) =
                    _prepareExitLockAndEvent(canvas, state);

                  EventTool.triggerDomEvent(
                    "touchstart",
                    EventTool.getPointEventBindedDom(state),
                    TouchEventTool.buildTouchEvent(),
                  );
                  EventTool.triggerDomEvent(
                    "touchend",
                    EventTool.getPointEventBindedDom(state),
                    TouchEventTool.buildTouchEvent(),
                  );
                  let state = EventTool.restore(state);

                  exitPointerLockStub |> expect |> not_ |> toCalled;
                })
              );
            });
          });

          describe("bind point drag over event", () =>
            describe("change orbit", () =>
              test("set phi and theta", () => {
                let (cameraController, state) = _prepareArcballCameraEvent();
                let rotateSpeed = 2.5;
                let phi = 1.;
                let theta = 0.5;
                let state =
                  state
                  |> setArcballCameraControllerRotateSpeed(
                       cameraController,
                       rotateSpeed,
                     )
                  |> setArcballCameraControllerPhi(cameraController, phi)
                  |> setArcballCameraControllerTheta(cameraController, theta);
                let state = MainStateTool.setState(state);

                EventTool.triggerDomEvent(
                  "mousedown",
                  EventTool.getPointEventBindedDom(state),
                  MouseEventTool.buildMouseEvent(),
                );
                EventTool.triggerFirstMouseDragOverEvent(
                  MouseEventTool.buildMouseEvent(
                    ~movementX=1,
                    ~movementY=2,
                    (),
                  ),
                  state,
                );
                let state = EventTool.restore(state);

                (
                  state
                  |> unsafeGetArcballCameraControllerPhi(cameraController),
                  state
                  |> unsafeGetArcballCameraControllerTheta(cameraController),
                )
                |> expect == (1.025, 0.45);
              })
            )
          );

          describe("bind point scale event", () => {
            test("preventDefault", () => {
              let (cameraController, state) = _prepareArcballCameraEvent();

              let preventDefaultFunc =
                createEmptyStubWithJsObjSandbox(sandbox);
              let stopPropagationFunc =
                createEmptyStubWithJsObjSandbox(sandbox);

              let state = MainStateTool.setState(state);
              EventTool.triggerDomEvent(
                "mousewheel",
                EventTool.getPointEventBindedDom(state),
                MouseEventTool.buildMouseEvent(
                  ~preventDefaultFunc,
                  ~stopPropagationFunc,
                  (),
                ),
              );
              let state = EventTool.restore(state);

              (
                preventDefaultFunc |> getCallCount,
                stopPropagationFunc |> getCallCount,
              )
              |> expect == (1, 1);
            });

            test("set distance", () => {
              let (cameraController, state) = _prepareArcballCameraEvent();
              let wheelSpeed = 2.5;
              let state =
                state
                |> setArcballCameraControllerWheelSpeed(
                     cameraController,
                     wheelSpeed,
                   );
              let originDistance =
                unsafeGetArcballCameraControllerDistance(
                  cameraController,
                  state,
                );

              let state = MainStateTool.setState(state);
              EventTool.triggerDomEvent(
                "mousewheel",
                EventTool.getPointEventBindedDom(state),
                MouseEventTool.buildMouseEvent(
                  ~detail=Js.Nullable.return(-3),
                  (),
                ),
              );
              let state = EventTool.restore(state);

              state
              |> unsafeGetArcballCameraControllerDistance(cameraController)
              |> expect == originDistance
              -. wheelSpeed
              *. 3.;
            });
          });

          describe("bind keydown event", () => {
            let _prepareKeyEvent = () => {
              let state =
                EventCameraControllerTool.prepareKeyboardEvent(sandbox);
              let (
                state,
                gameObject,
                transform,
                (
                  cameraController,
                  basicCameraView,
                  perspectiveCameraProjection,
                ),
              ) =
                ArcballCameraControllerTool.createGameObject(state);
              let (posX, posY, posZ) as pos = (1., 2., 3.);
              let state =
                state
                |> TransformAPI.setTransformLocalPosition(transform, pos);
              let _ = TransformAPI.getTransformPosition(transform, state);
              let target = pos;
              let moveSpeedX = 0.1;
              let moveSpeedY = 0.2;
              let state =
                state
                |> setArcballCameraControllerTarget(cameraController, target)
                |> setArcballCameraControllerMoveSpeedX(
                     cameraController,
                     moveSpeedX,
                   )
                |> setArcballCameraControllerMoveSpeedY(
                     cameraController,
                     moveSpeedY,
                   );
              let state = state |> NoWorkerJobTool.execInitJobs;
              let state =
                ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
                  cameraController,
                  state,
                );

              (state, cameraController, (moveSpeedX, moveSpeedY), pos);
            };

            test("if is combined key, not set target", () => {
              let (
                state,
                cameraController,
                (moveSpeedX, moveSpeedY),
                (posX, posY, posZ),
              ) =
                _prepareKeyEvent();

              let state = MainStateTool.setState(state);
              EventTool.triggerDomEvent(
                "keydown",
                EventTool.getKeyboardEventBindedDom(state),
                KeyboardEventTool.buildKeyboardEvent(
                  ~keyCode=65,
                  ~ctrlKey=true,
                  (),
                ),
              );
              let state = EventTool.restore(state);

              state
              |> unsafeGetArcballCameraControllerTarget(cameraController)
              |> expect == (posX, posY, posZ);
            });

            describe("else, set target", () => {
              let _judgeTargetValue = (keyCode, expectFunc) => {
                let (
                  state,
                  cameraController,
                  (moveSpeedX, moveSpeedY),
                  (posX, posY, posZ),
                ) =
                  _prepareKeyEvent();

                let state = MainStateTool.setState(state);
                EventTool.triggerDomEvent(
                  "keydown",
                  EventTool.getKeyboardEventBindedDom(state),
                  KeyboardEventTool.buildKeyboardEvent(~keyCode, ()),
                );
                let state = EventTool.restore(state);

                expectFunc(
                  state
                  |> unsafeGetArcballCameraControllerTarget(cameraController),
                  expect,
                  (moveSpeedX, moveSpeedY),
                  (posX, posY, posZ),
                );
              };

              test("test move left", () =>
                _judgeTargetValue(
                  65,
                  (
                    targetValue,
                    expect,
                    (moveSpeedX, moveSpeedY),
                    (posX, posY, posZ),
                  ) =>
                  targetValue |> expect == (posX -. moveSpeedX, posY, posZ)
                )
              );
              test("test move right", () =>
                _judgeTargetValue(
                  39,
                  (
                    targetValue,
                    expect,
                    (moveSpeedX, moveSpeedY),
                    (posX, posY, posZ),
                  ) =>
                  targetValue |> expect == (posX +. moveSpeedX, posY, posZ)
                )
              );
              test("test move up", () =>
                _judgeTargetValue(
                  87,
                  (
                    targetValue,
                    expect,
                    (moveSpeedX, moveSpeedY),
                    (posX, posY, posZ),
                  ) =>
                  targetValue |> expect == (posX, posY +. moveSpeedY, posZ)
                )
              );
              test("test move down", () =>
                _judgeTargetValue(
                  83,
                  (
                    targetValue,
                    expect,
                    (moveSpeedX, moveSpeedY),
                    (posX, posY, posZ),
                  ) =>
                  targetValue |> expect == (posX, posY -. moveSpeedY, posZ)
                )
              );
            });
          });
        });

        describe("add event handleFunc to state", () => {
          let _prepareForPointerLock = (sandbox, state) =>
            MouseEventTool.prepareForPointerLock(sandbox, state);

          let _preparePreventDefaultAndBindEvent = () => {
            let state = _prepareMouseEvent();
            let (state, requestPointerLockStub) =
              _prepareForPointerLock(sandbox, state);
            let (
              state,
              gameObject,
              transform,
              (
                cameraController,
                basicCameraView,
                perspectiveCameraProjection,
              ),
            ) =
              ArcballCameraControllerTool.createGameObject(state);
            let state = state |> NoWorkerJobTool.execInitJobs;
            let preventDefaultFunc = createEmptyStubWithJsObjSandbox(sandbox);

            let state =
              ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
                cameraController,
                state,
              );

            (
              cameraController,
              preventDefaultFunc,
              requestPointerLockStub,
              state,
            );
          };

          test("test unbind point drag start event", () => {
            let (
              cameraController,
              preventDefaultFunc,
              requestPointerLockStub,
              state,
            ) =
              _preparePreventDefaultAndBindEvent();
            let state =
              ArcballCameraControllerAPI.unbindArcballCameraControllerEvent(
                cameraController,
                state,
              );
            let state = MainStateTool.setState(state);

            EventTool.triggerDomEvent(
              "mousedown",
              EventTool.getPointEventBindedDom(state),
              MouseEventTool.buildMouseEvent(~preventDefaultFunc, ()),
            );
            let state = EventTool.restore(state);

            requestPointerLockStub |> expect |> not_ |> toCalled;
          });
          test("test unbind point scale event", () => {
            let (
              cameraController,
              preventDefaultFunc,
              requestPointerLockStub,
              state,
            ) =
              _preparePreventDefaultAndBindEvent();

            let state =
              state
              |> ArcballCameraControllerAPI.unbindArcballCameraControllerPointScaleEvent(
                   cameraController,
                 );
            let state = MainStateTool.setState(state);

            EventTool.triggerDomEvent(
              "mousewheel",
              EventTool.getPointEventBindedDom(state),
              MouseEventTool.buildMouseEvent(~preventDefaultFunc, ()),
            );
            let state = EventTool.restore(state);

            preventDefaultFunc |> expect |> not_ |> toCalled;
          });
          test("test unbind keydown event", () => {
            let (
              state,
              cameraController,
              (moveSpeedX, moveSpeedY),
              (posX, posY, posZ),
            ) =
              _prepareKeyEvent();
            let state =
              ArcballCameraControllerAPI.unbindArcballCameraControllerEvent(
                cameraController,
                state,
              );

            let state = MainStateTool.setState(state);
            EventTool.triggerDomEvent(
              "keydown",
              EventTool.getKeyboardEventBindedDom(state),
              KeyboardEventTool.buildKeyboardEvent(~keyCode=65, ()),
            );
            let state = EventTool.restore(state);

            state
            |> unsafeGetArcballCameraControllerTarget(cameraController)
            |> expect == (posX, posY, posZ);
          });

          describe("fix bug", () =>
            test(
              "unbind should unbind cameraController's all binded functions",
              () => {
              let (
                cameraController,
                preventDefaultFunc,
                requestPointerLockStub,
                state,
              ) =
                _preparePreventDefaultAndBindEvent();

              let state =
                ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
                  cameraController,
                  state,
                );
              let state =
                ArcballCameraControllerAPI.unbindArcballCameraControllerEvent(
                  cameraController,
                  state,
                );
              let state = MainStateTool.setState(state);
              EventTool.triggerDomEvent(
                "mousedown",
                EventTool.getPointEventBindedDom(state),
                MouseEventTool.buildMouseEvent(~preventDefaultFunc, ()),
              );
              let state = EventTool.restore(state);

              requestPointerLockStub |> expect |> not_ |> toCalled;
            })
          );
        });
      });

      describe("test bind two arcballCameraControllers' event", () =>
        test("test bind point scale event", () => {
          let state = _prepareMouseEvent();
          let (state, gameObject1, _, (cameraController1, _, _)) =
            ArcballCameraControllerTool.createGameObject(state);
          let (state, gameObject2, _, (cameraController2, _, _)) =
            ArcballCameraControllerTool.createGameObject(state);
          let state = state |> NoWorkerJobTool.execInitJobs;
          let state =
            ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
              cameraController1,
              state,
            );
          let state =
            ArcballCameraControllerAPI.bindArcballCameraControllerEvent(
              cameraController2,
              state,
            );

          let preventDefaultFunc = createEmptyStubWithJsObjSandbox(sandbox);

          let state = MainStateTool.setState(state);
          EventTool.triggerDomEvent(
            "mousewheel",
            EventTool.getPointEventBindedDom(state),
            MouseEventTool.buildMouseEvent(~preventDefaultFunc, ()),
          );
          let state = EventTool.restore(state);

          preventDefaultFunc |> expect |> toCalledTwice;
        })
      );
    });
  });