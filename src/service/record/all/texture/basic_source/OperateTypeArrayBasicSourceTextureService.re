open BufferBasicSourceTextureService;

let getWrapS = (index, typeArr) => TypeArrayService.getUint8_1(getWrapSIndex(index), typeArr);

let setWrapS = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getWrapSIndex(index), data, typeArr);

let getWrapT = (index, typeArr) => TypeArrayService.getUint8_1(getWrapTIndex(index), typeArr);

let setWrapT = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getWrapTIndex(index), data, typeArr);

let getMagFilter = (index, typeArr) =>
  TypeArrayService.getUint8_1(getMagFilterIndex(index), typeArr);

let setMagFilter = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getMagFilterIndex(index), data, typeArr);

let getMinFilter = (index, typeArr) =>
  TypeArrayService.getUint8_1(getMinFilterIndex(index), typeArr);

let setMinFilter = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getMinFilterIndex(index), data, typeArr);

let getIsNeedUpdate =
  [@bs] ((index, typeArr) => TypeArrayService.getUint8_1(getIsNeedUpdateIndex(index), typeArr));

let setIsNeedUpdate = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getIsNeedUpdateIndex(index), data, typeArr);

let getFormat = (index, typeArr) => TypeArrayService.getUint8_1(getFormatIndex(index), typeArr);

let setFormat = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getFormatIndex(index), data, typeArr);

let getType = (index, typeArr) => TypeArrayService.getUint8_1(getTypeIndex(index), typeArr);

let setType = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getTypeIndex(index), data, typeArr);

/* TODO get from typeArrays */
let getFlipY = () => true;