window.onload = init;

function init () {

    const view = new ol.View({
        center: [0,0],
        zoom: 2
    });

    const baseMap = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    const map = new ol.Map({
        view: view,
        layers: [baseMap],
        target: "map"
    })
}