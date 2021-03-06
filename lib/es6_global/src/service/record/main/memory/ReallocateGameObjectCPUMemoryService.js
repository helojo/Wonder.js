

import * as Caml_array from "../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as ArrayService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as MutableSparseMapService$Wonderjs from "../../../atom/MutableSparseMapService.js";
import * as ReallocateCPUMemoryService$Wonderjs from "../../../primitive/memory/ReallocateCPUMemoryService.js";
import * as MutableSparseMapService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/MutableSparseMapService.js";

function _setNewDataToState(newAliveUidArray, record, param) {
  var newrecord = Caml_array.caml_array_dup(record);
  newrecord[/* nameMap */1] = param[0];
  newrecord[/* isRootMap */2] = param[2];
  newrecord[/* isActiveMap */3] = param[1];
  newrecord[/* disposedUidMap */5] = MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0);
  newrecord[/* aliveUidArray */27] = newAliveUidArray;
  newrecord[/* geometryMap */28] = param[3];
  newrecord[/* transformMap */29] = param[4];
  newrecord[/* basicCameraViewMap */30] = param[7];
  newrecord[/* perspectiveCameraProjectionMap */31] = param[8];
  newrecord[/* arcballCameraControllerMap */32] = param[9];
  newrecord[/* meshRendererMap */33] = param[5];
  newrecord[/* basicMaterialMap */34] = param[10];
  newrecord[/* lightMaterialMap */35] = param[11];
  newrecord[/* sourceInstanceMap */36] = param[14];
  newrecord[/* objectInstanceMap */37] = param[15];
  newrecord[/* directionLightMap */38] = param[12];
  newrecord[/* pointLightMap */39] = param[13];
  newrecord[/* scriptMap */40] = param[6];
  return newrecord;
}

function _setNewMap(uid, oldMap, newMap) {
  var match = MutableSparseMapService$Wonderjs.fastGet(uid, oldMap);
  if (match[0]) {
    return MutableSparseMapService$WonderCommonlib.set(uid, match[1], newMap);
  } else {
    return newMap;
  }
}

function _allocateNewMaps(newAliveUidArray, record) {
  var nameMap = record[/* nameMap */1];
  var isRootMap = record[/* isRootMap */2];
  var isActiveMap = record[/* isActiveMap */3];
  var geometryMap = record[/* geometryMap */28];
  var transformMap = record[/* transformMap */29];
  var basicCameraViewMap = record[/* basicCameraViewMap */30];
  var perspectiveCameraProjectionMap = record[/* perspectiveCameraProjectionMap */31];
  var arcballCameraControllerMap = record[/* arcballCameraControllerMap */32];
  var meshRendererMap = record[/* meshRendererMap */33];
  var basicMaterialMap = record[/* basicMaterialMap */34];
  var lightMaterialMap = record[/* lightMaterialMap */35];
  var sourceInstanceMap = record[/* sourceInstanceMap */36];
  var objectInstanceMap = record[/* objectInstanceMap */37];
  var directionLightMap = record[/* directionLightMap */38];
  var pointLightMap = record[/* pointLightMap */39];
  var scriptMap = record[/* scriptMap */40];
  return ArrayService$WonderCommonlib.reduceOneParam((function (param, uid) {
                return /* tuple */[
                        _setNewMap(uid, nameMap, param[0]),
                        _setNewMap(uid, isActiveMap, param[1]),
                        _setNewMap(uid, isRootMap, param[2]),
                        _setNewMap(uid, geometryMap, param[3]),
                        MutableSparseMapService$WonderCommonlib.set(uid, MutableSparseMapService$WonderCommonlib.unsafeGet(uid, transformMap), param[4]),
                        _setNewMap(uid, meshRendererMap, param[5]),
                        _setNewMap(uid, scriptMap, param[6]),
                        _setNewMap(uid, basicCameraViewMap, param[7]),
                        _setNewMap(uid, perspectiveCameraProjectionMap, param[8]),
                        _setNewMap(uid, arcballCameraControllerMap, param[9]),
                        _setNewMap(uid, basicMaterialMap, param[10]),
                        _setNewMap(uid, lightMaterialMap, param[11]),
                        _setNewMap(uid, directionLightMap, param[12]),
                        _setNewMap(uid, pointLightMap, param[13]),
                        _setNewMap(uid, sourceInstanceMap, param[14]),
                        _setNewMap(uid, objectInstanceMap, param[15])
                      ];
              }), /* tuple */[
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0),
              MutableSparseMapService$WonderCommonlib.createEmpty(/* () */0)
            ], newAliveUidArray);
}

function reAllocate(record) {
  var disposedUidMap = record[/* disposedUidMap */5];
  var aliveUidArray = record[/* aliveUidArray */27];
  var newAliveUidArray = aliveUidArray.filter((function (aliveUid) {
          return !ReallocateCPUMemoryService$Wonderjs.isDisposed(aliveUid, disposedUidMap);
        }));
  return _setNewDataToState(newAliveUidArray, record, _allocateNewMaps(newAliveUidArray, record));
}

export {
  _setNewDataToState ,
  _setNewMap ,
  _allocateNewMaps ,
  reAllocate ,
  
}
/* No side effect */
