'use strict';

var GeometryAPI$Wonderjs = require("../../../../../src/api/geometry/GeometryAPI.js");
var DirectorTool$Wonderjs = require("../../../core/DirectorTool.js");
var GeometryTool$Wonderjs = require("../../../service/geometry/GeometryTool.js");

function prepareGameObject(_, param, state) {
  var match = GeometryTool$Wonderjs.createGameObject(state);
  var geometry = match[2];
  var state$1 = GeometryAPI$Wonderjs.setGeometryIndices(geometry, param[3], GeometryAPI$Wonderjs.setGeometryNormals(geometry, param[1], GeometryAPI$Wonderjs.setGeometryTexCoords(geometry, param[2], GeometryAPI$Wonderjs.setGeometryVertices(geometry, param[0], match[0]))));
  return /* tuple */[
          state$1,
          match[1],
          geometry
        ];
}

function exec(state) {
  return DirectorTool$Wonderjs.init(DirectorTool$Wonderjs.prepare(state));
}

exports.prepareGameObject = prepareGameObject;
exports.exec = exec;
/* GeometryAPI-Wonderjs Not a pure module */
