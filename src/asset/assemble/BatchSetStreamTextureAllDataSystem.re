open StateDataMainType;

open WDType;

let _batchSetBasicSourceTextureSources =
    (imageBasicSourceTextures, default11Image, {settingRecord} as state) =>
  imageBasicSourceTextures
  |> WonderCommonlib.ArrayService.reduceOneParami(
       (. state, basicSourceTexture, index) =>
         OperateBasicSourceTextureMainService.setSource(
           basicSourceTexture,
           default11Image,
           state,
         ),
       state,
     );

let batchSet =
    (
      (
        (diffuseMapLightMaterials, lightMaterialDiffuseMaps),
        (samplerBasicSourceTextures, basicSourceTextureSamplers),
        (imageBasicSourceTextures, default11Image),
      ),
      state,
    ) =>
  state
  |> BatchSetTextureAllDataSystem.batchSetNewDiffueMaps(
       diffuseMapLightMaterials,
       lightMaterialDiffuseMaps,
     )
  |> BatchSetTextureAllDataSystem.batchSetBasicSourceTextureData(
       samplerBasicSourceTextures,
       basicSourceTextureSamplers,
     )
  |> _batchSetBasicSourceTextureSources(
       imageBasicSourceTextures,
       default11Image,
     );