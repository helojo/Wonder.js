// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as MostUtils$Wonderjs                from "../../../../asset/utils/MostUtils.js";
import * as GPUDetectService$Wonderjs         from "../../../../service/record/all/gpu/GPUDetectService.js";
import * as DeviceManagerService$Wonderjs     from "../../../../service/record/all/device/DeviceManagerService.js";
import * as StateRenderWorkerService$Wonderjs from "../../../../service/state/render_worker/state/StateRenderWorkerService.js";

function execJob(_, e, stateData) {
  return MostUtils$Wonderjs.callFunc((function () {
                var state = StateRenderWorkerService$Wonderjs.unsafeGetState(stateData);
                state[/* gpuDetectRecord */2] = GPUDetectService$Wonderjs.detect(DeviceManagerService$Wonderjs.unsafeGetGl(state[/* deviceManagerRecord */3]), state[/* gpuDetectRecord */2]);
                StateRenderWorkerService$Wonderjs.setState(stateData, state);
                return e;
              }));
}

export {
  execJob ,
  
}
/* MostUtils-Wonderjs Not a pure module */