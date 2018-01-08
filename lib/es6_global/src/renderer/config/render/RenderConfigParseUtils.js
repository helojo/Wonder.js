// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Json_decode from "../../../../../../node_modules/bs-json/lib/es6_global/src/Json_decode.js";

function convertRenderSettingToRecord(render_setting) {
  var json = JSON.parse(render_setting);
  return /* record */[
          /* platform */Json_decode.field("platform", Json_decode.string, json),
          /* backend */Json_decode.field("backend", (function (json) {
                  return /* record */[
                          /* name */Json_decode.field("name", Json_decode.string, json),
                          /* fail */Json_decode.optional((function (param) {
                                  return Json_decode.field("fail", Json_decode.string, param);
                                }), json)
                        ];
                }), json),
          /* browser */Json_decode.field("browser", (function (json) {
                  return Json_decode.array((function (json) {
                                return /* record */[
                                        /* name */Json_decode.field("name", Json_decode.string, json),
                                        /* version */Json_decode.field("version", Json_decode.string, json)
                                      ];
                              }), json);
                }), json),
          /* init_pipeline */Json_decode.field("init_pipeline", Json_decode.string, json),
          /* render_pipeline */Json_decode.field("render_pipeline", Json_decode.string, json)
        ];
}

function _convertPipelinesToRecord(pipelines) {
  return Json_decode.array((function (json) {
                return /* record */[
                        /* name */Json_decode.field("name", Json_decode.string, json),
                        /* jobs */Json_decode.field("jobs", (function (param) {
                                return Json_decode.array((function (json) {
                                              return /* record */[
                                                      /* name */Json_decode.field("name", Json_decode.string, json),
                                                      /* flags */Json_decode.optional((function (param) {
                                                              return Json_decode.field("flags", (function (json) {
                                                                            return Json_decode.array(Json_decode.string, json);
                                                                          }), param);
                                                            }), json)
                                                    ];
                                            }), param);
                              }), json)
                      ];
              }), JSON.parse(pipelines));
}

function _convertJobsToRecord(jobs) {
  return Json_decode.array((function (json) {
                return /* record */[
                        /* name */Json_decode.field("name", Json_decode.string, json),
                        /* shader */Json_decode.optional((function (param) {
                                return Json_decode.field("shader", Json_decode.string, param);
                              }), json)
                      ];
              }), JSON.parse(jobs));
}

var convertInitPipelinesToRecord = _convertPipelinesToRecord;

var convertInitJobsToRecord = _convertJobsToRecord;

var convertRenderPipelinesToRecord = _convertPipelinesToRecord;

var convertRenderJobsToRecord = _convertJobsToRecord;

function _convertShaderMapData(json) {
  return Json_decode.array((function (json) {
                return /* record */[
                        /* name */Json_decode.field("name", Json_decode.string, json),
                        /* value */Json_decode.field("value", (function (param) {
                                return Json_decode.array(Json_decode.string, param);
                              }), json)
                      ];
              }), json);
}

function convertShadersToRecord(shaders) {
  var json = JSON.parse(shaders);
  return /* record */[
          /* static_branchs */Json_decode.field("static_branchs", _convertShaderMapData, json),
          /* groups */Json_decode.field("groups", _convertShaderMapData, json),
          /* basic_material */Json_decode.field("basic_material", (function (json) {
                  return /* record */[/* material_shader */Json_decode.field("material_shader", (function (json) {
                                  return /* record */[/* shader_libs */Json_decode.field("shader_libs", (function (param) {
                                                  return Json_decode.array((function (json) {
                                                                return /* record */[
                                                                        /* type_ */Json_decode.optional((function (param) {
                                                                                return Json_decode.field("type", Json_decode.string, param);
                                                                              }), json),
                                                                        /* name */Json_decode.field("name", Json_decode.string, json)
                                                                      ];
                                                              }), param);
                                                }), json)];
                                }), json)];
                }), json)
        ];
}

function _convertGlslToRecord(json) {
  return Json_decode.optional((function (param) {
                return Json_decode.field("glsls", (function (json) {
                              return Json_decode.array((function (json) {
                                            return /* record */[
                                                    /* type_ */Json_decode.field("type", Json_decode.string, json),
                                                    /* name */Json_decode.field("name", Json_decode.string, json)
                                                  ];
                                          }), json);
                            }), param);
              }), json);
}

function _convertVariableToRecord(json) {
  return Json_decode.optional((function (param) {
                return Json_decode.field("variables", (function (json) {
                              return /* record */[
                                      /* uniforms */Json_decode.optional((function (param) {
                                              return Json_decode.field("uniforms", (function (json) {
                                                            return Json_decode.array((function (json) {
                                                                          return /* record */[
                                                                                  /* name */Json_decode.field("name", Json_decode.string, json),
                                                                                  /* field */Json_decode.field("field", Json_decode.string, json),
                                                                                  /* type_ */Json_decode.field("type", Json_decode.string, json),
                                                                                  /* from */Json_decode.field("from", Json_decode.string, json)
                                                                                ];
                                                                        }), json);
                                                          }), param);
                                            }), json),
                                      /* attributes */Json_decode.optional((function (param) {
                                              return Json_decode.field("attributes", (function (json) {
                                                            return Json_decode.array((function (json) {
                                                                          return /* record */[
                                                                                  /* name */Json_decode.optional((function (param) {
                                                                                          return Json_decode.field("name", Json_decode.string, param);
                                                                                        }), json),
                                                                                  /* buffer */Json_decode.field("buffer", Json_decode.string, json),
                                                                                  /* type_ */Json_decode.optional((function (param) {
                                                                                          return Json_decode.field("type", Json_decode.string, param);
                                                                                        }), json)
                                                                                ];
                                                                        }), json);
                                                          }), param);
                                            }), json)
                                    ];
                            }), param);
              }), json);
}

function convertShaderLibsToRecord(shader_libs) {
  return Json_decode.array((function (json) {
                return /* record */[
                        /* name */Json_decode.field("name", Json_decode.string, json),
                        /* glsls */_convertGlslToRecord(json),
                        /* variables */_convertVariableToRecord(json)
                      ];
              }), JSON.parse(shader_libs));
}

export {
  convertRenderSettingToRecord   ,
  _convertPipelinesToRecord      ,
  _convertJobsToRecord           ,
  convertInitPipelinesToRecord   ,
  convertInitJobsToRecord        ,
  convertRenderPipelinesToRecord ,
  convertRenderJobsToRecord      ,
  _convertShaderMapData          ,
  convertShadersToRecord         ,
  _convertGlslToRecord           ,
  _convertVariableToRecord       ,
  convertShaderLibsToRecord      ,
  
}
/* No side effect */