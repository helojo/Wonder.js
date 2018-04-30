// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as MostUtils$Wonderjs                            from "../../../../asset/utils/MostUtils.js";
import * as MessageService$Wonderjs                       from "../../../../service/primitive/worker/MessageService.js";
import * as StateRenderWorkerService$Wonderjs             from "../../../../service/state/render_worker/state/StateRenderWorkerService.js";
import * as CreateTypeArrayCustomGeometryService$Wonderjs from "../../../../service/record/all/geometry/custom/CreateTypeArrayCustomGeometryService.js";

function _createTypeArrays(buffer, count, state) {
  var match = CreateTypeArrayCustomGeometryService$Wonderjs.createTypeArrays(buffer, count);
  state[/* customGeometryRecord */15] = /* Some */[/* record */[
      /* vertices */match[0],
      /* normals */match[1],
      /* indices */match[2],
      /* verticesInfos */match[3],
      /* normalsInfos */match[4],
      /* indicesInfos */match[5]
    ]];
  return state;
}

function execJob(_, e, stateData) {
  return MostUtils$Wonderjs.callFunc((function () {
                var state = StateRenderWorkerService$Wonderjs.unsafeGetState(stateData);
                var data = MessageService$Wonderjs.getRecord(e);
                var customGeometryData = data.customGeometryData;
                var buffer = customGeometryData.buffer;
                var count = data.bufferData.customGeometryPointDataBufferCount;
                StateRenderWorkerService$Wonderjs.setState(stateData, _createTypeArrays(buffer, count, state));
                return e;
              }));
}

export {
  _createTypeArrays ,
  execJob           ,
  
}
/* MostUtils-Wonderjs Not a pure module */