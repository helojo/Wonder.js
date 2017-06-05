export class RenderCommandBufferData{
    public static buffer:SharedArrayBuffer = null;

    public static mMatrices:Float32Array = null;
    public static vMatrices:Float32Array = null;
    public static pMatrices:Float32Array = null;
    public static materialIndices:Uint32Array = null;
    public static shaderIndices:Uint32Array = null;
    public static geometryIndices:Uint32Array = null;
}

export type RenderCommandBufferWorkerData = {
    buffer:SharedArrayBuffer;
    count:number
}

export type RenderCommandUniformData = {
    mMatrices:Float32Array;
    vMatrices:Float32Array;
    pMatrices:Float32Array;
    materialIndex:number;
}
