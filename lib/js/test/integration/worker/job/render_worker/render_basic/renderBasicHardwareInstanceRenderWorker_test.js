'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var CameraTool$Wonderjs = require("../../../../../tool/service/camera/CameraTool.js");
var SettingTool$Wonderjs = require("../../../../../tool/service/setting/SettingTool.js");
var GameObjectAPI$Wonderjs = require("../../../../../../src/api/GameObjectAPI.js");
var MainStateTool$Wonderjs = require("../../../../../tool/service/state/MainStateTool.js");
var TestWorkerTool$Wonderjs = require("../../../tool/TestWorkerTool.js");
var FakeGlWorkerTool$Wonderjs = require("../../../tool/FakeGlWorkerTool.js");
var TestMainWorkerTool$Wonderjs = require("../../main_worker/tool/TestMainWorkerTool.js");
var RenderWorkerStateTool$Wonderjs = require("../../../../../tool/service/state/RenderWorkerStateTool.js");
var InstanceRenderWorkerTool$Wonderjs = require("../tool/InstanceRenderWorkerTool.js");
var RenderJobsRenderWorkerTool$Wonderjs = require("../tool/RenderJobsRenderWorkerTool.js");
var RenderBasicHardwareInstanceTool$Wonderjs = require("../../../../../tool/render/instance/RenderBasicHardwareInstanceTool.js");
var RenderBasicHardwareInstanceRenderWorkerTool$Wonderjs = require("../tool/RenderBasicHardwareInstanceRenderWorkerTool.js");
var RenderBasicHardwareInstanceForNoWorkerAndWorkerJobTool$Wonderjs = require("../../../../tool/job/RenderBasicHardwareInstanceForNoWorkerAndWorkerJobTool.js");

describe("test render basic hardware instance in render worker", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestMainWorkerTool$Wonderjs.initWithJobConfig(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, SettingTool$Wonderjs.buildBufferConfigStr(300, undefined, 500, 50, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return TestWorkerTool$Wonderjs.clear(sandbox);
              }));
        describe("use program", (function () {
                var _prepareForUseProgram = function (sandbox, state) {
                  var match = RenderBasicHardwareInstanceRenderWorkerTool$Wonderjs.prepare(sandbox, state);
                  var createProgram = Sinon.returns(1, Sinon.onCall(0, Sinon.createEmptyStubWithJsObjSandbox(sandbox)));
                  var useProgram = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                  var state$1 = FakeGlWorkerTool$Wonderjs.setFakeGl(FakeGlWorkerTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(createProgram), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(useProgram), undefined, undefined, /* () */0), match[0]);
                  return /* tuple */[
                          state$1,
                          1,
                          createProgram,
                          useProgram
                        ];
                };
                Wonder_jest.testPromise("create program and use program only once", (function () {
                        var match = _prepareForUseProgram(sandbox, state[0]);
                        var createProgram = match[2];
                        return RenderJobsRenderWorkerTool$Wonderjs.initAndMainLoopAndRender((function () {
                                      return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(createProgram)), 1));
                                    }), match[0], sandbox, undefined, /* () */0);
                      }));
                return Wonder_jest.testPromise("only use sourceInstance's gameObject's program", (function () {
                              var match = _prepareForUseProgram(sandbox, state[0]);
                              var useProgram = match[3];
                              var program = match[1];
                              return RenderJobsRenderWorkerTool$Wonderjs.initAndMainLoopAndRender((function () {
                                            return Promise.resolve(Sinon.toCalledWith(/* array */[program], Wonder_jest.Expect[/* expect */0](useProgram)));
                                          }), match[0], sandbox, undefined, /* () */0);
                            }));
              }));
        describe("send instance data", (function () {
                describe("send sourceInstance gameObject's and objectInstanceGameObject gameObjects' model matrices", (function () {
                        var _prepare = function (sandbox, state) {
                          var match = RenderBasicHardwareInstanceRenderWorkerTool$Wonderjs.prepare(sandbox, state);
                          var match$1 = match[2];
                          return /* tuple */[
                                  match[0],
                                  match[1],
                                  match$1[3],
                                  match$1[4]
                                ];
                        };
                        Wonder_jest.testPromise("buffer sub data", (function () {
                                var match = RenderBasicHardwareInstanceForNoWorkerAndWorkerJobTool$Wonderjs.prepareForBufferSubDataCase(sandbox, _prepare, state);
                                var bufferSubData = match[3];
                                var array_buffer = match[2];
                                var match$1 = match[1];
                                var objectTransform = match$1[1];
                                var sourceTransform = match$1[0];
                                var state$1 = FakeGlWorkerTool$Wonderjs.setFakeGl(FakeGlWorkerTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, array_buffer, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(bufferSubData), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), match[0]);
                                return RenderJobsRenderWorkerTool$Wonderjs.initAndMainLoopAndRender((function () {
                                              return Promise.resolve(RenderBasicHardwareInstanceForNoWorkerAndWorkerJobTool$Wonderjs.testForBufferSubDataCase(sandbox, /* tuple */[
                                                              sourceTransform,
                                                              objectTransform
                                                            ], array_buffer, bufferSubData, MainStateTool$Wonderjs.unsafeGetState(/* () */0)));
                                            }), state$1, sandbox, undefined, /* () */0);
                              }));
                        describe("fix bug", (function () {
                                describe("test create new sourceInstance gameObject after first loop", (function () {
                                        describe("handle instance data position", (function () {
                                                return Wonder_jest.testPromise("vertexAttribDivisorANGLE 1", (function () {
                                                              InstanceRenderWorkerTool$Wonderjs.setGPUDetectDataAllowHardwareInstance(sandbox);
                                                              var renderWorkerState = RenderWorkerStateTool$Wonderjs.unsafeGetState(/* () */0);
                                                              var vertexAttribDivisorANGLE = InstanceRenderWorkerTool$Wonderjs.getExtensionInstancedArrays(renderWorkerState).vertexAttribDivisorANGLE;
                                                              var match = CameraTool$Wonderjs.createCameraGameObject(state[0]);
                                                              var match$1 = RenderBasicHardwareInstanceForNoWorkerAndWorkerJobTool$Wonderjs.prepareGetAttribLocationForHandleInstanceData(sandbox, match[0]);
                                                              var pos4 = match$1[4];
                                                              var pos3 = match$1[3];
                                                              var pos2 = match$1[2];
                                                              var pos1 = match$1[1];
                                                              var state$1 = FakeGlWorkerTool$Wonderjs.setFakeGl(FakeGlWorkerTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(match$1[5]), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), match$1[0]);
                                                              MainStateTool$Wonderjs.setState(state$1);
                                                              return RenderJobsRenderWorkerTool$Wonderjs.initAndMainLoopAndRender((function () {
                                                                            var state = MainStateTool$Wonderjs.unsafeGetState(/* () */0);
                                                                            var match = RenderBasicHardwareInstanceTool$Wonderjs.createSourceInstanceGameObject(sandbox, state);
                                                                            var state$1 = GameObjectAPI$Wonderjs.initGameObject(match[1], match[0]);
                                                                            return RenderJobsRenderWorkerTool$Wonderjs.mainLoopAndRender((function () {
                                                                                          return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                                                              Sinon.getCallCount(Sinon.withTwoArgs(pos1, 1, vertexAttribDivisorANGLE)),
                                                                                                              Sinon.getCallCount(Sinon.withTwoArgs(pos2, 1, vertexAttribDivisorANGLE)),
                                                                                                              Sinon.getCallCount(Sinon.withTwoArgs(pos3, 1, vertexAttribDivisorANGLE)),
                                                                                                              Sinon.getCallCount(Sinon.withTwoArgs(pos4, 1, vertexAttribDivisorANGLE))
                                                                                                            ]), /* tuple */[
                                                                                                          1,
                                                                                                          1,
                                                                                                          1,
                                                                                                          1
                                                                                                        ]));
                                                                                        }), state$1, sandbox, undefined, /* () */0);
                                                                          }), state$1, sandbox, undefined, /* () */0);
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                return /* () */0;
                              }));
                        return /* () */0;
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

/*  Not a pure module */
