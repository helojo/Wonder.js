

import * as Curry from "../../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Caml_array from "../../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Wonder_jest from "../../../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as TestTool$Wonderjs from "../../../../../tool/TestTool.js";
import * as TransformAPI$Wonderjs from "../../../../../../src/api/TransformAPI.js";
import * as GameObjectAPI$Wonderjs from "../../../../../../src/api/GameObjectAPI.js";
import * as MainStateTool$Wonderjs from "../../../../../tool/service/state/MainStateTool.js";
import * as TransformTool$Wonderjs from "../../../../../tool/service/transform/TransformTool.js";
import * as VboBufferTool$Wonderjs from "../../../../../tool/service/vboBuffer/VboBufferTool.js";
import * as GameObjectTool$Wonderjs from "../../../../../tool/service/gameObject/GameObjectTool.js";
import * as SparseMapService$Wonderjs from "../../../../../../src/service/atom/SparseMapService.js";
import * as SourceInstanceAPI$Wonderjs from "../../../../../../src/api/SourceInstanceAPI.js";
import * as TypeArrayPoolTool$Wonderjs from "../../../../../tool/structure/TypeArrayPoolTool.js";
import * as ObjectInstanceTool$Wonderjs from "../../../../../tool/service/instance/ObjectInstanceTool.js";
import * as SourceInstanceTool$Wonderjs from "../../../../../tool/service/instance/SourceInstanceTool.js";
import * as StaticTransformTool$Wonderjs from "../../../../../tool/service/primitive/StaticTransformTool.js";
import * as SparseMapService$WonderCommonlib from "../../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";

describe("SourceInstance", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("getSourceInstanceObjectInstanceTransformArray", (function () {
                return Wonder_jest.test("get objectInstance transform array", (function () {
                              var match = TransformAPI$Wonderjs.createTransform(state[0]);
                              var match$1 = ObjectInstanceTool$Wonderjs.createObjectInstanceGameObject(match[0]);
                              var state$1 = match$1[0];
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](SourceInstanceAPI$Wonderjs.getSourceInstanceObjectInstanceTransformArray(match$1[2], state$1)), /* array */[GameObjectAPI$Wonderjs.unsafeGetGameObjectTransformComponent(match$1[3], state$1)]);
                            }));
              }));
        describe("getGameObject", (function () {
                return Wonder_jest.test("get component's gameObject", (function () {
                              var match = ObjectInstanceTool$Wonderjs.createObjectInstanceGameObject(state[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](SourceInstanceTool$Wonderjs.getGameObject(match[2], match[0])), match[1]);
                            }));
              }));
        describe("unsafeGetGameObject", (function () {
                return Wonder_jest.test("unsafe get component's gameObject", (function () {
                              var match = ObjectInstanceTool$Wonderjs.createObjectInstanceGameObject(state[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](SourceInstanceAPI$Wonderjs.unsafeGetSourceInstanceGameObject(match[2], match[0])), match[1]);
                            }));
              }));
        describe("dispose component", (function () {
                describe("dispose data", (function () {
                        Wonder_jest.test("add matrixFloat32ArrayMap->typeArray to pool", (function () {
                                var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                var sourceInstance = match[2];
                                var state$1 = VboBufferTool$Wonderjs.addVboBufferToSourceInstanceBufferMap(sourceInstance, match[0]);
                                var match$1 = SourceInstanceTool$Wonderjs.getRecord(state$1);
                                var typeArr = new Float32Array(/* array */[1]);
                                SparseMapService$WonderCommonlib.set(sourceInstance, typeArr, match$1[/* matrixFloat32ArrayMap */6]);
                                var state$2 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], sourceInstance, state$1);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](SparseMapService$Wonderjs.length(Caml_array.caml_array_get(TypeArrayPoolTool$Wonderjs.getFloat32ArrayPoolMap(state$2[/* typeArrayPoolRecord */35]), typeArr.length))), 1);
                              }));
                        Wonder_jest.test("reset objectInstanceTransformIndexMap", (function () {
                                var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                var state$1 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], match[2], match[0]);
                                var match$1 = SourceInstanceTool$Wonderjs.getRecord(state$1);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match$1[/* objectInstanceTransformIndexMap */1]), /* array */[0]);
                              }));
                        Wonder_jest.test("remove from matrixFloat32ArrayMap, matrixInstanceBufferCapacityMap, isTransforsformMatrixDataMap, gameObjectMap", (function () {
                                var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                var sourceInstance = match[2];
                                var state$1 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], sourceInstance, match[0]);
                                var match$1 = SourceInstanceTool$Wonderjs.getRecord(state$1);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                SparseMapService$WonderCommonlib.has(sourceInstance, match$1[/* matrixFloat32ArrayMap */6]),
                                                SparseMapService$WonderCommonlib.has(sourceInstance, match$1[/* matrixInstanceBufferCapacityMap */5]),
                                                SparseMapService$WonderCommonlib.has(sourceInstance, match$1[/* isSendTransformMatrixDataMap */7]),
                                                SparseMapService$WonderCommonlib.has(sourceInstance, match$1[/* gameObjectMap */9])
                                              ]), /* tuple */[
                                            false,
                                            false,
                                            false,
                                            false
                                          ]);
                              }));
                        describe("test remove from type array", (function () {
                                return Wonder_jest.test("delete and reset from isTransformStatics", (function () {
                                              var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                              var sourceInstance = match[2];
                                              var state$1 = SourceInstanceAPI$Wonderjs.markSourceInstanceModelMatrixIsStatic(sourceInstance, false, match[0]);
                                              var state$2 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], sourceInstance, state$1);
                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](StaticTransformTool$Wonderjs.isTransformStatic(sourceInstance, state$2)), true);
                                            }));
                              }));
                        describe("dispose all objectInstance gameObjects", (function () {
                                describe("should dispose all components", (function () {
                                        Wonder_jest.test("dispose transform component", (function () {
                                                var match = ObjectInstanceTool$Wonderjs.createObjectInstanceGameObjectArr(2, state[0]);
                                                var objectInstanceGameObjectArr = match[3];
                                                var state$1 = match[0];
                                                var objectInstanceGameObject1 = Caml_array.caml_array_get(objectInstanceGameObjectArr, 0);
                                                var objectInstanceGameObject2 = Caml_array.caml_array_get(objectInstanceGameObjectArr, 1);
                                                var transform1 = GameObjectAPI$Wonderjs.unsafeGetGameObjectTransformComponent(objectInstanceGameObject1, state$1);
                                                var transform2 = GameObjectAPI$Wonderjs.unsafeGetGameObjectTransformComponent(objectInstanceGameObject2, state$1);
                                                var state$2 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], match[2], state$1);
                                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                TransformTool$Wonderjs.isDisposed(transform1, state$2),
                                                                TransformTool$Wonderjs.isDisposed(transform2, state$2)
                                                              ]), /* tuple */[
                                                            true,
                                                            true
                                                          ]);
                                              }));
                                        return Wonder_jest.test("dispose objectInstance component", (function () {
                                                      var match = ObjectInstanceTool$Wonderjs.createObjectInstanceGameObjectArr(2, state[0]);
                                                      var objectInstanceArr = match[4];
                                                      var state$1 = match[0];
                                                      var objectInstance1 = Caml_array.caml_array_get(objectInstanceArr, 0);
                                                      var objectInstance2 = Caml_array.caml_array_get(objectInstanceArr, 1);
                                                      GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], match[2], state$1);
                                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                      ObjectInstanceTool$Wonderjs.isDisposed(objectInstance1, state$1),
                                                                      ObjectInstanceTool$Wonderjs.isDisposed(objectInstance2, state$1)
                                                                    ]), /* tuple */[
                                                                  true,
                                                                  true
                                                                ]);
                                                    }));
                                      }));
                                return /* () */0;
                              }));
                        return /* () */0;
                      }));
                describe("test add new one after dispose old one", (function () {
                        Wonder_jest.test("use disposed index as new index firstly", (function () {
                                var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                var sourceInstance1 = match[2];
                                var state$1 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], sourceInstance1, match[0]);
                                var match$1 = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state$1);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match$1[2]), sourceInstance1);
                              }));
                        return Wonder_jest.test("if has no disposed index, get index from sourceInstanceRecord.index", (function () {
                                      var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                      var sourceInstance1 = match[2];
                                      var state$1 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(match[1], sourceInstance1, match[0]);
                                      var match$1 = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state$1);
                                      var match$2 = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(match$1[0]);
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                      match$1[2],
                                                      match$2[2]
                                                    ]), /* tuple */[
                                                  sourceInstance1,
                                                  sourceInstance1 + 1 | 0
                                                ]);
                                    }));
                      }));
                describe("contract check", (function () {
                        return Wonder_jest.test("expect dispose the alive component, but actual not", (function () {
                                      var match = SourceInstanceTool$Wonderjs.createSourceInstanceGameObject(state[0]);
                                      var sourceInstance1 = match[2];
                                      var gameObject1 = match[1];
                                      var state$1 = GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(gameObject1, sourceInstance1, match[0]);
                                      return Wonder_jest.Expect[/* toThrowMessage */20]("expect dispose the alive component, but actual not", Wonder_jest.Expect[/* expect */0]((function () {
                                                        GameObjectTool$Wonderjs.disposeGameObjectSourceInstanceComponent(gameObject1, sourceInstance1, state$1);
                                                        return /* () */0;
                                                      })));
                                    }));
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
