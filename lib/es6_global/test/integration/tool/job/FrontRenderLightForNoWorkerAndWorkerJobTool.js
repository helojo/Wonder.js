

import * as Sinon from "../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Js_primitive from "../../../../../../node_modules/bs-platform/lib/es6/js_primitive.js";
import * as CameraTool$Wonderjs from "../../../tool/service/camera/CameraTool.js";
import * as PointLightTool$Wonderjs from "../../../tool/service/light/PointLightTool.js";
import * as FakeGlWorkerTool$Wonderjs from "../../worker/tool/FakeGlWorkerTool.js";
import * as GLSLLocationTool$Wonderjs from "../../../tool/service/location/GLSLLocationTool.js";
import * as DirectionLightTool$Wonderjs from "../../../tool/service/light/DirectionLightTool.js";
import * as FrontRenderLightJobTool$Wonderjs from "../../../tool/job/no_worker/loop/FrontRenderLightJobTool.js";

function prepareForUseProgramCase(sandbox, state) {
  var match = FrontRenderLightJobTool$Wonderjs.prepareGameObject(sandbox, state);
  return CameraTool$Wonderjs.createCameraGameObject(match[0])[0];
}

function setFakeGlForLight(sandbox, nameArr, state) {
  var uniform1f = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
  var uniform3f = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
  var posArr = nameArr.map((function (_, index) {
          return index;
        }));
  var getUniformLocation = GLSLLocationTool$Wonderjs.getUniformLocationWithNameArr(sandbox, Sinon.createEmptyStubWithJsObjSandbox(sandbox), nameArr, posArr);
  var state$1 = FakeGlWorkerTool$Wonderjs.setFakeGl(FakeGlWorkerTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(getUniformLocation), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(uniform1f), Js_primitive.some(uniform3f), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), state);
  return /* tuple */[
          state$1,
          posArr,
          /* tuple */[
            uniform1f,
            uniform3f
          ]
        ];
}

function prepareOneForDirectionLight(sandbox, state) {
  var match = FrontRenderLightJobTool$Wonderjs.prepareGameObject(sandbox, state);
  var match$1 = DirectionLightTool$Wonderjs.createGameObject(match[0]);
  var match$2 = CameraTool$Wonderjs.createCameraGameObject(match$1[0]);
  return /* tuple */[
          match$2[0],
          match$1[1],
          match[3],
          match$1[2],
          match$2[2]
        ];
}

function prepareFourForPointLight(sandbox, state) {
  var match = FrontRenderLightJobTool$Wonderjs.prepareGameObject(sandbox, state);
  var match$1 = PointLightTool$Wonderjs.createGameObject(match[0]);
  var match$2 = PointLightTool$Wonderjs.createGameObject(match$1[0]);
  var match$3 = PointLightTool$Wonderjs.createGameObject(match$2[0]);
  var match$4 = PointLightTool$Wonderjs.createGameObject(match$3[0]);
  var match$5 = CameraTool$Wonderjs.createCameraGameObject(match$4[0]);
  return /* tuple */[
          match$5[0],
          /* tuple */[
            match$1[1],
            match$2[1],
            match$3[1],
            match$4[1]
          ],
          match[3],
          /* tuple */[
            match$1[2],
            match$2[2],
            match$3[2],
            match$4[2]
          ],
          match$5[2]
        ];
}

export {
  prepareForUseProgramCase ,
  setFakeGlForLight ,
  prepareOneForDirectionLight ,
  prepareFourForPointLight ,
  
}
/* Sinon Not a pure module */
