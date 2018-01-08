// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as ArraySystem$WonderCommonlib     from "../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArraySystem.js";
import * as SparseMapSystem$WonderCommonlib from "../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapSystem.js";

function buildMapFromArray(array, map) {
  ArraySystem$WonderCommonlib.forEach((function (value) {
          SparseMapSystem$WonderCommonlib.set(value, /* true */1, map);
          return /* () */0;
        }), array);
  return map;
}

export {
  buildMapFromArray ,
  
}
/* ArraySystem-WonderCommonlib Not a pure module */