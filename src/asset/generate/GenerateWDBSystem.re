let generateWDB = (rootGameObject, imageBase64Map, funcTuple, state) => {
  let (gltf, imageResultUint8ArrayMap, binBuffer) =
    GenerateGLBSystem.generateGLBData(
      (rootGameObject, imageBase64Map),
      funcTuple,
      state,
    );

  (
    state,
    imageResultUint8ArrayMap,
    ConvertGLBSystem.convertGLBData(gltf, binBuffer),
  );
};