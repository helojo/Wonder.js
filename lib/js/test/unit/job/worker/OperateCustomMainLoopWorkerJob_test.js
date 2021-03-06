'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var JobAPI$Wonderjs = require("../../../../src/api/JobAPI.js");
var ArrayService$Wonderjs = require("../../../../src/service/atom/ArrayService.js");
var MainStateTool$Wonderjs = require("../../../tool/service/state/MainStateTool.js");
var WorkerJobTool$Wonderjs = require("../../../tool/service/workerJob/WorkerJobTool.js");
var TestMainWorkerTool$Wonderjs = require("../../../integration/worker/job/main_worker/tool/TestMainWorkerTool.js");
var StateDataMainService$Wonderjs = require("../../../../src/service/state/main/state/StateDataMainService.js");
var RenderJobsRenderWorkerTool$Wonderjs = require("../../../integration/worker/job/render_worker/tool/RenderJobsRenderWorkerTool.js");

describe("operate custom worker job", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = WorkerJobTool$Wonderjs.create(WorkerJobTool$Wonderjs.buildWorkerJobConfig(undefined, WorkerJobTool$Wonderjs.buildMainInitPipelinesConfigWithoutCreateWorkerInstanceAndMessage(/* () */0), "[\n    {\n        \"name\": \"default\",\n        \"jobs\": [\n            {\n                \"name\": \"loop\",\n                \"link\": \"concat\",\n                \"jobs\": [\n                    {\n                        \"name\": \"tick\"\n                    },\n                    {\n                        \"name\": \"copy_arraybuffer\"\n                    }\n                ]\n            },\n            {\n                \"name\": \"copy_arraybuffer\",\n                \"link\": \"concat\",\n                \"jobs\": [\n                    {\n                        \"name\": \"copy_transform\"\n                    }\n                ]\n            },\n            {\n                \"name\": \"frame\",\n                \"link\": \"merge\",\n                \"jobs\": [\n                    {\n                        \"name\": \"loop\"\n                    }\n                ]\n            }\n        ]\n    }\n]", undefined, undefined, undefined, undefined, /* () */0), TestMainWorkerTool$Wonderjs.initWithJobConfig(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0));
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("test operate custom job", (function () {
                describe("test operate main loop job", (function () {
                        describe("addWorkerMainLoopJob", (function () {
                                describe("add job to main loop pipeline", (function () {
                                        describe("test add job after target job", (function () {
                                                return Wonder_jest.testPromise("test add job to group job", (function () {
                                                              var customData = /* array */[];
                                                              var state$1 = JobAPI$Wonderjs.addWorkerMainLoopJob(/* tuple */[
                                                                    "customJob1",
                                                                    "copy_arraybuffer"
                                                                  ], /* AFTER */1, (function (stateData) {
                                                                      StateDataMainService$Wonderjs.unsafeGetState(stateData);
                                                                      ArrayService$Wonderjs.push(1, customData);
                                                                      return /* () */0;
                                                                    }), state[0]);
                                                              MainStateTool$Wonderjs.setState(state$1);
                                                              return RenderJobsRenderWorkerTool$Wonderjs.execMainLoopJobs(sandbox, (function () {
                                                                            return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](customData), /* array */[1]));
                                                                          }));
                                                            }));
                                              }));
                                        return Wonder_jest.testPromise("test add job to head", (function () {
                                                      var customData = /* array */[];
                                                      var state$1 = JobAPI$Wonderjs.addWorkerMainLoopJob(/* tuple */[
                                                            "customJob2",
                                                            "customJob1"
                                                          ], /* BEFORE */0, (function () {
                                                              ArrayService$Wonderjs.push(2, customData);
                                                              return /* () */0;
                                                            }), JobAPI$Wonderjs.addWorkerMainLoopJob(/* tuple */[
                                                                "customJob1",
                                                                "copy_arraybuffer"
                                                              ], /* BEFORE */0, (function (stateData) {
                                                                  StateDataMainService$Wonderjs.unsafeGetState(stateData);
                                                                  ArrayService$Wonderjs.push(1, customData);
                                                                  return /* () */0;
                                                                }), state[0]));
                                                      MainStateTool$Wonderjs.setState(state$1);
                                                      return RenderJobsRenderWorkerTool$Wonderjs.execMainLoopJobs(sandbox, (function () {
                                                                    return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](customData), /* array */[
                                                                                    2,
                                                                                    1
                                                                                  ]));
                                                                  }));
                                                    }));
                                      }));
                                return /* () */0;
                              }));
                        describe("removeWorkerMainLoopJob", (function () {
                                return Wonder_jest.testPromise("test remove custom added job", (function () {
                                              var customData = /* array */[];
                                              var state$1 = JobAPI$Wonderjs.removeWorkerMainLoopJob("customJob", JobAPI$Wonderjs.addWorkerMainLoopJob(/* tuple */[
                                                        "customJob",
                                                        "tick"
                                                      ], /* AFTER */1, (function (stateData) {
                                                          StateDataMainService$Wonderjs.unsafeGetState(stateData);
                                                          ArrayService$Wonderjs.push(1, customData);
                                                          return /* () */0;
                                                        }), state[0]));
                                              MainStateTool$Wonderjs.setState(state$1);
                                              return RenderJobsRenderWorkerTool$Wonderjs.execMainLoopJobs(sandbox, (function () {
                                                            return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](customData), /* array */[]));
                                                          }));
                                            }));
                              }));
                        return /* () */0;
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

/*  Not a pure module */
