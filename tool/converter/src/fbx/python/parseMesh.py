from fbx import *
from utils import *

import operator

def enum(**enums):
    return type('Enum', (), enums)

LayerKey = enum(TEXCOORD=1, NORMAL=2, COLOR=3)

def parseMesh(mesh, meshData, skinSkeletonParser):
    vertices, verticeIndices = getVerticeData(mesh)

    texCoords, texCoordIndices = getTexCoordData(mesh)

    normals, normalIndices = getNormalData(mesh)

    colors, colorIndices = getColorData(mesh)

    joints = None
    weights = None

    if skinSkeletonParser.hasSkin:
        joints, weights = skinSkeletonParser.getSkinAttributeData(mesh)

    attributeData = {
        "POSITION": vertices,
        "NORMAL": normals,
        "COLOR": colors,
        "TEXCOORD": texCoords
    }

    if joints != None:
        attributeData["JOINT"] = joints
        attributeData["WEIGHT"] = weights


    # TODO support parse tangent, binormal data

    # TODO support multi primitives?

    meshData["primitives"] = [
        {
            "attributes": attributeData,
            "verticeIndices": verticeIndices,
            "normalIndices":normalIndices,
            "texCoordIndices":texCoordIndices,
            "colorIndices":colorIndices

            # TODO parse material, mode
        }
    ]



def convertVectorToList(vectorList):
    resultList = []

    count = len(vectorList)

    for i in range(count):
        data = vectorList[i]

        if(isinstance(data, FbxVector4)):
            addVector3Data(resultList, data)
        elif(isinstance(data, FbxVector2)):
            addVector2Data(resultList, data)
        else:
            raise AssertionError("not support data")

    return resultList

def getVertices(mesh):
    return convertVectorToList(mesh.GetControlPoints())


def getVerticeIndices(mesh):
    indices = []

    poly_count = mesh.GetPolygonCount()

    for poly_index in range(poly_count):
        poly_size = mesh.GetPolygonSize(poly_index)
        for vertex_index in range(poly_size):
            control_point_index = mesh.GetPolygonVertex(poly_index, vertex_index)
            indices.append(control_point_index)

    return indices


def getVerticeData(mesh):
    controlPoints = mesh.GetControlPoints()

    poly_count = mesh.GetPolygonCount()

    indices = []

    for p in range(poly_count):
        poly_size = mesh.GetPolygonSize(p)

        for v in range(poly_size):
            control_point_index = mesh.GetPolygonVertex(p, v)

            indices.append(control_point_index)

    return convertVectorToList(controlPoints), indices



def getTexCoordData(mesh):
    poly_count = mesh.GetPolygonCount()

    indices = []

    dict = {}

    value = None
    index = None

    elementCount = mesh.GetElementUVCount()

    if elementCount == 0:
        return [], []
    elif elementCount > 1:
        print ("uv element count > 1, only use the first element!")

    for p in range(poly_count):
        poly_size = mesh.GetPolygonSize(p)

        for v in range(poly_size):
            control_point_index = mesh.GetPolygonVertex(p, v)

            texCoordData = mesh.GetElementUV(0)

            mappingMode = texCoordData.GetMappingMode()
            referenceMode = texCoordData.GetReferenceMode()

            if mappingMode == FbxLayerElement.eByControlPoint:
                if referenceMode == FbxLayerElement.eDirect:
                    index = control_point_index
                    value = texCoordData.GetDirectArray().GetAt(index)
                elif referenceMode == FbxLayerElement.eIndexToDirect:
                    index = texCoordData.GetIndexArray().GetAt(control_point_index)
                    value = texCoordData.GetDirectArray().GetAt(index)
            elif mappingMode == FbxLayerElement.eByPolygonVertex:
                index = mesh.GetTextureUVIndex(p, v)
                if referenceMode == FbxLayerElement.eDirect or \
                                referenceMode == FbxLayerElement.eIndexToDirect:
                    value = texCoordData.GetDirectArray().GetAt(index)
            else:
                print("texCoords:unsupported mapping mode")
                continue

            indices.append(index)

            dict[index] = value

    values = getValuesFromDict(dict, LayerKey.TEXCOORD)

    return values, indices



def getNormalData(mesh):
    poly_count = mesh.GetPolygonCount()

    indices = []

    dict = {}

    value = None
    index = None

    vertexId = 0

    elementCount = mesh.GetElementNormalCount()

    if elementCount == 0:
        return [], []
    elif elementCount > 1:
        print ("normal element count > 1, only use the first element!")

    for p in range(poly_count):
        poly_size = mesh.GetPolygonSize(p)

        for v in range(poly_size):
            data = mesh.GetElementNormal(0)

            mappingMode = data.GetMappingMode()
            referenceMode = data.GetReferenceMode()

            if mappingMode == FbxLayerElement.eByPolygonVertex:
                if referenceMode == FbxLayerElement.eDirect:
                    index = vertexId
                    value = data.GetDirectArray().GetAt(index)
                if referenceMode == FbxLayerElement.eIndexToDirect:
                    index = data.GetIndexArray().GetAt(vertexId)
                    value = data.GetDirectArray().GetAt(index)
            else:
                print("normals: unsupported mapping mode")
                continue

            indices.append(index)

            dict[index] = value

            vertexId += 1

    values = getValuesFromDict(dict, LayerKey.NORMAL)

    return values, indices


def getColorData(mesh):
    poly_count = mesh.GetPolygonCount()

    indices = []

    dict = {}

    value = None
    index = None

    vertexId = 0

    elementCount = mesh.GetElementVertexColorCount()

    if elementCount == 0:
        return [], []
    elif elementCount > 1:
        print ("color element count > 1, only use the first element!")

    for p in range(poly_count):
        poly_size = mesh.GetPolygonSize(p)

        for v in range(poly_size):
            control_point_index = mesh.GetPolygonVertex(p, v)
            data = mesh.GetElementVertexColor(0)

            mappingMode = data.GetMappingMode()
            referenceMode = data.GetReferenceMode()

            if mappingMode == FbxLayerElement.eByControlPoint:
                if referenceMode == FbxLayerElement.eDirect:
                    index = control_point_index
                    value = data.GetDirectArray().GetAt(index)
                if referenceMode == FbxLayerElement.eIndexToDirect:
                    index = data.GetIndexArray().GetAt(control_point_index)
                    value = data.GetDirectArray().GetAt(index)
            elif mappingMode == FbxLayerElement.eByPolygonVertex:
                if referenceMode == FbxLayerElement.eDirect:
                    index = vertexId
                    value = data.GetDirectArray().GetAt(index)
                if referenceMode == FbxLayerElement.eIndexToDirect:
                    index = data.GetIndexArray().GetAt(vertexId)
                    value = data.GetDirectArray().GetAt(index)
            else:
                print("colors:unsupported mapping mode")
                continue

            indices.append(index)

            dict[index] = value

            vertexId += 1

    values = getValuesFromDict(dict, LayerKey.COLOR)

    return values, indices




def getValuesFromDict(dict, layerKey):
    values = []

    if layerKey == LayerKey.TEXCOORD:
        for key, value in sorted(dict.items(), key = operator.itemgetter(0)):
            # print (key)
            addVector2Data(values, value)
    elif layerKey == LayerKey.NORMAL or \
                    layerKey == LayerKey.COLOR:
        for key, value in sorted(dict.items(), key = operator.itemgetter(0)):
            addVector3Data(values, value)

    return values
