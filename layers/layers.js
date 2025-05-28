ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([684449.080275, 9185361.313428, 698589.429270, 9200850.434174]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Aksesibilitas_1 = new ol.format.GeoJSON();
var features_Aksesibilitas_1 = format_Aksesibilitas_1.readFeatures(json_Aksesibilitas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Aksesibilitas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aksesibilitas_1.addFeatures(features_Aksesibilitas_1);
var lyr_Aksesibilitas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aksesibilitas_1, 
                style: style_Aksesibilitas_1,
                popuplayertitle: 'Aksesibilitas',
                interactive: true,
    title: 'Aksesibilitas<br />\
    <img src="styles/legend/Aksesibilitas_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/Aksesibilitas_1_1.png" /> 2,4km (30 menit)<br />' });
var format_Universitas_2 = new ol.format.GeoJSON();
var features_Universitas_2 = format_Universitas_2.readFeatures(json_Universitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Universitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universitas_2.addFeatures(features_Universitas_2);
var lyr_Universitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universitas_2, 
                style: style_Universitas_2,
                popuplayertitle: 'Universitas',
                interactive: true,
                title: '<img src="styles/legend/Universitas_2.png" /> Universitas'
            });

lyr_Positron_0.setVisible(true);lyr_Aksesibilitas_1.setVisible(true);lyr_Universitas_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Aksesibilitas_1,lyr_Universitas_2];
lyr_Aksesibilitas_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Tingkat Aksesibilitas', });
lyr_Universitas_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama Kampus', 'Kampus': 'Gedung Kampus', });
lyr_Aksesibilitas_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_Universitas_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', });
lyr_Aksesibilitas_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_Universitas_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', });
lyr_Universitas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});