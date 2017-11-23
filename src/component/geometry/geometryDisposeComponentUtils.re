open GeometryType;

open StateDataType;

open GeometryStateUtils;

open Contract;

let isAlive = (geometry: geometry, state: StateDataType.state) => {
  let {mappedIndexMap, disposedIndexMap} = GeometryStateUtils.getGeometryData(state);
  let geometryIndexStr = Js.Int.toString(geometry);
  disposedIndexMap |> HashMapSystem.has(geometryIndexStr) ?
    false :
    mappedIndexMap
    |> WonderCommonlib.HashMapSystem.get(Js.Int.toString(geometry))
    |> Js.Option.isSome
};

let handleDisposeComponent = (geometry: geometry, state: StateDataType.state) => {
  requireCheck(
    () =>
      Contract.Operators.(
        ComponentDisposeComponentUtils.checkComponentShouldAlive(geometry, isAlive, state)
      )
  );
  let {disposedIndexMap, disposeCount} as data = getGeometryData(state);
  let geometryIndexStr = Js.Int.toString(geometry);
  disposedIndexMap |> WonderCommonlib.HashMapSystem.set(geometryIndexStr, true) |> ignore;
  let state = VboBufferSystem.addBufferToPool(geometryIndexStr, state);
  data.disposeCount = succ(disposeCount);
  if (MemoryUtils.isDisposeTooMany(data.disposeCount, state)) {
    data.disposeCount = 0;
    CpuMemorySystem.reAllocateGeometry(state)
  } else {
    state
  }
};

let isNotDisposed = ({index, mappedIndex, disposeCount}) =>
  index == mappedIndex && disposeCount == 0;