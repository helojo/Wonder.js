open CameraControllerType;

open CameraControllerStateUtils;

let handleAddComponent = (cameraController: cameraController, gameObjectUid: int, state: StateDataType.state) => {
  let cameraControllerData = getCameraControllerData(state);
  ComponentSystem.addComponentToGameObjectMap(
    cameraController,
    gameObjectUid,
    cameraControllerData.gameObjectMap
  )
  |> ignore;
  state
};
