// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Kenwood_Pano_0000", a: "VRayCam_Pano_00", p: new BABYLON.Vector3(-2164.08, 170.353, -421.834), l: new BABYLON.Vector3(-2164.08, 170.353, -419.294)});
   layamaCameras.push({n: "Kenwood_Pano_0001", a: "VRayCam_Pano_001", p: new BABYLON.Vector3(-1645.64, 170.353, -418.476), l: new BABYLON.Vector3(-1645.64, 170.353, -415.936)});
   layamaCameras.push({n: "Kenwood_Pano_0002", a: "VRayCam_Pano_003", p: new BABYLON.Vector3(-740.531, 170.353, -404.252), l: new BABYLON.Vector3(-740.531, 170.353, -401.712)});
   layamaCameras.push({n: "Kenwood_Pano_0003", a: "VRayCam_Pano_004", p: new BABYLON.Vector3(-740.719, 170.353, -722.169), l: new BABYLON.Vector3(-740.719, 170.353, -719.629)});
   layamaCameras.push({n: "Kenwood_Pano_0004", a: "VRayCam_Pano_005", p: new BABYLON.Vector3(-740.719, 170.353, -1121.74), l: new BABYLON.Vector3(-740.719, 170.353, -1119.2)});
   layamaCameras.push({n: "Kenwood_Pano_0005", a: "VRayCam_Pano_006", p: new BABYLON.Vector3(-1411.23, 170.353, -1121.74), l: new BABYLON.Vector3(-1411.23, 170.353, -1119.2)});
   layamaCameras.push({n: "Kenwood_Pano_0006", a: "VRayCam_Pano_007", p: new BABYLON.Vector3(-2143.28, 170.353, -1121.74), l: new BABYLON.Vector3(-2143.28, 170.353, -1119.2)});
   layamaCameras.push({n: "Kenwood_Pano_0007", a: "VRayCam_Pano_008", p: new BABYLON.Vector3(-2143.28, 170.353, 196.525), l: new BABYLON.Vector3(-2143.28, 170.353, 199.065)});
   layamaCameras.push({n: "Kenwood_Pano_0008", a: "VRayCam_Pano_009", p: new BABYLON.Vector3(-2102.69, 170.353, 674.95), l: new BABYLON.Vector3(-2102.69, 170.353, 677.49)});
   layamaCameras.push({n: "Kenwood_Pano_0009", a: "VRayCam_Pano_010", p: new BABYLON.Vector3(-1679.78, 170.353, 751.524), l: new BABYLON.Vector3(-1679.78, 170.353, 754.064)});
   layamaCameras.push({n: "Kenwood_Pano_0010", a: "VRayCam_Pano_011", p: new BABYLON.Vector3(-1314.64, 170.353, 761.712), l: new BABYLON.Vector3(-1314.64, 170.353, 764.252)});
   layamaCameras.push({n: "Kenwood_Pano_0011", a: "VRayCam_Pano_012", p: new BABYLON.Vector3(-756.114, 170.353, 814.143), l: new BABYLON.Vector3(-756.114, 170.353, 816.683)});
   layamaCameras.push({n: "Kenwood_Pano_0012", a: "VRayCam_Pano_013", p: new BABYLON.Vector3(-741.93, 170.353, 606.444), l: new BABYLON.Vector3(-741.93, 170.353, 608.984)});
   layamaCameras.push({n: "Kenwood_Pano_0013", a: "VRayCam_Pano_014", p: new BABYLON.Vector3(-741.93, 170.353, 136.044), l: new BABYLON.Vector3(-741.93, 170.353, 138.584)});
   layamaCameras.push({n: "Kenwood_Pano_0014", a: "VRayCam_Pano_002", p: new BABYLON.Vector3(-1183.4, 170.353, -386.888), l: new BABYLON.Vector3(-1183.4, 170.353, -384.348)});
   layamaCameras.push({n: "Kenwood_Pano_0015", a: "VRayCam_Pano_015", p: new BABYLON.Vector3(-534.445, 170.353, 829.185), l: new BABYLON.Vector3(-534.445, 170.353, 831.725)});
   layamaCameras.push({n: "Kenwood_Pano_0016", a: "VRayCam_Pano_016", p: new BABYLON.Vector3(-221.398, 170.353, 823.124), l: new BABYLON.Vector3(-221.398, 170.353, 825.664)});
   layamaCameras.push({n: "Kenwood_Pano_0017", a: "VRayCam_Pano_017", p: new BABYLON.Vector3(365.806, 170.353, 823.124), l: new BABYLON.Vector3(365.806, 170.353, 825.664)});
   layamaCameras.push({n: "Kenwood_Pano_0018", a: "VRayCam_Pano_018", p: new BABYLON.Vector3(852.182, 170.353, 797.91), l: new BABYLON.Vector3(852.182, 170.353, 800.45)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 0;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

