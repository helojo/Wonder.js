let generateGLBData = (sceneGameObject, imageUint8ArrayMap, state) =>
  GenerateSceneGraphSystem.generateGLBData(
    sceneGameObject,
    switch (Js.toOption(imageUint8ArrayMap)) {
    | None => WonderCommonlib.MutableSparseMapService.createEmpty()
    | Some(imageUint8ArrayMap) => imageUint8ArrayMap
    },
    state,
  );

let generateWDB = (sceneGameObject, imageUint8ArrayMap, state) =>
  GenerateSceneGraphSystem.generateWDB(
    sceneGameObject,
    switch (Js.toOption(imageUint8ArrayMap)) {
    | None => WonderCommonlib.MutableSparseMapService.createEmpty()
    | Some(imageUint8ArrayMap) => imageUint8ArrayMap
    },
    state,
  );