open MaterialType;

open StateDataMainType;

open LightMaterialType;

/* let hasShaderIndex = (materialIndex: int, state) =>
   ShaderIndicesService.hasShaderIndex(
     materialIndex,
     RecordLightMaterialMainService.getRecord(state).shaderIndices
   ); */
let setShaderIndex =
  [@bs]
  (
    (materialIndex: int, shaderIndex: int, state) => {
      let {shaderIndices} as record = state |> RecordLightMaterialMainService.getRecord;
      {
        ...state,
        lightMaterialRecord:
          Some({
            ...record,
            shaderIndices:
              [@bs] ShaderIndicesService.setShaderIndex(materialIndex, shaderIndex, shaderIndices)
          })
      }
    }
  );