
var myView = new ol.View({
  center: [
    -11486790.047830956,
    2710833.5962958666
],
  zoom: 5,
});

const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

const overlay = new ol.Overlay({
  element: container,
});

var myLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
});

var layer = [myLayer]

const map = new ol.Map({
target: 'map',
layers: layer,
view: myView,
overlay: [overlay],
});

var styles = [
new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(255,255,255,0.5)"
  }),
  stroke: new ol.style.Stroke({
    color: "black",
    width: 1.25
  }),
})
]

mygeojson = new ol.layer.Vector({
source: new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url: "../datos/mexicoHigh.json"
}),
style: styles
});

map.addLayer(mygeojson);

const centreStates =[
{
  "name": "Aguascalientes",
  "coords": [-11391904.099237297, 2507331.713236343]
},
{
  "name": "Baja California",
  "coords": [-12806485.713147098, 3533853.7442372167]
},
{
  "name": "Baja California Sur",
  "coords": [-12422269.966130694, 2907280.573219455]
},
{
  "name": "Campeche",
  "coords": [-10037459.905753855, 2155755.324531149]
},
{
  "name": "Coahuila de Zaragoza",
  "coords": [-11400254.842066484, 3148667.570474349]
},
{
  "name": "Colima",
  "coords": [-11564893.242476838, 2168331.097601397]
},
{
  "name": "Chiapas",
  "coords": [-10304237.32959331, 1865225.5579893086]
},
{
  "name": "Chihuahua",
  "coords": [-11864548.851296807, 3321905.035774646]
},
{
  "name": "Ciudad de México",
  "coords": [-11032559.734668212, 2187968.1300898497]
},
{
  "name": "Durango",
  "coords": [-11670596.909029858, 2818156.276420534]
},
{
  "name": "Guanajuato",
  "coords": [-11250053.783425396, 2384062.0978494254]
},
{
  "name": "Guerrero",
  "coords": [-11119661.706768703, 1993657.33500738]
},
{
  "name": "Hidalgo",
  "coords": [-11004953.85602089, 2321773.6430143034]
},
{
  "name": "Jalisco",
  "coords": [-11507184.012574442, 2346814.053622285]
},
{
  "name": "México",
  "coords": [-11084718.986789681, 2213727.0360789048]
},
{
  "name": "Michoacán de Ocampo",
  "coords": [-11338802.743680237, 2198552.6897560377]
},
{
  "name": "Morelos",
  "coords": [-11026885.29082526, 2123452.869370683]
},
{
  "name": "Nayarit",
  "coords": [-11667024.20807745, 2483183.3036890095]
},
{
  "name": "Nuevo León",
  "coords": [-11112102.91177369, 2943051.481925854]
},
{
  "name": "Oaxaca",
  "coords": [-10744711.214431707, 1917104.231001293]
},
{
  "name": "Puebla",
  "coords": [-10889785.598137455, 2148958.756880493]
},
{
  "name": "Querétaro",
  "coords": [-11121868.127412755, 2369983.164786116]
},
{
  "name": "Quintana Roo",
  "coords": [-9815988.884597529, 2238004.9807529654]
},
{
  "name": "San Luis Potosí",
  "coords": [-11147032.623603594, 2559857.7912720656]
},
{
  "name": "Sinaloa",
  "coords": [-11952260.842369067, 2817970.2545715817]
},
{
  "name": "Sonora",
  "coords": [-12321605.528763475, 3430912.0138605395]
},
{
  "name": "Tabasco",
  "coords": [-10326164.081681952, 2041011.2971717415]
},
{
  "name": "Tamaulipas",
  "coords": [-10955774.965154598, 2766327.911174073]
},
{
  "name": "Tlaxcala",
  "coords": [-10920566.32546227, 2203390.7742282064]
},
{
  "name": "Veracruz de Ignacio de la Llave",
  "coords": [-10665457.03624043, 2120553.2916900646]
},
{
  "name": "Yucatán",
  "coords": [-9903386.238895658, 2365374.159716892]
},
{
  "name": "Zacatecas",
  "coords": [-11454784.885145335, 2647852.4655018845]
}
];

var currentYearData = info[1].splice(2);

document.getElementById("selectionYear").addEventListener("input", (event)=>{
const selectedValue = event.target.value;
var index = selectedValue - 1979;
currentYearData = info[index].splice(2);
console.log(currentYearData);
});

document.getElementById("selectionState").addEventListener("input", (event)=>{
const selectedValue = event.target.value;
var index = 0;
centreStates.forEach((state, i)=>{
  if(state.name === selectedValue){
    index = i;
    return;
  }
})
myView.animate({
  center: centreStates[index].coords,
  duration: 2000,
  zoom: 7
})
//map.addLayer(estadoCapa);
});
var datos  = 0;
var stateName = "";

map.on("click", (evt)=>{
  var feature1 = map.forEachFeatureAtPixel(evt.pixel, (feature)=>{
    return feature;
  })
  var index = 0;
  stateName = feature1.A.name;
  console.log(stateName);
  centreStates.forEach((state, i)=>{
  if(state.name === feature1.A.name){
    index = i;
    return;
  }
  datos = currentYearData[index];
})
});

var bandera = false;

document.getElementById("map").addEventListener('click', function (event) {
    const coordinateX = event.pageX-45;
    const coordinateY = event.pageY-130;
    console.log(event.offsetY);
    if (!document.getElementById("map").contains(container)) {
      document.getElementById("map").appendChild(container);
    }
    content.innerHTML = `<h1>${stateName}: ${datos} vehicles</h1>`;
    container.style.display = "flex";
    container.style.top = `${coordinateY}px`; 
    container.style.left = `${coordinateX}px`;
});

closer.onclick = function(event){
    event.stopPropagation();
    container.style.display = "none";
}