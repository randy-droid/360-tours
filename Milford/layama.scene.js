// Created with Motiva Layama v1.22 https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Pano_000000", a: "VRayCam_Pano_Initial", p: new BABYLON.Vector3(1014.18, 166.036, -442.553), l: new BABYLON.Vector3(1016.72, 166.036, -442.553)});
   layamaCameras.push({n: "Pano_000001", a: "VRayCam_Pano_00", p: new BABYLON.Vector3(1014.18, 210.123, -720.643), l: new BABYLON.Vector3(1014.18, 210.123, -718.103)});
   layamaCameras.push({n: "Pano_000002", a: "VRayCam_Pano_001", p: new BABYLON.Vector3(850.571, 210.123, -744.608), l: new BABYLON.Vector3(850.571, 210.123, -742.068)});
   layamaCameras.push({n: "Pano_000003", a: "VRayCam_Pano_002", p: new BABYLON.Vector3(587.417, 166.176, -708.992), l: new BABYLON.Vector3(587.417, 166.176, -706.452)});
   layamaCameras.push({n: "Pano_000004", a: "VRayCam_Pano_003", p: new BABYLON.Vector3(431.382, 166.176, -506.485), l: new BABYLON.Vector3(431.382, 166.176, -503.945)});
   layamaCameras.push({n: "Pano_000005", a: "VRayCam_Pano_004", p: new BABYLON.Vector3(617.381, 166.176, -297.229), l: new BABYLON.Vector3(617.381, 166.176, -294.689)});
   layamaCameras.push({n: "Pano_000006", a: "VRayCam_Pano_005", p: new BABYLON.Vector3(1006.25, 166.176, -230.227), l: new BABYLON.Vector3(1006.25, 166.176, -227.687)});
   layamaCameras.push({n: "Pano_000007", a: "VRayCam_Pano_006", p: new BABYLON.Vector3(1006.25, 125.142, 188.127), l: new BABYLON.Vector3(1006.25, 125.142, 190.667)});
   layamaCameras.push({n: "Pano_000008", a: "VRayCam_Pano_007", p: new BABYLON.Vector3(1244.44, 125.142, 471.09), l: new BABYLON.Vector3(1244.44, 125.142, 473.63)});
   layamaCameras.push({n: "Pano_000009", a: "VRayCam_Pano_2nd_00", p: new BABYLON.Vector3(850.571, 484.374, -305.154), l: new BABYLON.Vector3(850.571, 484.374, -302.614)});
   layamaCameras.push({n: "Pano_000010", a: "VRayCam_Pano_2nd_001", p: new BABYLON.Vector3(1403.41, 484.374, -305.154), l: new BABYLON.Vector3(1403.41, 484.374, -302.614)});
   layamaCameras.push({n: "Pano_000011", a: "VRayCam_Pano_2nd_002", p: new BABYLON.Vector3(1477.16, 484.374, 179.709), l: new BABYLON.Vector3(1477.16, 484.374, 182.249)});
   layamaCameras.push({n: "Pano_000012", a: "VRayCam_Pano_2nd_003", p: new BABYLON.Vector3(1477.55, 484.374, 708.458), l: new BABYLON.Vector3(1477.55, 484.374, 710.998)});
   layamaCameras.push({n: "Pano_000013", a: "VRayCam_Pano_2nd_004", p: new BABYLON.Vector3(545.598, 484.374, 708.458), l: new BABYLON.Vector3(545.598, 484.374, 710.998)});
   layamaCameras.push({n: "Pano_000014", a: "VRayCam_Pano_2nd_005", p: new BABYLON.Vector3(584.747, 484.374, 218.256), l: new BABYLON.Vector3(584.747, 484.374, 220.796)});
   layamaCameras.push({n: "Pano_000015", a: "VRayCam_Pano_2nd_006", p: new BABYLON.Vector3(608.418, 484.374, -281.217), l: new BABYLON.Vector3(608.418, 484.374, -278.677)});
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
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}

