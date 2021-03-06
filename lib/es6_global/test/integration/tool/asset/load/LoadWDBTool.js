

import * as Most from "most";
import * as MainStateTool$Wonderjs from "../../../../tool/service/state/MainStateTool.js";
import * as LoaderManagerSystem$Wonderjs from "../../../../../src/asset/LoaderManagerSystem.js";

function load(wdbPath, fetchFunc, $staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, _) {
  var isSetIMGUIFunc = $staropt$star !== undefined ? $staropt$star : true;
  var isBindEvent = $staropt$star$1 !== undefined ? $staropt$star$1 : true;
  var isActiveCamera = $staropt$star$2 !== undefined ? $staropt$star$2 : true;
  var isRenderLight = $staropt$star$3 !== undefined ? $staropt$star$3 : true;
  var isLoadImage = $staropt$star$4 !== undefined ? $staropt$star$4 : true;
  var handleWhenLoadingFunc = $staropt$star$5 !== undefined ? $staropt$star$5 : (function (_, _$1) {
        return /* () */0;
      });
  var result = /* record */[/* contents */1];
  return Most.forEach((function (data) {
                  result[0] = data;
                  return /* () */0;
                }), LoaderManagerSystem$Wonderjs.loadWholeWDB(wdbPath, /* tuple */[
                    isSetIMGUIFunc,
                    isBindEvent,
                    isActiveCamera,
                    isRenderLight,
                    isLoadImage
                  ], /* tuple */[
                    fetchFunc,
                    handleWhenLoadingFunc
                  ], MainStateTool$Wonderjs.unsafeGetState(/* () */0))).then((function () {
                return Promise.resolve(result[0]);
              }));
}

export {
  load ,
  
}
/* most Not a pure module */
