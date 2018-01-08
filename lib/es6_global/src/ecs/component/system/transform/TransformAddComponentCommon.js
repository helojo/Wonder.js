// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as ComponentSystem$Wonderjs      from "../component/ComponentSystem.js";
import * as TransformStateCommon$Wonderjs from "./TransformStateCommon.js";

function handleAddComponent(transform, gameObjectUid, state) {
  var transformData = TransformStateCommon$Wonderjs.getTransformData(state);
  ComponentSystem$Wonderjs.addComponentToGameObjectMap(transform, gameObjectUid, transformData[/* gameObjectMap */3]);
  return state;
}

export {
  handleAddComponent ,
  
}
/* TransformStateCommon-Wonderjs Not a pure module */