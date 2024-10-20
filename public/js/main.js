
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