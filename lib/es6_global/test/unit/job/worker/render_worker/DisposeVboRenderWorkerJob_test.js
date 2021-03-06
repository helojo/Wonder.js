

import * as Most from "most";
import * as Curry from "../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as SettingTool$Wonderjs from "../../../../tool/service/setting/SettingTool.js";
import * as MainStateTool$Wonderjs from "../../../../tool/service/state/MainStateTool.js";
import * as VboBufferTool$Wonderjs from "../../../../tool/service/vboBuffer/VboBufferTool.js";
import * as SparseMapService$Wonderjs from "../../../../../src/service/atom/SparseMapService.js";
import * as TestMainWorkerTool$Wonderjs from "../../../../integration/worker/job/main_worker/tool/TestMainWorkerTool.js";
import * as RenderWorkerStateTool$Wonderjs from "../../../../tool/service/state/RenderWorkerStateTool.js";
import * as SparseMapService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";
import * as DisposeVboRenderWorkerJob$Wonderjs from "../../../../../src/job/worker/render/dispose/DisposeVboRenderWorkerJob.js";
import * as RenderBasicHardwareInstanceTool$Wonderjs from "../../../../tool/render/instance/RenderBasicHardwareInstanceTool.js";
import * as DisposeForNoWorkerAndWorkerJobTool$Wonderjs from "../../../../integration/tool/job/DisposeForNoWorkerAndWorkerJobTool.js";

describe("DisposeVboRenderWorkerJob", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestMainWorkerTool$Wonderjs.initWithJobConfig(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, SettingTool$Wonderjs.buildBufferConfigStr(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("dispose vbo buffer data", (function () {
                var _prepare = function (state) {
                  var match = DisposeForNoWorkerAndWorkerJobTool$Wonderjs.prepareGeometryGameObjects(state);
                  var match$1 = match[2];
                  var geometry3 = match$1[2];
                  var geometry2 = match$1[1];
                  var geometry1 = match$1[0];
                  var match$2 = match[1];
                  var match$3 = RenderBasicHardwareInstanceTool$Wonderjs.createSourceInstanceGameObject(sandbox, match[0]);
                  var sourceInstance4 = match$3[2][3];
                  var renderWorkerState = RenderWorkerStateTool$Wonderjs.createStateAndSetToStateData(/* () */0);
                  renderWorkerState[/* vboBufferRecord */23] = VboBufferTool$Wonderjs.addVboBufferToSourceInstanceBufferMapByRecord(sourceInstance4, VboBufferTool$Wonderjs.addVboBufferToGeometryBufferMapByRecord(geometry3, VboBufferTool$Wonderjs.addVboBufferToGeometryBufferMapByRecord(geometry2, VboBufferTool$Wonderjs.addVboBufferToGeometryBufferMapByRecord(geometry1, renderWorkerState[/* vboBufferRecord */23]))));
                  return /* tuple */[
                          match$3[0],
                          /* tuple */[
                            match$2[0],
                            match$2[1],
                            match$2[2],
                            match$3[1]
                          ],
                          /* tuple */[
                            geometry1,
                            geometry2,
                            geometry3,
                            sourceInstance4
                          ]
                        ];
                };
                var _buildData = function (geometry1, geometry2, geometry3, sourceInstance4) {
                  return {
                          data: {
                            geometryNeedDisposeVboBufferArr: /* array */[
                              geometry1,
                              geometry2,
                              geometry3
                            ],
                            sourceInstanceNeedDisposeVboBufferArr: /* array */[sourceInstance4]
                          }
                        };
                };
                Wonder_jest.testPromise("add buffer to pool", (function () {
                        var match = _prepare(state);
                        var match$1 = match[2];
                        return Most.drain(DisposeVboRenderWorkerJob$Wonderjs.execJob(undefined, _buildData(match$1[0], match$1[1], match$1[2], match$1[3]), RenderWorkerStateTool$Wonderjs.getStateData(/* () */0))).then((function () {
                                      var renderWorkerState = RenderWorkerStateTool$Wonderjs.unsafeGetState(/* () */0);
                                      var match = renderWorkerState[/* vboBufferRecord */23];
                                      return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                          SparseMapService$Wonderjs.length(match[/* vertexArrayBufferPool */5]),
                                                          SparseMapService$Wonderjs.length(match[/* elementArrayBufferPool */6]),
                                                          SparseMapService$Wonderjs.length(match[/* matrixInstanceBufferPool */7])
                                                        ]), /* tuple */[
                                                      9,
                                                      3,
                                                      1
                                                    ]));
                                    }));
                      }));
                return Wonder_jest.testPromise("remove from buffer map", (function () {
                              var match = _prepare(state);
                              var match$1 = match[2];
                              var sourceInstance4 = match$1[3];
                              var geometry3 = match$1[2];
                              var geometry2 = match$1[1];
                              var geometry1 = match$1[0];
                              return Most.drain(DisposeVboRenderWorkerJob$Wonderjs.execJob(undefined, _buildData(geometry1, geometry2, geometry3, sourceInstance4), RenderWorkerStateTool$Wonderjs.getStateData(/* () */0))).then((function () {
                                            var renderWorkerState = RenderWorkerStateTool$Wonderjs.unsafeGetState(/* () */0);
                                            var match = renderWorkerState[/* vboBufferRecord */23];
                                            var geometryElementArrayBufferMap = match[/* geometryElementArrayBufferMap */3];
                                            var geometryNormalBufferMap = match[/* geometryNormalBufferMap */2];
                                            var geometryVertexBufferMap = match[/* geometryVertexBufferMap */0];
                                            return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                SparseMapService$WonderCommonlib.has(geometry1, geometryVertexBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry1, geometryNormalBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry1, geometryElementArrayBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry2, geometryVertexBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry2, geometryNormalBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry2, geometryElementArrayBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry3, geometryVertexBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry3, geometryNormalBufferMap),
                                                                SparseMapService$WonderCommonlib.has(geometry3, geometryElementArrayBufferMap),
                                                                SparseMapService$WonderCommonlib.has(sourceInstance4, match[/* matrixInstanceBufferMap */4])
                                                              ]), /* tuple */[
                                                            false,
                                                            false,
                                                            false,
                                                            false,
                                                            false,
                                                            false,
                                                            false,
                                                            false,
                                                            false,
                                                            false
                                                          ]));
                                          }));
                            }));
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
