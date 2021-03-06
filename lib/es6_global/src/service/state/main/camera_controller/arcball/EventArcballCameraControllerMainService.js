

import * as List from "../../../../../../../../node_modules/bs-platform/lib/es6/list.js";
import * as Caml_array from "../../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as DomExtend$Wonderjs from "../../../../../external/DomExtend.js";
import * as ViewService$Wonderjs from "../../../../record/main/device/ViewService.js";
import * as OptionService$Wonderjs from "../../../../atom/OptionService.js";
import * as NameEventService$Wonderjs from "../../../../record/main/event/NameEventService.js";
import * as ManageEventMainService$Wonderjs from "../../event/ManageEventMainService.js";
import * as DisposeComponentService$Wonderjs from "../../../../primitive/component/DisposeComponentService.js";
import * as BrowserDetectMainService$Wonderjs from "../../browserDetect/BrowserDetectMainService.js";
import * as HandlePointDomEventMainService$Wonderjs from "../../event/handle/HandlePointDomEventMainService.js";
import * as MutableSparseMapService$WonderCommonlib from "../../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/MutableSparseMapService.js";
import * as OperateArcballCameraControllerService$Wonderjs from "../../../../record/main/camera_controller/arcball/OperateArcballCameraControllerService.js";
import * as TargetArcballCameraControllerMainService$Wonderjs from "./TargetArcballCameraControllerMainService.js";

function _addEventHandleFunc(cameraController, handleFunc, eventHandleFuncListMap) {
  var match = MutableSparseMapService$WonderCommonlib.get(cameraController, eventHandleFuncListMap);
  if (match !== undefined) {
    return MutableSparseMapService$WonderCommonlib.set(cameraController, /* :: */[
                handleFunc,
                match
              ], eventHandleFuncListMap);
  } else {
    return MutableSparseMapService$WonderCommonlib.set(cameraController, /* :: */[
                handleFunc,
                /* [] */0
              ], eventHandleFuncListMap);
  }
}

function _addPointDragStartEventHandleFunc(cameraController, handleFunc, record) {
  return /* record */[
          /* index */record[/* index */0],
          /* pointDragStartEventHandleFuncListMap */_addEventHandleFunc(cameraController, handleFunc, record[/* pointDragStartEventHandleFuncListMap */1]),
          /* pointDragDropEventHandleFuncListMap */record[/* pointDragDropEventHandleFuncListMap */2],
          /* pointDragOverEventHandleFuncListMap */record[/* pointDragOverEventHandleFuncListMap */3],
          /* pointScaleEventHandleFuncListMap */record[/* pointScaleEventHandleFuncListMap */4],
          /* keydownEventHandleFuncListMap */record[/* keydownEventHandleFuncListMap */5],
          /* dirtyArray */record[/* dirtyArray */6],
          /* distanceMap */record[/* distanceMap */7],
          /* minDistanceMap */record[/* minDistanceMap */8],
          /* phiMap */record[/* phiMap */9],
          /* thetaMap */record[/* thetaMap */10],
          /* thetaMarginMap */record[/* thetaMarginMap */11],
          /* targetMap */record[/* targetMap */12],
          /* moveSpeedXMap */record[/* moveSpeedXMap */13],
          /* moveSpeedYMap */record[/* moveSpeedYMap */14],
          /* rotateSpeedMap */record[/* rotateSpeedMap */15],
          /* wheelSpeedMap */record[/* wheelSpeedMap */16],
          /* gameObjectMap */record[/* gameObjectMap */17],
          /* disposedIndexArray */record[/* disposedIndexArray */18]
        ];
}

function _addPointDragDropEventHandleFunc(cameraController, handleFunc, record) {
  return /* record */[
          /* index */record[/* index */0],
          /* pointDragStartEventHandleFuncListMap */record[/* pointDragStartEventHandleFuncListMap */1],
          /* pointDragDropEventHandleFuncListMap */_addEventHandleFunc(cameraController, handleFunc, record[/* pointDragDropEventHandleFuncListMap */2]),
          /* pointDragOverEventHandleFuncListMap */record[/* pointDragOverEventHandleFuncListMap */3],
          /* pointScaleEventHandleFuncListMap */record[/* pointScaleEventHandleFuncListMap */4],
          /* keydownEventHandleFuncListMap */record[/* keydownEventHandleFuncListMap */5],
          /* dirtyArray */record[/* dirtyArray */6],
          /* distanceMap */record[/* distanceMap */7],
          /* minDistanceMap */record[/* minDistanceMap */8],
          /* phiMap */record[/* phiMap */9],
          /* thetaMap */record[/* thetaMap */10],
          /* thetaMarginMap */record[/* thetaMarginMap */11],
          /* targetMap */record[/* targetMap */12],
          /* moveSpeedXMap */record[/* moveSpeedXMap */13],
          /* moveSpeedYMap */record[/* moveSpeedYMap */14],
          /* rotateSpeedMap */record[/* rotateSpeedMap */15],
          /* wheelSpeedMap */record[/* wheelSpeedMap */16],
          /* gameObjectMap */record[/* gameObjectMap */17],
          /* disposedIndexArray */record[/* disposedIndexArray */18]
        ];
}

function _addPointDragOverEventHandleFunc(cameraController, handleFunc, record) {
  return /* record */[
          /* index */record[/* index */0],
          /* pointDragStartEventHandleFuncListMap */record[/* pointDragStartEventHandleFuncListMap */1],
          /* pointDragDropEventHandleFuncListMap */record[/* pointDragDropEventHandleFuncListMap */2],
          /* pointDragOverEventHandleFuncListMap */_addEventHandleFunc(cameraController, handleFunc, record[/* pointDragOverEventHandleFuncListMap */3]),
          /* pointScaleEventHandleFuncListMap */record[/* pointScaleEventHandleFuncListMap */4],
          /* keydownEventHandleFuncListMap */record[/* keydownEventHandleFuncListMap */5],
          /* dirtyArray */record[/* dirtyArray */6],
          /* distanceMap */record[/* distanceMap */7],
          /* minDistanceMap */record[/* minDistanceMap */8],
          /* phiMap */record[/* phiMap */9],
          /* thetaMap */record[/* thetaMap */10],
          /* thetaMarginMap */record[/* thetaMarginMap */11],
          /* targetMap */record[/* targetMap */12],
          /* moveSpeedXMap */record[/* moveSpeedXMap */13],
          /* moveSpeedYMap */record[/* moveSpeedYMap */14],
          /* rotateSpeedMap */record[/* rotateSpeedMap */15],
          /* wheelSpeedMap */record[/* wheelSpeedMap */16],
          /* gameObjectMap */record[/* gameObjectMap */17],
          /* disposedIndexArray */record[/* disposedIndexArray */18]
        ];
}

function _addPointScaleEventHandleFunc(cameraController, handleFunc, record) {
  return /* record */[
          /* index */record[/* index */0],
          /* pointDragStartEventHandleFuncListMap */record[/* pointDragStartEventHandleFuncListMap */1],
          /* pointDragDropEventHandleFuncListMap */record[/* pointDragDropEventHandleFuncListMap */2],
          /* pointDragOverEventHandleFuncListMap */record[/* pointDragOverEventHandleFuncListMap */3],
          /* pointScaleEventHandleFuncListMap */_addEventHandleFunc(cameraController, handleFunc, record[/* pointScaleEventHandleFuncListMap */4]),
          /* keydownEventHandleFuncListMap */record[/* keydownEventHandleFuncListMap */5],
          /* dirtyArray */record[/* dirtyArray */6],
          /* distanceMap */record[/* distanceMap */7],
          /* minDistanceMap */record[/* minDistanceMap */8],
          /* phiMap */record[/* phiMap */9],
          /* thetaMap */record[/* thetaMap */10],
          /* thetaMarginMap */record[/* thetaMarginMap */11],
          /* targetMap */record[/* targetMap */12],
          /* moveSpeedXMap */record[/* moveSpeedXMap */13],
          /* moveSpeedYMap */record[/* moveSpeedYMap */14],
          /* rotateSpeedMap */record[/* rotateSpeedMap */15],
          /* wheelSpeedMap */record[/* wheelSpeedMap */16],
          /* gameObjectMap */record[/* gameObjectMap */17],
          /* disposedIndexArray */record[/* disposedIndexArray */18]
        ];
}

function _addKeydownEventHandleFunc(cameraController, handleFunc, record) {
  return /* record */[
          /* index */record[/* index */0],
          /* pointDragStartEventHandleFuncListMap */record[/* pointDragStartEventHandleFuncListMap */1],
          /* pointDragDropEventHandleFuncListMap */record[/* pointDragDropEventHandleFuncListMap */2],
          /* pointDragOverEventHandleFuncListMap */record[/* pointDragOverEventHandleFuncListMap */3],
          /* pointScaleEventHandleFuncListMap */record[/* pointScaleEventHandleFuncListMap */4],
          /* keydownEventHandleFuncListMap */_addEventHandleFunc(cameraController, handleFunc, record[/* keydownEventHandleFuncListMap */5]),
          /* dirtyArray */record[/* dirtyArray */6],
          /* distanceMap */record[/* distanceMap */7],
          /* minDistanceMap */record[/* minDistanceMap */8],
          /* phiMap */record[/* phiMap */9],
          /* thetaMap */record[/* thetaMap */10],
          /* thetaMarginMap */record[/* thetaMarginMap */11],
          /* targetMap */record[/* targetMap */12],
          /* moveSpeedXMap */record[/* moveSpeedXMap */13],
          /* moveSpeedYMap */record[/* moveSpeedYMap */14],
          /* rotateSpeedMap */record[/* rotateSpeedMap */15],
          /* wheelSpeedMap */record[/* wheelSpeedMap */16],
          /* gameObjectMap */record[/* gameObjectMap */17],
          /* disposedIndexArray */record[/* disposedIndexArray */18]
        ];
}

function _changeOrbit(cameraController, param, arcballCameraControllerRecord) {
  var movementDelta = param[/* movementDelta */5];
  var rotateSpeed = OperateArcballCameraControllerService$Wonderjs.unsafeGetRotateSpeed(cameraController, arcballCameraControllerRecord);
  return OperateArcballCameraControllerService$Wonderjs.setTheta(cameraController, OperateArcballCameraControllerService$Wonderjs.unsafeGetTheta(cameraController, arcballCameraControllerRecord) - movementDelta[1] / (100 / rotateSpeed), OperateArcballCameraControllerService$Wonderjs.setPhi(cameraController, OperateArcballCameraControllerService$Wonderjs.unsafeGetPhi(cameraController, arcballCameraControllerRecord) + movementDelta[0] / (100 / rotateSpeed), arcballCameraControllerRecord));
}

function _isCombinedKey(param) {
  if (param[/* ctrlKey */2] || param[/* altKey */3] || param[/* shiftKey */4]) {
    return true;
  } else {
    return param[/* metaKey */5];
  }
}

function isTriggerKeydownEventHandler($$event) {
  return !_isCombinedKey($$event);
}

function prepareBindEvent(cameraController, state) {
  var pointDragStartHandleFunc = function ($$event, state) {
    var viewRecord = state[/* viewRecord */8];
    var match = BrowserDetectMainService$Wonderjs.isMobile(state);
    if (match) {
      return /* tuple */[
              state,
              $$event
            ];
    } else {
      var canvas = ViewService$Wonderjs.unsafeGetCanvas(viewRecord);
      DomExtend$Wonderjs.requestPointerLock(canvas);
      return /* tuple */[
              state,
              $$event
            ];
    }
  };
  var pointDragDropHandleFunc = function ($$event, state) {
    var viewRecord = state[/* viewRecord */8];
    var match = BrowserDetectMainService$Wonderjs.isMobile(state);
    if (match) {
      return /* tuple */[
              state,
              $$event
            ];
    } else {
      var canvas = ViewService$Wonderjs.unsafeGetCanvas(viewRecord);
      var $$document$1 = document;
      var match$1 = $$document$1.pointerLockElement === canvas;
      if (match$1) {
        DomExtend$Wonderjs.exitPointerLock(/* () */0);
      }
      return /* tuple */[
              state,
              $$event
            ];
    }
  };
  var pointDragOverHandleFunc = function ($$event, state) {
    var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
    var newrecord = Caml_array.caml_array_dup(state);
    return /* tuple */[
            (newrecord[/* arcballCameraControllerRecord */24] = _changeOrbit(cameraController, OptionService$Wonderjs.unsafeGet($$event[/* userData */4]), arcballCameraControllerRecord), newrecord),
            $$event
          ];
  };
  var pointScaleHandleFunc = function ($$event, state) {
    var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
    var pointEvent = OptionService$Wonderjs.unsafeGet($$event[/* userData */4]);
    HandlePointDomEventMainService$Wonderjs.preventDefault(pointEvent[/* event */6]);
    var newrecord = Caml_array.caml_array_dup(state);
    return /* tuple */[
            (newrecord[/* arcballCameraControllerRecord */24] = OperateArcballCameraControllerService$Wonderjs.setDistanceByEvent(cameraController, pointEvent, arcballCameraControllerRecord), newrecord),
            $$event
          ];
  };
  var keydownHandleFunc = function ($$event, state) {
    var match = !_isCombinedKey($$event);
    if (match) {
      return TargetArcballCameraControllerMainService$Wonderjs.setTargetByKeyboardEvent(cameraController, $$event, state);
    } else {
      return state;
    }
  };
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* arcballCameraControllerRecord */24] = _addKeydownEventHandleFunc(cameraController, keydownHandleFunc, _addPointScaleEventHandleFunc(cameraController, pointScaleHandleFunc, _addPointDragOverEventHandleFunc(cameraController, pointDragOverHandleFunc, _addPointDragDropEventHandleFunc(cameraController, pointDragDropHandleFunc, _addPointDragStartEventHandleFunc(cameraController, pointDragStartHandleFunc, state[/* arcballCameraControllerRecord */24])))));
  return /* tuple */[
          newrecord,
          pointDragStartHandleFunc,
          pointDragDropHandleFunc,
          pointDragOverHandleFunc,
          pointScaleHandleFunc,
          keydownHandleFunc
        ];
}

function bindEvent(cameraController, state) {
  var match = prepareBindEvent(cameraController, state);
  var state$1 = ManageEventMainService$Wonderjs.onCustomGlobalEvent(NameEventService$Wonderjs.getPointDragStartEventName(/* () */0), match[1], match[0], undefined, /* () */0);
  var state$2 = ManageEventMainService$Wonderjs.onCustomGlobalEvent(NameEventService$Wonderjs.getPointDragDropEventName(/* () */0), match[2], state$1, undefined, /* () */0);
  var state$3 = ManageEventMainService$Wonderjs.onCustomGlobalEvent(NameEventService$Wonderjs.getPointDragOverEventName(/* () */0), match[3], state$2, undefined, /* () */0);
  var state$4 = ManageEventMainService$Wonderjs.onCustomGlobalEvent(NameEventService$Wonderjs.getPointScaleEventName(/* () */0), match[4], state$3, undefined, /* () */0);
  return ManageEventMainService$Wonderjs.onKeyboardEvent(/* KeyDown */10, match[5], state$4, undefined, /* () */0);
}

var _unbindPointEvent = ManageEventMainService$Wonderjs.offCustomGlobalEventByHandleFunc;

var _unbindKeyboardEvent = ManageEventMainService$Wonderjs.offKeyboardEventByHandleFunc;

function _disposePointDragStartEventHandleFuncListMap(cameraController, state) {
  var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
  var pointDragStartEventHandleFuncListMap = arcballCameraControllerRecord[/* pointDragStartEventHandleFuncListMap */1];
  var match = MutableSparseMapService$WonderCommonlib.get(cameraController, pointDragStartEventHandleFuncListMap);
  if (match !== undefined) {
    var state$1 = List.fold_left((function (state, func) {
            var eventName = NameEventService$Wonderjs.getPointDragStartEventName(/* () */0);
            return ManageEventMainService$Wonderjs.offCustomGlobalEventByHandleFunc(eventName, func, state);
          }), state, match);
    var newrecord = Caml_array.caml_array_dup(state$1);
    newrecord[/* arcballCameraControllerRecord */24] = /* record */[
      /* index */arcballCameraControllerRecord[/* index */0],
      /* pointDragStartEventHandleFuncListMap */DisposeComponentService$Wonderjs.disposeSparseMapData(cameraController, pointDragStartEventHandleFuncListMap),
      /* pointDragDropEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragDropEventHandleFuncListMap */2],
      /* pointDragOverEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragOverEventHandleFuncListMap */3],
      /* pointScaleEventHandleFuncListMap */arcballCameraControllerRecord[/* pointScaleEventHandleFuncListMap */4],
      /* keydownEventHandleFuncListMap */arcballCameraControllerRecord[/* keydownEventHandleFuncListMap */5],
      /* dirtyArray */arcballCameraControllerRecord[/* dirtyArray */6],
      /* distanceMap */arcballCameraControllerRecord[/* distanceMap */7],
      /* minDistanceMap */arcballCameraControllerRecord[/* minDistanceMap */8],
      /* phiMap */arcballCameraControllerRecord[/* phiMap */9],
      /* thetaMap */arcballCameraControllerRecord[/* thetaMap */10],
      /* thetaMarginMap */arcballCameraControllerRecord[/* thetaMarginMap */11],
      /* targetMap */arcballCameraControllerRecord[/* targetMap */12],
      /* moveSpeedXMap */arcballCameraControllerRecord[/* moveSpeedXMap */13],
      /* moveSpeedYMap */arcballCameraControllerRecord[/* moveSpeedYMap */14],
      /* rotateSpeedMap */arcballCameraControllerRecord[/* rotateSpeedMap */15],
      /* wheelSpeedMap */arcballCameraControllerRecord[/* wheelSpeedMap */16],
      /* gameObjectMap */arcballCameraControllerRecord[/* gameObjectMap */17],
      /* disposedIndexArray */arcballCameraControllerRecord[/* disposedIndexArray */18]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function _disposePointDragDropEventHandleFuncListMap(cameraController, state) {
  var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
  var pointDragDropEventHandleFuncListMap = arcballCameraControllerRecord[/* pointDragDropEventHandleFuncListMap */2];
  var match = MutableSparseMapService$WonderCommonlib.get(cameraController, pointDragDropEventHandleFuncListMap);
  if (match !== undefined) {
    var state$1 = List.fold_left((function (state, func) {
            var eventName = NameEventService$Wonderjs.getPointDragDropEventName(/* () */0);
            return ManageEventMainService$Wonderjs.offCustomGlobalEventByHandleFunc(eventName, func, state);
          }), state, match);
    var newrecord = Caml_array.caml_array_dup(state$1);
    newrecord[/* arcballCameraControllerRecord */24] = /* record */[
      /* index */arcballCameraControllerRecord[/* index */0],
      /* pointDragStartEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragStartEventHandleFuncListMap */1],
      /* pointDragDropEventHandleFuncListMap */DisposeComponentService$Wonderjs.disposeSparseMapData(cameraController, pointDragDropEventHandleFuncListMap),
      /* pointDragOverEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragOverEventHandleFuncListMap */3],
      /* pointScaleEventHandleFuncListMap */arcballCameraControllerRecord[/* pointScaleEventHandleFuncListMap */4],
      /* keydownEventHandleFuncListMap */arcballCameraControllerRecord[/* keydownEventHandleFuncListMap */5],
      /* dirtyArray */arcballCameraControllerRecord[/* dirtyArray */6],
      /* distanceMap */arcballCameraControllerRecord[/* distanceMap */7],
      /* minDistanceMap */arcballCameraControllerRecord[/* minDistanceMap */8],
      /* phiMap */arcballCameraControllerRecord[/* phiMap */9],
      /* thetaMap */arcballCameraControllerRecord[/* thetaMap */10],
      /* thetaMarginMap */arcballCameraControllerRecord[/* thetaMarginMap */11],
      /* targetMap */arcballCameraControllerRecord[/* targetMap */12],
      /* moveSpeedXMap */arcballCameraControllerRecord[/* moveSpeedXMap */13],
      /* moveSpeedYMap */arcballCameraControllerRecord[/* moveSpeedYMap */14],
      /* rotateSpeedMap */arcballCameraControllerRecord[/* rotateSpeedMap */15],
      /* wheelSpeedMap */arcballCameraControllerRecord[/* wheelSpeedMap */16],
      /* gameObjectMap */arcballCameraControllerRecord[/* gameObjectMap */17],
      /* disposedIndexArray */arcballCameraControllerRecord[/* disposedIndexArray */18]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function _disposePointDragOverEventHandleFuncListMap(cameraController, state) {
  var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
  var pointDragOverEventHandleFuncListMap = arcballCameraControllerRecord[/* pointDragOverEventHandleFuncListMap */3];
  var match = MutableSparseMapService$WonderCommonlib.get(cameraController, pointDragOverEventHandleFuncListMap);
  if (match !== undefined) {
    var state$1 = List.fold_left((function (state, func) {
            var eventName = NameEventService$Wonderjs.getPointDragOverEventName(/* () */0);
            return ManageEventMainService$Wonderjs.offCustomGlobalEventByHandleFunc(eventName, func, state);
          }), state, match);
    var newrecord = Caml_array.caml_array_dup(state$1);
    newrecord[/* arcballCameraControllerRecord */24] = /* record */[
      /* index */arcballCameraControllerRecord[/* index */0],
      /* pointDragStartEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragStartEventHandleFuncListMap */1],
      /* pointDragDropEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragDropEventHandleFuncListMap */2],
      /* pointDragOverEventHandleFuncListMap */DisposeComponentService$Wonderjs.disposeSparseMapData(cameraController, pointDragOverEventHandleFuncListMap),
      /* pointScaleEventHandleFuncListMap */arcballCameraControllerRecord[/* pointScaleEventHandleFuncListMap */4],
      /* keydownEventHandleFuncListMap */arcballCameraControllerRecord[/* keydownEventHandleFuncListMap */5],
      /* dirtyArray */arcballCameraControllerRecord[/* dirtyArray */6],
      /* distanceMap */arcballCameraControllerRecord[/* distanceMap */7],
      /* minDistanceMap */arcballCameraControllerRecord[/* minDistanceMap */8],
      /* phiMap */arcballCameraControllerRecord[/* phiMap */9],
      /* thetaMap */arcballCameraControllerRecord[/* thetaMap */10],
      /* thetaMarginMap */arcballCameraControllerRecord[/* thetaMarginMap */11],
      /* targetMap */arcballCameraControllerRecord[/* targetMap */12],
      /* moveSpeedXMap */arcballCameraControllerRecord[/* moveSpeedXMap */13],
      /* moveSpeedYMap */arcballCameraControllerRecord[/* moveSpeedYMap */14],
      /* rotateSpeedMap */arcballCameraControllerRecord[/* rotateSpeedMap */15],
      /* wheelSpeedMap */arcballCameraControllerRecord[/* wheelSpeedMap */16],
      /* gameObjectMap */arcballCameraControllerRecord[/* gameObjectMap */17],
      /* disposedIndexArray */arcballCameraControllerRecord[/* disposedIndexArray */18]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function _disposePointScaleEventHandleFuncListMap(cameraController, state) {
  var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
  var pointScaleEventHandleFuncListMap = arcballCameraControllerRecord[/* pointScaleEventHandleFuncListMap */4];
  var match = MutableSparseMapService$WonderCommonlib.get(cameraController, pointScaleEventHandleFuncListMap);
  if (match !== undefined) {
    var state$1 = List.fold_left((function (state, func) {
            var eventName = NameEventService$Wonderjs.getPointScaleEventName(/* () */0);
            return ManageEventMainService$Wonderjs.offCustomGlobalEventByHandleFunc(eventName, func, state);
          }), state, match);
    var newrecord = Caml_array.caml_array_dup(state$1);
    newrecord[/* arcballCameraControllerRecord */24] = /* record */[
      /* index */arcballCameraControllerRecord[/* index */0],
      /* pointDragStartEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragStartEventHandleFuncListMap */1],
      /* pointDragDropEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragDropEventHandleFuncListMap */2],
      /* pointDragOverEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragOverEventHandleFuncListMap */3],
      /* pointScaleEventHandleFuncListMap */DisposeComponentService$Wonderjs.disposeSparseMapData(cameraController, pointScaleEventHandleFuncListMap),
      /* keydownEventHandleFuncListMap */arcballCameraControllerRecord[/* keydownEventHandleFuncListMap */5],
      /* dirtyArray */arcballCameraControllerRecord[/* dirtyArray */6],
      /* distanceMap */arcballCameraControllerRecord[/* distanceMap */7],
      /* minDistanceMap */arcballCameraControllerRecord[/* minDistanceMap */8],
      /* phiMap */arcballCameraControllerRecord[/* phiMap */9],
      /* thetaMap */arcballCameraControllerRecord[/* thetaMap */10],
      /* thetaMarginMap */arcballCameraControllerRecord[/* thetaMarginMap */11],
      /* targetMap */arcballCameraControllerRecord[/* targetMap */12],
      /* moveSpeedXMap */arcballCameraControllerRecord[/* moveSpeedXMap */13],
      /* moveSpeedYMap */arcballCameraControllerRecord[/* moveSpeedYMap */14],
      /* rotateSpeedMap */arcballCameraControllerRecord[/* rotateSpeedMap */15],
      /* wheelSpeedMap */arcballCameraControllerRecord[/* wheelSpeedMap */16],
      /* gameObjectMap */arcballCameraControllerRecord[/* gameObjectMap */17],
      /* disposedIndexArray */arcballCameraControllerRecord[/* disposedIndexArray */18]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function _disposeKeyDownEventHandleFuncListMap(cameraController, state) {
  var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
  var keydownEventHandleFuncListMap = arcballCameraControllerRecord[/* keydownEventHandleFuncListMap */5];
  var match = MutableSparseMapService$WonderCommonlib.get(cameraController, keydownEventHandleFuncListMap);
  if (match !== undefined) {
    var state$1 = List.fold_left((function (state, func) {
            return ManageEventMainService$Wonderjs.offKeyboardEventByHandleFunc(/* KeyDown */10, func, state);
          }), state, match);
    var newrecord = Caml_array.caml_array_dup(state$1);
    newrecord[/* arcballCameraControllerRecord */24] = /* record */[
      /* index */arcballCameraControllerRecord[/* index */0],
      /* pointDragStartEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragStartEventHandleFuncListMap */1],
      /* pointDragDropEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragDropEventHandleFuncListMap */2],
      /* pointDragOverEventHandleFuncListMap */arcballCameraControllerRecord[/* pointDragOverEventHandleFuncListMap */3],
      /* pointScaleEventHandleFuncListMap */arcballCameraControllerRecord[/* pointScaleEventHandleFuncListMap */4],
      /* keydownEventHandleFuncListMap */DisposeComponentService$Wonderjs.disposeSparseMapData(cameraController, keydownEventHandleFuncListMap),
      /* dirtyArray */arcballCameraControllerRecord[/* dirtyArray */6],
      /* distanceMap */arcballCameraControllerRecord[/* distanceMap */7],
      /* minDistanceMap */arcballCameraControllerRecord[/* minDistanceMap */8],
      /* phiMap */arcballCameraControllerRecord[/* phiMap */9],
      /* thetaMap */arcballCameraControllerRecord[/* thetaMap */10],
      /* thetaMarginMap */arcballCameraControllerRecord[/* thetaMarginMap */11],
      /* targetMap */arcballCameraControllerRecord[/* targetMap */12],
      /* moveSpeedXMap */arcballCameraControllerRecord[/* moveSpeedXMap */13],
      /* moveSpeedYMap */arcballCameraControllerRecord[/* moveSpeedYMap */14],
      /* rotateSpeedMap */arcballCameraControllerRecord[/* rotateSpeedMap */15],
      /* wheelSpeedMap */arcballCameraControllerRecord[/* wheelSpeedMap */16],
      /* gameObjectMap */arcballCameraControllerRecord[/* gameObjectMap */17],
      /* disposedIndexArray */arcballCameraControllerRecord[/* disposedIndexArray */18]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function unbindEvent(cameraController, state) {
  return _disposeKeyDownEventHandleFuncListMap(cameraController, _disposePointScaleEventHandleFuncListMap(cameraController, _disposePointDragOverEventHandleFuncListMap(cameraController, _disposePointDragDropEventHandleFuncListMap(cameraController, _disposePointDragStartEventHandleFuncListMap(cameraController, state)))));
}

var unbindPointScaleEvent = _disposePointScaleEventHandleFuncListMap;

function isBindEvent(cameraController, state) {
  var arcballCameraControllerRecord = state[/* arcballCameraControllerRecord */24];
  return MutableSparseMapService$WonderCommonlib.has(cameraController, arcballCameraControllerRecord[/* pointDragStartEventHandleFuncListMap */1]);
}

export {
  _addEventHandleFunc ,
  _addPointDragStartEventHandleFunc ,
  _addPointDragDropEventHandleFunc ,
  _addPointDragOverEventHandleFunc ,
  _addPointScaleEventHandleFunc ,
  _addKeydownEventHandleFunc ,
  _changeOrbit ,
  _isCombinedKey ,
  isTriggerKeydownEventHandler ,
  prepareBindEvent ,
  bindEvent ,
  _unbindPointEvent ,
  _unbindKeyboardEvent ,
  _disposePointDragStartEventHandleFuncListMap ,
  _disposePointDragDropEventHandleFuncListMap ,
  _disposePointDragOverEventHandleFuncListMap ,
  _disposePointScaleEventHandleFuncListMap ,
  _disposeKeyDownEventHandleFuncListMap ,
  unbindEvent ,
  unbindPointScaleEvent ,
  isBindEvent ,
  
}
/* ViewService-Wonderjs Not a pure module */
