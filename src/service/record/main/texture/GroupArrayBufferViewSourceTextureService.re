open ArrayBufferViewSourceTextureType;

let addMaterial = (materialData, texture, record) => {
  ...record,
  materialsMap:
    GroupTextureService.addMaterial(
      materialData,
      texture,
      record.materialsMap,
    ),
};

let isGroupArrayBufferViewSourceTexture = (texture, record) =>
  GroupTextureService.isGroup(texture, record.materialsMap);

let removeMaterial = (materialData, texture, {materialsMap} as record) => {
  ...record,
  materialsMap:
    GroupTextureService.removeMaterial(materialData, texture, materialsMap),
};