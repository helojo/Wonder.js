/// <reference path="../../../definitions.d.ts"/>
module dy{
export class ShaderChunk{public static empty:GLSLChunk = {top:"", define:"", varDeclare:"", funcDeclare:"", funcDefine:"", body:""}
public static NULL:number = -1.0;
public static morphNormal_vertex:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "vec3 a_normal = a_currentFrameNormal + (a_nextFrameNormal - a_currentFrameNormal) * u_interpolation;\n",}
public static morphVertice_vertex:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "vec3 a_position = a_currentFramePosition + (a_nextFramePosition - a_currentFramePosition) * u_interpolation;\n",}
public static basicEnd_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_FragColor = vec4(totalColor, 1.0);\n",}
public static basic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_color;\n",funcDeclare: "",funcDefine: "",body: "vec3 totalColor = v_color;\n",}
public static basic_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_color;\n",funcDeclare: "",funcDefine: "",body: "v_color = a_color;\n",}
public static common_define:GLSLChunk = {top: "",define: "#define NULL -1.0\n",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static common_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static common_function:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "mat2 transpose(mat2 m) {\n  return mat2(  m[0][0], m[1][0],   // new col 0\n                m[0][1], m[1][1]    // new col 1\n             );\n  }\nmat3 transpose(mat3 m) {\n  return mat3(  m[0][0], m[1][0], m[2][0],  // new col 0\n                m[0][1], m[1][1], m[2][1],  // new col 1\n                m[0][2], m[1][2], m[2][2]   // new col 1\n             );\n  }\n",body: "",}
public static common_vertex:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static highp_fragment:GLSLChunk = {top: "precision highp float;\nprecision highp int;\n",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static lowp_fragment:GLSLChunk = {top: "precision lowp float;\nprecision lowp int;\n",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static mediump_fragment:GLSLChunk = {top: "precision mediump float;\nprecision mediump int;\n",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static map_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_mapCoord;\n",funcDeclare: "",funcDefine: "",body: "totalColor *= vec3(texture2D(u_sampler2D0, v_mapCoord));\n",}
public static map_forBasic_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_mapCoord;\n",funcDeclare: "",funcDefine: "",body: "vec2 sourceTexCoord = a_texCoord * u_sourceRegion.zw + u_sourceRegion.xy;\n    v_mapCoord = sourceTexCoord * u_repeatRegion.zw + u_repeatRegion.xy;\n",}
public static multi_map_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "vec3 getMapColor(){\n            vec3 color0 = vec3(texture2D(u_sampler2D0, v_mapCoord));\n            vec3 color1 = vec3(texture2D(u_sampler2D1, v_mapCoord));\n            if(u_combineMode == 0){\n                return mix(color0, color1, u_mixRatio);\n            }\n            else if(u_combineMode == 1){\n                return color0 * color1;\n            }\n            else if(u_combineMode == 2){\n                return color0 + color1;\n            }\n		}\n",body: "totalColor *= getMapColor();\n",}
public static skybox_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_dir;\n",funcDeclare: "",funcDefine: "",body: "gl_FragColor = textureCube(u_samplerCube0, v_dir);\n",}
public static skybox_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_dir;\n",funcDeclare: "",funcDefine: "",body: "vec4 pos = u_pMatrix * mat4(mat3(u_vMatrix)) * u_mMatrix * vec4(a_position, 1.0);\n\n    gl_Position = pos.xyww;\n\n    v_dir = a_position;\n",}
public static lightCommon_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_worldPosition;\n#if POINT_LIGHTS_COUNT > 0\nstruct PointLight {\n    vec3 position;\n    vec3 color;\n    float intensity;\n\n    float range;\n    float constant;\n    float linear;\n    float quadratic;\n};\nuniform PointLight u_pointLights[POINT_LIGHTS_COUNT];\n\n#endif\n\n\n#if DIRECTION_LIGHTS_COUNT > 0\nstruct DirectionLight {\n    vec3 position;\n\n    float intensity;\n\n    vec3 color;\n};\nuniform DirectionLight u_directionLights[DIRECTION_LIGHTS_COUNT];\n#endif\n",funcDeclare: "",funcDefine: "",body: "",}
public static lightCommon_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_worldPosition;\n#if POINT_LIGHTS_COUNT > 0\nstruct PointLight {\n    vec3 position;\n    vec3 color;\n    float intensity;\n\n    float range;\n    float constant;\n    float linear;\n    float quadratic;\n};\nuniform PointLight u_pointLights[POINT_LIGHTS_COUNT];\n\n#endif\n\n\n#if DIRECTION_LIGHTS_COUNT > 0\nstruct DirectionLight {\n    vec3 position;\n\n    float intensity;\n\n    vec3 color;\n};\nuniform DirectionLight u_directionLights[DIRECTION_LIGHTS_COUNT];\n#endif\n",funcDeclare: "",funcDefine: "",body: "v_worldPosition = vec3(u_mMatrix * vec4(a_position, 1.0));\n",}
public static lightEnd_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_FragColor = vec4(totalColor, u_opacity);\n",}
public static light_common:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "vec3 getDirectionLightDirByLightPos(vec3 lightPos);\nvec3 getPointLightDirByLightPos(vec3 lightPos);\nvec3 getPointLightDirByLightPos(vec3 lightPos, vec3 worldPosition);\n",funcDefine: "vec3 getDirectionLightDirByLightPos(vec3 lightPos){\n    return lightPos - vec3(0.0);\n    //return vec3(0.0) - lightPos;\n}\nvec3 getPointLightDirByLightPos(vec3 lightPos){\n    return lightPos - v_worldPosition;\n}\nvec3 getPointLightDirByLightPos(vec3 lightPos, vec3 worldPosition){\n    return lightPos - worldPosition;\n}\n",body: "",}
public static light_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "float getBlinnPhongShininess(float shininess, vec3 normal, vec3 lightDir, vec3 viewDir, float dotResultBetweenNormAndLight){\n    vec3 halfAngle = normalize(lightDir + viewDir);\n    float blinnTerm = dot(normal, halfAngle);\n\n    blinnTerm = clamp(blinnTerm, 0.0, 1.0);\n    blinnTerm = dotResultBetweenNormAndLight < 0.0 ? 0.0 : blinnTerm;\n    blinnTerm = pow(blinnTerm, shininess);\n\n	return blinnTerm;\n}\n\nvec3 calcLight(vec3 lightDir, vec3 color, float intensity, float attenuation, vec3 normal, vec3 viewDir)\n{\n    vec3 materialDiffuse = getMaterialDiffuse();\n    vec3 materialSpecular = getMaterialSpecular();\n\n    float dotResultBetweenNormAndLight = dot(normal, lightDir);\n    float diff = max(dotResultBetweenNormAndLight, 0.0);\n\n\n    vec3 ambientColor = u_ambient * materialDiffuse;\n\n    vec3 diffuseColor = diff * color * materialDiffuse * intensity;\n\n\n    float spec = getBlinnPhongShininess(u_shininess, normal, lightDir, viewDir, dotResultBetweenNormAndLight);\n\n    vec3 specularColor = spec * materialSpecular * intensity;\n\n    return  ambientColor + attenuation * (diffuseColor + specularColor);\n}\n\n\n\n\n\n#if POINT_LIGHTS_COUNT > 0\nvec3 calcPointLight(vec3 lightDir, PointLight light, vec3 normal, vec3 viewDir)\n{\n    //lightDir is not normalize computing distance\n    float distance = length(lightDir);\n\n    float attenuation = 0.0;\n    if(distance < light.range)\n    {\n        attenuation = 1.0 / (light.constant + light.linear * distance + light.quadratic * (distance * distance));\n    }\n\n    lightDir = normalize(lightDir);\n\n    return calcLight(lightDir, light.color, light.intensity, attenuation, normal, viewDir);\n}\n#endif\n\n\n\n#if DIRECTION_LIGHTS_COUNT > 0\nvec3 calcDirectionLight(vec3 lightDir, DirectionLight light, vec3 normal, vec3 viewDir)\n{\n    float attenuation = 1.0;\n\n    lightDir = normalize(lightDir);\n\n    return calcLight(lightDir, light.color, light.intensity, attenuation, normal, viewDir);\n}\n#endif\n\n\n\nvoid calcTotalLight(inout vec3 totalLight, vec3 norm, vec3 viewDir){\n    #if POINT_LIGHTS_COUNT > 0\n       for(int i = 0; i < POINT_LIGHTS_COUNT; i++){\n            totalLight += calcPointLight(getPointLightDir(i), u_pointLights[i], norm, viewDir);\n       }\n    #endif\n\n    #if DIRECTION_LIGHTS_COUNT > 0\n       for(int i = 0; i < DIRECTION_LIGHTS_COUNT; i++){\n            totalLight += calcDirectionLight(getDirectionLightDir(i), u_directionLights[i], norm, viewDir);\n       }\n    #endif\n}\n",body: "vec3 normal = normalize(getNormal());\n\n	#ifdef BOTH_SIDE\n		normal = normal * (-1.0 + 2.0 * float(gl_FrontFacing));\n	#endif\n\n    vec3 viewDir = normalize(getViewDir());\n\n    vec3 totalColor = vec3(0, 0, 0);\n\n    calcTotalLight(totalColor, normal, viewDir);\n\n    totalColor = getShadowVisibility() * totalColor;\n",}
public static light_vertex:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_Position = u_pMatrix * u_vMatrix * vec4(v_worldPosition, 1.0);\n",}
public static mirror_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec4 v_mirrorCoord;\n",funcDeclare: "",funcDefine: "//todo add more blend way to mix mirror color and textureColor\n		float blendOverlay(float base, float blend) {\n			return( base < 0.5 ? ( 2.0 * base * blend ) : (1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n		}\n		vec3 getMirrorColor(in vec3 materialColor){\n			vec3 color = vec3(texture2DProj(u_mirrorSampler, v_mirrorCoord));\n\n			color = vec3(blendOverlay(materialColor.r, color.r), blendOverlay(materialColor.g, color.g), blendOverlay(materialColor.b, color.b));\n\n			return color;\n		}\n",body: "totalColor = getMirrorColor(totalColor);\n",}
public static mirror_forBasic_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec4 v_mirrorCoord;\n",funcDeclare: "",funcDefine: "",body: "mat4 textureMatrix = mat4(\n                        0.5, 0.0, 0.0, 0.0,\n                        0.0, 0.5, 0.0, 0.0,\n                        0.0, 0.0, 0.5, 0.0,\n                        0.5, 0.5, 0.5, 1.0\n);\n\nv_mirrorCoord = textureMatrix * gl_Position;\n",}
public static basic_envMap_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_dir;\n",funcDeclare: "",funcDefine: "",body: "gl_FragColor = textureCube(u_samplerCube0, v_dir);\n",}
public static basic_envMap_forBasic_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_dir;\n",funcDeclare: "",funcDefine: "",body: "v_dir = a_position;\n",}
public static envMap_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_normal;\nvarying vec3 v_position;\n",funcDeclare: "",funcDefine: "",body: "vec3 inDir = normalize(v_position - u_cameraPos);\n",}
public static envMap_forBasic_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_normal;\nvarying vec3 v_position;\n",funcDeclare: "",funcDefine: "",body: "v_normal = normalize( u_normalMatrix * a_normal);\n    v_position = vec3(u_mMatrix * vec4(a_position, 1.0));\n",}
public static fresnel_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "float computeFresnelRatio(vec3 inDir, vec3 normal, float refractionRatio){\n    float f = pow(1.0 - refractionRatio, 2.0) / pow(1.0 + refractionRatio, 2.0);\n    float fresnelPower = 5.0;\n    float ratio = f + (1.0 - f) * pow((1.0 - dot(inDir, normal)), fresnelPower);\n\n    return ratio / 100.0;\n}\nvec3 getEnvMapTotalColor(vec3 inDir, vec3 normal){\n    vec3 reflectDir = reflect(inDir, normal);\n    vec3 refractDir = refract(inDir, normal, u_refractionRatio);\n\n    vec3 reflectColor = vec3(textureCube(u_samplerCube0, reflectDir));\n    vec3 refractColor = vec3(textureCube(u_samplerCube0, refractDir));\n\n    vec3 totalColor = vec3(0, 0, 0);\n\n	if(u_reflectivity != NULL){\n        totalColor = mix(reflectColor, refractColor, u_reflectivity);\n	}\n	else{\n        totalColor = mix(reflectColor, refractColor, computeFresnelRatio(inDir, normal, u_refractionRatio));\n	}\n\n	return totalColor;\n}\n",body: "gl_FragColor = vec4(getEnvMapTotalColor(inDir, normalize(v_normal)), 1.0);\n\n",}
public static reflection_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_FragColor = textureCube(u_samplerCube0, reflect(inDir, normalize(v_normal)));\n",}
public static refraction_forBasic_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_FragColor = textureCube(u_samplerCube0, refract(inDir, normalize(v_normal), u_refractionRatio));\n",}
public static basic_envMap_forLight_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_basicEnvMap_dir;\n",funcDeclare: "",funcDefine: "",body: "totalColor *= vec3(textureCube(u_samplerCube0, v_basicEnvMap_dir));\n",}
public static basic_envMap_forLight_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_basicEnvMap_dir;\n",funcDeclare: "",funcDefine: "",body: "v_basicEnvMap_dir = a_position;\n",}
public static envMap_forLight_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "vec3 inDir = normalize(v_worldPosition - u_cameraPos);\n",}
public static envMap_forLight_vertex:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "",}
public static fresnel_forLight_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "float computeFresnelRatio(vec3 inDir, vec3 normal, float refractionRatio){\n    float f = pow(1.0 - refractionRatio, 2.0) / pow(1.0 + refractionRatio, 2.0);\n    float fresnelPower = 5.0;\n    float ratio = f + (1.0 - f) * pow((1.0 - dot(inDir, normal)), fresnelPower);\n\n    return ratio / 100.0;\n}\n\nvec3 getEnvMapTotalColor(vec3 inDir, vec3 normal){\n    vec3 reflectDir = reflect(inDir, normal);\n    vec3 refractDir = refract(inDir, normal, u_refractionRatio);\n\n    vec3 reflectColor = vec3(textureCube(u_samplerCube0, reflectDir));\n    vec3 refractColor = vec3(textureCube(u_samplerCube0, refractDir));\n\n    vec3 totalColor = vec3(0, 0, 0);\n\n	if(u_reflectivity != NULL){\n        totalColor = mix(reflectColor, refractColor, u_reflectivity);\n	}\n	else{\n        totalColor = mix(reflectColor, refractColor, computeFresnelRatio(inDir, normal, u_refractionRatio));\n	}\n\n	return totalColor;\n}\n",body: "totalColor *= getEnvMapTotalColor(inDir, normalize(getNormal());\n",}
public static reflection_forLight_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "totalColor *= vec3(textureCube(u_samplerCube0, reflect(inDir, normalize(getNormal()))));\n",}
public static refraction_forLight_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "totalColor *= vec3(textureCube(u_samplerCube0, refract(inDir, getNormal(), u_refractionRatio)));\n",}
public static diffuseMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_diffuseMapTexCoord;\n",funcDeclare: "",funcDefine: "vec3 getMaterialDiffuse() {\n        return vec3(texture2D(u_diffuseMapSampler, v_diffuseMapTexCoord));\n    }\n",body: "",}
public static diffuseMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_diffuseMapTexCoord;\n",funcDeclare: "",funcDefine: "",body: "vec2 sourceTexCoord = a_texCoord * u_sourceRegion.zw + u_sourceRegion.xy;\n    v_diffuseMapTexCoord = sourceTexCoord * u_repeatRegion.zw + u_repeatRegion.xy;\n    //v_diffuseMapTexCoord = a_texCoord;\n",}
public static noDiffuseMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "vec3 getMaterialDiffuse() {\n        return u_diffuse;\n    }\n",body: "",}
public static noNormalMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_normal;\n",funcDeclare: "vec3 getNormal();\n\n",funcDefine: "#if POINT_LIGHTS_COUNT > 0\nvec3 getPointLightDir(int index){\n    //workaround '[] : Index expression must be constant' error\n    for (int x = 0; x <= POINT_LIGHTS_COUNT; x++) {\n        if(x == index){\n            return getPointLightDirByLightPos(u_pointLights[x].position);\n        }\n    }\n}\n#endif\n\n#if DIRECTION_LIGHTS_COUNT > 0\nvec3 getDirectionLightDir(int index){\n    //workaround '[] : Index expression must be constant' error\n    for (int x = 0; x <= DIRECTION_LIGHTS_COUNT; x++) {\n        if(x == index){\n            return getDirectionLightDirByLightPos(u_directionLights[x].position);\n        }\n    }\n}\n#endif\n\n\nvec3 getViewDir(){\n    return normalize(u_cameraPos - v_worldPosition);\n}\nvec3 getNormal(){\n    return v_normal;\n}\n\n",body: "",}
public static noNormalMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_normal;\n",funcDeclare: "",funcDefine: "",body: "//v_normal = normalize( vec3(u_normalMatrix * vec4(a_normal, 1.0)));\n    v_normal = normalize( u_normalMatrix * a_normal);\n",}
public static noSpecularMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "vec3 getMaterialSpecular() {\n        return u_specular;\n    }\n",body: "",}
public static normalMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_normalMapTexCoord;\nvarying vec3 v_viewDir;\n#if POINT_LIGHTS_COUNT > 0\nvarying vec3 v_pointLightDir[POINT_LIGHTS_COUNT];\n#endif\n\n#if DIRECTION_LIGHTS_COUNT > 0\nvarying vec3 v_directionLightDir[DIRECTION_LIGHTS_COUNT];\n#endif\n\n",funcDeclare: "vec3 getNormal();\n\nvec3 getLightDir(vec3 lightPos);\n\n",funcDefine: "#if POINT_LIGHTS_COUNT > 0\nvec3 getPointLightDir(int index){\n    //workaround '[] : Index expression must be constant' error\n    for (int x = 0; x <= POINT_LIGHTS_COUNT; x++) {\n        if(x == index){\n            return v_pointLightDir[x];\n        }\n    }\n}\n#endif\n\n#if DIRECTION_LIGHTS_COUNT > 0\n\nvec3 getDirectionLightDir(int index){\n    //workaround '[] : Index expression must be constant' error\n    for (int x = 0; x <= DIRECTION_LIGHTS_COUNT; x++) {\n        if(x == index){\n            return v_directionLightDir[x];\n        }\n    }\n}\n#endif\n\n\nvec3 getViewDir(){\n    return v_viewDir;\n}\nvec3 getNormal(){\n        // Obtain normal from normal map in range [0,1]\n        vec3 normal = texture2D(u_normalMapSampler, v_normalMapTexCoord).rgb;\n\n        // Transform normal vector to range [-1,1]\n        return normalize(normal * 2.0 - 1.0);  // this normal is in tangent space\n}\n",body: "",}
public static normalMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_normalMapTexCoord;\n	varying vec3 v_viewDir;\n\n\n#if POINT_LIGHTS_COUNT > 0\nvarying vec3 v_pointLightDir[POINT_LIGHTS_COUNT];\n#endif\n\n#if DIRECTION_LIGHTS_COUNT > 0\nvarying vec3 v_directionLightDir[DIRECTION_LIGHTS_COUNT];\n#endif\n\n",funcDeclare: "",funcDefine: "mat3 computeTBN(){\n            //vec3 T = normalize(normalMatrix * tangent);\n            //vec3 B = normalize(normalMatrix * bitangent);\n            //vec3 N = normalize(normalMatrix * normal);\n\n            vec3 T = normalize(u_normalMatrix * a_tangent);\n            vec3 N = normalize(u_normalMatrix * a_normal);\n            // re-orthogonalize T with respect to N\n            T = normalize(T - dot(T, N) * N);\n            // then retrieve perpendicular vector B with the cross product of T and N\n            vec3 B = cross(T, N);\n\n\n            return transpose(mat3(T, B, N));\n        }\n",body: "mat3 TBN = computeTBN();\n\n    //v_tangentLightPos = TBN * light.position;\n    //v_tangentCameraPos  = TBN * u_cameraPos;\n    //v_tangentPos  = TBN * v_position;\n\n\n    vec3 tangentPosition = TBN * vec3(u_mMatrix * vec4(a_position, 1.0));\n\n    v_normalMapTexCoord = a_texCoord;\n\n    v_viewDir = normalize(TBN * u_cameraPos - tangentPosition);\n\n\n#if POINT_LIGHTS_COUNT > 0\n       for(int i = 0; i < POINT_LIGHTS_COUNT; i++){\n            //not normalize for computing distance\n            v_pointLightDir[i] = TBN * getPointLightDirByLightPos(u_pointLights[i].position, tangentPosition);\n       }\n#endif\n\n#if DIRECTION_LIGHTS_COUNT > 0\n       for(int i = 0; i < DIRECTION_LIGHTS_COUNT; i++){\n            v_directionLightDir[i] = normalize(- TBN * getDirectionLightDirByLightPos(u_directionLights[i].position));\n       }\n#endif\n\n",}
public static specularMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_specularMapTexCoord;\n",funcDeclare: "",funcDefine: "vec3 getMaterialSpecular() {\n        return vec3(texture2D(u_specularMapSampler, v_specularMapTexCoord));\n    }\n",body: "",}
public static specularMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec2 v_specularMapTexCoord;\n",funcDeclare: "",funcDefine: "",body: "v_specularMapTexCoord = a_texCoord;\n",}
public static buildCubemapShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_worldPosition;\n",funcDeclare: "",funcDefine: "",body: "\n// get distance between fragment and light source\n    float lightDistance = length(v_worldPosition - u_lightPos);\n\n    // map to [0,1] range by dividing by farPlane\n    lightDistance = lightDistance / u_farPlane;\n\n\ngl_FragData[0] = packDepth(lightDistance);\n\n\n//gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);\n//gl_FragData[0] = vec4(lightDistance, 1.0, 1.0, 1.0);\n",}
public static buildCubemapShadowMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec3 v_worldPosition;\n",funcDeclare: "",funcDefine: "",body: "v_worldPosition = vec3(u_mMatrix * vec4(a_position, 1.0));\n    gl_Position = u_pMatrix * u_vMatrix * vec4(v_worldPosition, 1.0);\n",}
public static buildTwoDShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_FragData[0] = packDepth(gl_FragCoord.z);\n",}
public static buildTwoDShadowMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "",body: "gl_Position = u_vpMatrixFromLight * u_mMatrix * vec4(a_position, 1.0);\n//gl_Position = u_pMatrix* u_vMatrix * u_mMatrix * vec4(a_position, 1.0);\n",}
public static commonBuildShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "// Packing a float in GLSL with multiplication and mod\nvec4 packDepth(in float depth) {\n    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n    const vec4 bit_mask = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n    // combination of mod and multiplication and division works better\n    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);\n    res -= res.xxyz * bit_mask;\n\n    return res;\n}\n",body: "",}
public static cubemapShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "uniform samplerCube u_cubemapShadowMapSampler[ CUBEMAP_SHADOWMAP_COUNT ];\n	uniform float u_cubemapShadowDarkness[ CUBEMAP_SHADOWMAP_COUNT ];\n	uniform float u_cubemapShadowBias[ CUBEMAP_SHADOWMAP_COUNT ];\n	uniform float u_farPlane[ CUBEMAP_SHADOWMAP_COUNT ];\n	uniform vec3 u_cubemapLightPos[ CUBEMAP_SHADOWMAP_COUNT ];\n",funcDeclare: "",funcDefine: "// PCF\nfloat getCubemapShadowVisibilityByPCF(float currentDepth, vec3 fragToLight, samplerCube cubemapShadowMapSampler, float shadowBias, float farPlane, float shadowDarkness){\n    //only support in opengl es 3.0+\n    //vec3 sampleOffsetDirections[20] = vec3[]\n    //(\n       //vec3( 1,  1,  1), vec3( 1, -1,  1), vec3(-1, -1,  1), vec3(-1,  1,  1),\n       //vec3( 1,  1, -1), vec3( 1, -1, -1), vec3(-1, -1, -1), vec3(-1,  1, -1),\n       //vec3( 1,  1,  0), vec3( 1, -1,  0), vec3(-1, -1,  0), vec3(-1,  1,  0),\n       //vec3( 1,  0,  1), vec3(-1,  0,  1), vec3( 1,  0, -1), vec3(-1,  0, -1),\n       //vec3( 0,  1,  1), vec3( 0, -1,  1), vec3( 0, -1, -1), vec3( 0,  1, -1)\n    //);\n\n    vec3 sampleOffsetDirections[20];\n\n    sampleOffsetDirections[0] = vec3( 1,  1,  1);\n    sampleOffsetDirections[1] = vec3( 1,  -1,  1);\n    sampleOffsetDirections[2] = vec3( -1,  -1,  1);\n    sampleOffsetDirections[3] = vec3( -1,  1,  1);\n\n    sampleOffsetDirections[4] = vec3( 1,  1,  -1);\n    sampleOffsetDirections[5] = vec3( 1,  -1,  -1);\n    sampleOffsetDirections[6] = vec3( -1,  -1,  -1);\n    sampleOffsetDirections[7] = vec3( -1,  1,  -1);\n\n    sampleOffsetDirections[8] = vec3( 1,  1,  0);\n    sampleOffsetDirections[9] = vec3( 1,  -1,  0);\n    sampleOffsetDirections[10] = vec3( -1,  -1,  0);\n    sampleOffsetDirections[11] = vec3( -1,  1,  0);\n\n    sampleOffsetDirections[12] = vec3( 1,  0,  1);\n    sampleOffsetDirections[13] = vec3( -1,  0,  1);\n    sampleOffsetDirections[14] = vec3( 1,  0,  -1);\n    sampleOffsetDirections[15] = vec3( -1,  0,  -1);\n\n    sampleOffsetDirections[16] = vec3( 0,  1,  1);\n    sampleOffsetDirections[17] = vec3( 0,  -1,  1);\n    sampleOffsetDirections[18] = vec3( 0,  -1,  -1);\n    sampleOffsetDirections[19] = vec3( 0,  1,  -1);\n\n    float shadow = 0.0;\n    int samples = 20;\n\n    //float diskRadius = 0.00000;\n    //Another interesting trick we can apply here is that we can change the diskRadius based on how far the viewer is away from a fragment; this way we can increase the offset radius by the distance to the viewer, making the shadows softer when far away and sharper when close by.\n    float viewDistance = length(u_cameraPos - v_worldPosition);\n    float diskRadius = (1.0 + (viewDistance / farPlane)) / 25.0;\n\n    //for(int i = 0; i < samples; ++i)\n    for(int i = 0; i < 20; ++i)\n    {\n        float pcfDepth = unpackDepth(textureCube(cubemapShadowMapSampler, fragToLight + sampleOffsetDirections[i] * diskRadius));\n        pcfDepth *= farPlane;   // Undo mapping [0;1]\n        shadow += currentDepth - shadowBias > pcfDepth  ? shadowDarkness : 1.0;\n    }\n    shadow /= float(samples);\n\n    return shadow;\n}\n\n\nfloat getCubemapShadowVisibility(vec3 lightDir, samplerCube cubemapShadowMapSampler, vec3 lightPos, float farPlane, float shadowBias, float  shadowDarkness) {\n// Get vector between fragment position and light position\n    vec3 fragToLight= v_worldPosition - lightPos;\n    // Use the light to fragment vector to sample from the depth map\n    // Now get current linear depth as the length between the fragment and light position\n    float currentDepth = length(fragToLight);\n\n    #if defined(SHADOWMAP_TYPE_PCF)\n    return getCubemapShadowVisibilityByPCF(currentDepth, fragToLight, cubemapShadowMapSampler, getShadowBias(lightDir, shadowBias), farPlane, shadowDarkness);\n    #endif\n\n    float closestDepth = unpackDepth(textureCube(cubemapShadowMapSampler, fragToLight));\n\n    // It is currently in linear range between [0,1]. Re-transform back to original value\n    closestDepth *= farPlane;\n\n\n    return float(currentDepth > closestDepth + getShadowBias(lightDir, shadowBias) ? shadowDarkness : 1.0);\n}\n",body: "",}
public static noShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "",funcDefine: "vec3 getShadowVisibility() {\n        return vec3(1.0);\n    }\n",body: "",}
public static totalShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "",funcDeclare: "float getShadowBias(vec3 lightDir, float shadowBias);\nfloat unpackDepth(vec4 rgbaDepth);\n",funcDefine: "float getShadowBias(vec3 lightDir, float shadowBias){\n    float bias = shadowBias;\n\n    if(shadowBias == NULL){\n        bias = 0.005;\n    }\n\n\n     /*!\n     A shadow bias of 0.005 solves the issues of our scene by a large extent, but some surfaces that have a steep angle to the light source might still produce shadow acne. A more solid approach would be to change the amount of bias based on the surface angle towards the light: something we can solve with the dot product:\n     */\n\n     return max(bias * (1.0 - dot(normalize(getNormal()), lightDir)), bias);\n\n    //return bias;\n}\n\nfloat unpackDepth(vec4 rgbaDepth) {\n    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);\n    return dot(rgbaDepth, bitShift);\n}\n\nvec3 getShadowVisibility() {\n    vec3 shadowColor = vec3(1.0);\n    vec3 twoDLightDir = vec3(0.0);\n    vec3 cubemapLightDir = vec3(0.0);\n\n\n    //to normalMap, the lightDir use the origin one instead of normalMap's lightDir here(the lightDir is used for computing shadowBias, the origin one is enough for it)\n\n    #if TWOD_SHADOWMAP_COUNT > 0\n	for( int i = 0; i < TWOD_SHADOWMAP_COUNT; i ++ ) {\n        twoDLightDir = getDirectionLightDirByLightPos(u_twoDLightPos[i]);\n\n	////if is opposite to direction of light rays, no shadow\n\n        shadowColor *= getTwoDShadowVisibility(twoDLightDir, u_twoDShadowMapSampler[i], v_positionFromLight[i], u_twoDShadowBias[i], u_twoDShadowDarkness[i], u_twoDShadowSize[i]);\n	}\n	#endif\n\n\n	#if CUBEMAP_SHADOWMAP_COUNT > 0\n	for( int i = 0; i < CUBEMAP_SHADOWMAP_COUNT; i ++ ) {\n        cubemapLightDir = getPointLightDirByLightPos(u_cubemapLightPos[i]);\n\n	////if is opposite to direction of light rays, no shadow\n\n        shadowColor *= getCubemapShadowVisibility(cubemapLightDir, u_cubemapShadowMapSampler[i], u_cubemapLightPos[i], u_farPlane[i], u_cubemapShadowBias[i], u_cubemapShadowDarkness[i]);\n	}\n	#endif\n\n	return shadowColor;\n}\n\n",body: "",}
public static twoDShadowMap_fragment:GLSLChunk = {top: "",define: "",varDeclare: "varying vec4 v_positionFromLight[ TWOD_SHADOWMAP_COUNT ];\n	uniform sampler2D u_twoDShadowMapSampler[ TWOD_SHADOWMAP_COUNT ];\n	uniform float u_twoDShadowDarkness[ TWOD_SHADOWMAP_COUNT ];\n	uniform float u_twoDShadowBias[ TWOD_SHADOWMAP_COUNT ];\n	uniform vec2 u_twoDShadowSize[ TWOD_SHADOWMAP_COUNT ];\n	uniform vec3 u_twoDLightPos[ TWOD_SHADOWMAP_COUNT ];\n",funcDeclare: "",funcDefine: "// PCF\nfloat getTwoDShadowVisibilityByPCF(float currentDepth, vec2 shadowCoord, sampler2D twoDShadowMapSampler, float shadowBias, float shadowDarkness, vec2 shadowMapSize){\n\n    float shadow = 0.0;\n    vec2 texelSize = vec2(1.0 / shadowMapSize[0], 1.0 / shadowMapSize[1]);\n\n    for(int x = -1; x <= 1; ++x)\n    {\n        for(int y = -1; y <= 1; ++y)\n        {\n            float pcfDepth = unpackDepth(texture2D(twoDShadowMapSampler, shadowCoord + vec2(x, y) * texelSize));\n            shadow += currentDepth - shadowBias > pcfDepth  ? shadowDarkness : 1.0;\n        }\n    }\n    shadow /= 9.0;\n\n    return shadow;\n}\n\n\n\nfloat getTwoDShadowVisibility(vec3 lightDir, sampler2D twoDShadowMapSampler, vec4 v_positionFromLight, float shadowBias, float shadowDarkness, vec2 shadowSize) {\n    //project texture\n    vec3 shadowCoord = (v_positionFromLight.xyz / v_positionFromLight.w) / 2.0 + 0.5;\n    //vec3 shadowCoord = vec3(0.5, 0.5, 0.5);\n\n    #ifdef SHADOWMAP_TYPE_PCF\n    // Percentage-close filtering\n    // (9 pixel kernel)\n    return getTwoDShadowVisibilityByPCF(shadowCoord.z, shadowCoord.xy, twoDShadowMapSampler, getShadowBias(lightDir, shadowBias), shadowDarkness, shadowSize);\n\n    #else\n    return shadowCoord.z > unpackDepth(texture2D(twoDShadowMapSampler, shadowCoord.xy)) + getShadowBias(lightDir, shadowBias) ? shadowDarkness : 1.0;\n    #endif\n}\n",body: "",}
public static twoDShadowMap_vertex:GLSLChunk = {top: "",define: "",varDeclare: "varying vec4 v_positionFromLight[ TWOD_SHADOWMAP_COUNT ];\nuniform mat4 u_vpMatrixFromLight[ TWOD_SHADOWMAP_COUNT ];\n",funcDeclare: "",funcDefine: "",body: "for( int i = 0; i < TWOD_SHADOWMAP_COUNT; i ++ ) {\n    v_positionFromLight[i] = u_vpMatrixFromLight[i] * vec4(v_worldPosition, 1.0);\n	}\n",}
}
export type GLSLChunk = {top?:string;define?:string;varDeclare?:string;funcDeclare?:string;funcDefine?:string;body?:string;}
}