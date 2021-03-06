open MaterialType;

open BasicMaterialType;

let handleAddComponent =
  (. material, gameObjectUid: int, {gameObjectsMap} as record) => {
    ...record,
    gameObjectsMap:
      AddComponentService.addSharableComponentToGameObjectsMap(
        material,
        gameObjectUid,
        gameObjectsMap,
      ),
  };