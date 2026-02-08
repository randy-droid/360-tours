// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Pano_OC_00000", a: "VRayCam_Pano_014", p: new BABYLON.Vector3(767.511, 600.424, 4749.76), l: new BABYLON.Vector3(767.511, 600.424, 4752.3)});
   layamaCameras.push({n: "Pano_OC_00001", a: "VRayCam_Pano_015", p: new BABYLON.Vector3(767.511, 600.424, 5136.93), l: new BABYLON.Vector3(767.511, 600.424, 5139.47)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

