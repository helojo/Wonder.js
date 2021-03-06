open WorkerType;

type basicSourceTextureRecord = {
  wrapSs: option(Js.Typed_array.Uint8Array.t),
  wrapTs: option(Js.Typed_array.Uint8Array.t),
  magFilters: option(Js.Typed_array.Uint8Array.t),
  minFilters: option(Js.Typed_array.Uint8Array.t),
  formats: option(Js.Typed_array.Uint8Array.t),
  types: option(Js.Typed_array.Uint8Array.t),
  isNeedUpdates: option(Js.Typed_array.Uint8Array.t),
  flipYs: option(Js.Typed_array.Uint8Array.t),
  sourceMap: WonderCommonlib.MutableSparseMapService.t(imageBitmap),
  glTextureMap:
    WonderCommonlib.MutableSparseMapService.t(WonderWebgl.GlType.texture),
};