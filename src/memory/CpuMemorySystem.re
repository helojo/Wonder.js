open GameObjectType;

open VboBufferType;

open Contract;

open StateDataType;

open GeometryType;

let reAllocateGameObject = (state: StateDataType.state) => {
  let {
        aliveUidArray,
        disposedUidMap,
        transformMap,
        meshRendererMap,
        geometryMap,
        materialMap,
        cameraControllerMap
      } as data =
    GameObjectStateUtils.getGameObjectData(state);
  let newTransformMap = SparseMapSystem.createEmpty();
  let newMeshRendererMap = SparseMapSystem.createEmpty();
  let newGeometryMap = SparseMapSystem.createEmpty();
  let newCameraControllerMap = SparseMapSystem.createEmpty();
  let newMaterialMap = SparseMapSystem.createEmpty();
  let newAliveUidArray =
    aliveUidArray
    |> Js.Array.filter((aliveUid) => ! MemoryUtils.isDisposed(aliveUid, disposedUidMap));
  newAliveUidArray
  |> WonderCommonlib.ArraySystem.forEach(
       [@bs]
       (
         (uid) => {
           newTransformMap
           |> SparseMapSystem.set(uid, transformMap |> SparseMapSystem.unsafeGet(uid))
           |> ignore;
           switch (meshRendererMap |> SparseMapSystem.get(uid)) {
           | None => ()
           | Some(meshRenderer) =>
             newMeshRendererMap |> SparseMapSystem.set(uid, meshRenderer) |> ignore
           };
           switch (geometryMap |> SparseMapSystem.get(uid)) {
           | None => ()
           | Some(geometry) => newGeometryMap |> SparseMapSystem.set(uid, geometry) |> ignore
           };
           switch (materialMap |> SparseMapSystem.get(uid)) {
           | None => ()
           | Some(material) => newMaterialMap |> SparseMapSystem.set(uid, material) |> ignore
           };
           switch (cameraControllerMap |> SparseMapSystem.get(uid)) {
           | None => ()
           | Some(cameraController) =>
             newCameraControllerMap |> SparseMapSystem.set(uid, cameraController) |> ignore
           }
         }
       )
     );
  data.disposedUidMap = SparseMapSystem.createEmpty();
  data.aliveUidArray = newAliveUidArray;
  data.transformMap = newTransformMap;
  data.meshRendererMap = newMeshRendererMap;
  data.geometryMap = newGeometryMap;
  data.materialMap = newMaterialMap;
  data.cameraControllerMap = newCameraControllerMap;
  state
};

let _updateInfoArray = (newInfoArray, newIndex: int, {startIndex, endIndex}, offset: int) => {
  let increment = endIndex - startIndex;
  Array.unsafe_set(
    newInfoArray,
    newIndex,
    GeometryOperateDataUtils.buildInfo(offset, offset + increment)
  );
  newInfoArray
};

let reAllocateGeometry = (state: StateDataType.state) => {
  let {
        index,
        mappedIndex,
        vertices,
        indices,
        verticesInfoArray,
        indicesInfoArray,
        configDataMap,
        computeDataFuncMap,
        gameObjectMap,
        indicesCountCacheMap,
        verticesCountCacheMap,
        mappedIndexMap,
        disposedIndexMap,
        aliveIndexArray,
        isClonedMap
      } as geometryData =
    GeometryStateUtils.getGeometryData(state);
  let {vertexBufferMap, elementArrayBufferMap} as vboBufferData =
    VboBufferStateUtils.getVboBufferData(state);
  let newIndex = ref(0);
  let newIndexMap = WonderCommonlib.HashMapSystem.createEmpty();
  let newComputeDataFuncMap = WonderCommonlib.HashMapSystem.createEmpty();
  let newConfigDataMap = WonderCommonlib.HashMapSystem.createEmpty();
  let newGameObjectMap = SparseMapSystem.createEmpty();
  let newIndicesCountCacheMap = WonderCommonlib.HashMapSystem.createEmpty();
  let newVerticesCountCacheMap = WonderCommonlib.HashMapSystem.createEmpty();
  let newIsClonedMap = WonderCommonlib.HashMapSystem.createEmpty();
  let newVertexBufferMap = SparseMapSystem.createEmpty();
  let newElementArrayBufferMap = SparseMapSystem.createEmpty();
  let newVerticesInfoArray = WonderCommonlib.ArraySystem.createEmpty();
  let newIndicesInfoArray = WonderCommonlib.ArraySystem.createEmpty();
  let newVerticesOffset = ref(0);
  let newIndicesOffset = ref(0);
  let newAliveIndexArray =
    aliveIndexArray
    |> Js.Array.filter(
         (aliveIndex) => ! MemoryUtils.isDisposed(aliveIndex, disposedIndexMap)
       );
  newAliveIndexArray
  |> WonderCommonlib.ArraySystem.forEach(
       [@bs]
       (
         (index) => {
           let indexStr = Js.Int.toString(index);
           MemoryUtils.isDisposed(index, disposedIndexMap) ?
             () :
             {
               let newIndexStr = Js.Int.toString(newIndex^);
               let verticesInfo = GeometryOperateDataUtils.getInfo(verticesInfoArray, newIndex^);
               let indicesInfo = GeometryOperateDataUtils.getInfo(indicesInfoArray, newIndex^);
               GeometryIndexUtils.setMappedIndex(indexStr, newIndex^, newIndexMap) |> ignore;
               _updateInfoArray(newVerticesInfoArray, newIndex^, verticesInfo, newVerticesOffset^);
               _updateInfoArray(newIndicesInfoArray, newIndex^, indicesInfo, newIndicesOffset^);
               newVerticesOffset :=
                 TypeArrayUtils.fillFloat32ArrayWithFloat32Array(
                   vertices,
                   newVerticesOffset^,
                   vertices,
                   verticesInfo.startIndex,
                   verticesInfo.endIndex
                 );
               newIndicesOffset :=
                 TypeArrayUtils.fillUint16ArrayWithUint16Array(
                   indices,
                   newIndicesOffset^,
                   indices,
                   indicesInfo.startIndex,
                   indicesInfo.endIndex
                 );
               newConfigDataMap
               |> WonderCommonlib.HashMapSystem.set(
                    newIndexStr,
                    configDataMap |> WonderCommonlib.HashMapSystem.unsafeGet(indexStr)
                  )
               |> ignore;
               newComputeDataFuncMap
               |> WonderCommonlib.HashMapSystem.set(
                    newIndexStr,
                    computeDataFuncMap |> WonderCommonlib.HashMapSystem.unsafeGet(indexStr)
                  )
               |> ignore;
               newGameObjectMap
               |> SparseMapSystem.set(
                    newIndex^,
                    gameObjectMap |> SparseMapSystem.unsafeGet(index)
                  )
               |> ignore;
               newIndicesCountCacheMap
               |> WonderCommonlib.HashMapSystem.set(
                    newIndexStr,
                    indicesCountCacheMap |> WonderCommonlib.HashMapSystem.unsafeGet(indexStr)
                  )
               |> ignore;
               newVerticesCountCacheMap
               |> WonderCommonlib.HashMapSystem.set(
                    newIndexStr,
                    verticesCountCacheMap |> WonderCommonlib.HashMapSystem.unsafeGet(indexStr)
                  )
               |> ignore;
               newIsClonedMap
               |> WonderCommonlib.HashMapSystem.set(
                    newIndexStr,
                    isClonedMap |> WonderCommonlib.HashMapSystem.unsafeGet(indexStr)
                  )
               |> ignore;
               newVertexBufferMap
               |> SparseMapSystem.set(index, vertexBufferMap |> SparseMapSystem.unsafeGet(index))
               |> ignore;
               newElementArrayBufferMap
               |> SparseMapSystem.set(
                    index,
                    elementArrayBufferMap |> SparseMapSystem.unsafeGet(index)
                  )
               |> ignore;
               newIndex := succ(newIndex^)
             }
         }
       )
     );
  geometryData.mappedIndex = newIndex^;
  geometryData.mappedIndexMap = newIndexMap;
  geometryData.verticesOffset = newVerticesOffset^;
  geometryData.indicesOffset = newIndicesOffset^;
  geometryData.verticesInfoArray = newVerticesInfoArray;
  geometryData.indicesInfoArray = newIndicesInfoArray;
  geometryData.configDataMap = newConfigDataMap;
  geometryData.computeDataFuncMap = newComputeDataFuncMap;
  geometryData.gameObjectMap = newGameObjectMap;
  geometryData.indicesCountCacheMap = newIndicesCountCacheMap;
  geometryData.verticesCountCacheMap = newVerticesCountCacheMap;
  geometryData.isClonedMap = newIsClonedMap;
  geometryData.disposedIndexMap = SparseMapSystem.createEmpty();
  geometryData.aliveIndexArray = newAliveIndexArray;
  vboBufferData.vertexBufferMap = newVertexBufferMap;
  vboBufferData.elementArrayBufferMap = newElementArrayBufferMap;
  state
};