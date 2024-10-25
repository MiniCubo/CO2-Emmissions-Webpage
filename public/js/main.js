
var myView = new ol.View({
    center: [
      -11486790.047830956,
      2710833.5962958666
  ],
    zoom: 5,
});

var myLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });

var layer = [myLayer]

const map = new ol.Map({
  target: 'map',
  layers: layer,
  view: myView
});

mygeojson = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "../datos/mexicoHigh.json"
  })
});

map.addLayer(mygeojson);

const centreStates = {"Colima": [
  -11564893.242476838,
  2168331.097601397
],
"Aguascaliente":[
  -11391904.099237297,
  2507331.713236343
], 
"Baja California":
[
  -12806485.713147098,
  3533853.7442372167
],
"Baja California Sur":[
  -12422269.966130694,
  2907280.573219455
],
"Campeche": [
  -10037459.905753855,
  2155755.324531149
],
"Coahuila de Zaragoza":[
  -11400254.842066484,
  3148667.570474349
],
"Chiapas":[
  -10304237.32959331,
  1865225.5579893086
],
"Chihuahua": [
  -11864548.851296807,
  3321905.035774646
],
"Ciudad de México": [
  -11032559.734668212,
  2187968.1300898497
],
"Durango":[
  -11670596.909029858,
  2818156.276420534
],
"Guanajuato":[
  -11250053.783425396,
  2384062.0978494254
],
"Guerrero":[
  -11119661.706768703,
  1993657.33500738
],
"Hidalgo":[
  -11004953.85602089,
  2321773.6430143034
],
"Jalisco":[
  -11507184.012574442,
  2346814.053622285
],
"México": [
  -11084718.986789681,
  2213727.0360789048
],
"Michoacán de Ocampo":[
  -11338802.743680237,
  2198552.6897560377
],
"Morelos":[
  -11026885.29082526,
  2123452.869370683
],
"Nayarit":[
  -11667024.20807745,
  2483183.3036890095
],
"Nuevo León":[
  -11112102.91177369,
  2943051.481925854
],
"Oaxaca":[
  -10744711.214431707,
  1917104.231001293
],
"Puebla": [
  -10889785.598137455,
  2148958.756880493
],
"Querétaro":[
  -11121868.127412755,
  2369983.164786116
],
"Quintana Roo":[
  -9815988.884597529,
  2238004.9807529654
],
"San Luis Potosí":[
  -11147032.623603594,
  2559857.7912720656
],
"Sinaloa":[
  -11952260.842369067,
  2817970.2545715817
],
"Sonora":[
  -12321605.528763475,
  3430912.0138605395
],
"Tabasco":[
  -10326164.081681952,
  2041011.2971717415
],
"Tamaulipas":[
  -10955774.965154598,
  2766327.911174073
],
"Tlaxcala":[
  -10920566.32546227,
  2203390.7742282064
],
"Veracruz de Ignacio de la Llave":[
  -10665457.03624043,
  2120553.2916900646
],
"Yucatán":[
  -9903386.238895658,
  2365374.159716892
],
"Zacatecas":[
  -11454784.885145335,
  2647852.4655018845
]
}


document.getElementById("selectionYear").addEventListener("change", (event)=>{
  const selectedValue = event.target.value;
  console.log("Selected option:", selectedValue);
});

document.getElementById("selectionState").addEventListener("change", (event)=>{
  const selectedValue = event.target.value;
  console.log("Selected option:", selectedValue);
});