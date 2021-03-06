'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../../../../tool/TestTool.js");
var SettingTool$Wonderjs = require("../../../../../tool/service/setting/SettingTool.js");
var BasicSourceTextureAPI$Wonderjs = require("../../../../../../src/api/texture/BasicSourceTextureAPI.js");
var BasicSourceTextureTool$Wonderjs = require("../../../../../tool/service/texture/BasicSourceTextureTool.js");
var CreateStateMainService$Wonderjs = require("../../../../../../src/service/state/main/state/CreateStateMainService.js");

describe("BasicSourceTexture", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */CreateStateMainService$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("createBasicSourceTexture", (function () {
                Wonder_jest.test("create a new texture which is just index(int)", (function () {
                        var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match[1]), 0);
                      }));
                return Wonder_jest.test("shouldn't exceed buffer count", (function () {
                              var state = TestTool$Wonderjs.initWithoutBuildFakeDom(sandbox, undefined, SettingTool$Wonderjs.buildBufferConfigStr(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 2, undefined, undefined, undefined, /* () */0), /* () */0);
                              BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state);
                              BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state);
                              return Wonder_jest.Expect[/* toThrowMessage */20]("expect index: 2 <= maxIndex: 1, but actual not", Wonder_jest.Expect[/* expect */0]((function () {
                                                BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state);
                                                return /* () */0;
                                              })));
                            }));
              }));
        describe("test default data", (function () {
                describe("is need updates", (function () {
                        return Wonder_jest.test("default is need update", (function () {
                                      var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureTool$Wonderjs.isNeedUpdate(match[1], match[0])), true);
                                    }));
                      }));
                describe("is flipY", (function () {
                        return Wonder_jest.test("default is true", (function () {
                                      var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureFlipY(match[1], match[0])), true);
                                    }));
                      }));
                return /* () */0;
              }));
        describe("getBasicSourceTextureWidth", (function () {
                describe("if set source", (function () {
                        var _prepare = function (state) {
                          var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                          var texture = match[1];
                          var source = {
                            width: 100
                          };
                          var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureSource(texture, source, match[0]);
                          return /* tuple */[
                                  state$1,
                                  texture,
                                  source
                                ];
                        };
                        return Wonder_jest.test("return source.width", (function () {
                                      var match = _prepare(state);
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWidth(match[1], match[0])), match[2].width);
                                    }));
                      }));
                return Wonder_jest.test("else, fatal", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = match[0];
                              return Wonder_jest.Expect[/* toThrowMessage */20]("source should exist", Wonder_jest.Expect[/* expect */0]((function () {
                                                return BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWidth(texture, state$1);
                                              })));
                            }));
              }));
        describe("getBasicSourceTextureHeight", (function () {
                describe("if set source", (function () {
                        var _prepare = function (state) {
                          var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                          var texture = match[1];
                          var source = {
                            height: 100
                          };
                          var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureSource(texture, source, match[0]);
                          return /* tuple */[
                                  state$1,
                                  texture,
                                  source
                                ];
                        };
                        return Wonder_jest.test("return source.height", (function () {
                                      var match = _prepare(state);
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureHeight(match[1], match[0])), match[2].height);
                                    }));
                      }));
                return Wonder_jest.test("else, fatal", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = match[0];
                              return Wonder_jest.Expect[/* toThrowMessage */20]("source should exist", Wonder_jest.Expect[/* expect */0]((function () {
                                                return BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureHeight(texture, state$1);
                                              })));
                            }));
              }));
        describe("setBasicSourceTextureWrapS", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureWrapS(texture, /* Mirrored_repeat */1, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWrapS(texture, state$1)), /* Mirrored_repeat */1);
                            }));
              }));
        describe("setBasicSourceTextureWrapT", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureWrapT(texture, /* Mirrored_repeat */1, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWrapT(texture, state$1)), /* Mirrored_repeat */1);
                            }));
              }));
        describe("setBasicSourceTextureMagFilter", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureMagFilter(texture, /* Linear */1, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureMagFilter(texture, state$1)), /* Linear */1);
                            }));
              }));
        describe("setBasicSourceTextureMinFilter", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureMinFilter(texture, /* Linear */1, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureMinFilter(texture, state$1)), /* Linear */1);
                            }));
              }));
        describe("setBasicSourceTextureFormat", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureFormat(texture, /* Rgb */0, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureFormat(texture, state$1)), /* Rgb */0);
                            }));
              }));
        describe("setBasicSourceTextureType", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureType(texture, 1, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureType(texture, state$1)), 1);
                            }));
              }));
        describe("setBasicSourceTextureFlipY", (function () {
                return Wonder_jest.test("test", (function () {
                              var match = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture(state[0]);
                              var texture = match[1];
                              var state$1 = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureFlipY(texture, false, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureFlipY(texture, state$1)), false);
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
