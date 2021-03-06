type directionLightRecord = {
  index: int,
  directionMap:
    option(WonderCommonlib.MutableSparseMapService.t(PositionType.position)),
  renderLightArr: option(array(ComponentType.component)),
  colors: Js.Typed_array.Float32Array.t,
  intensities: Js.Typed_array.Float32Array.t,
};