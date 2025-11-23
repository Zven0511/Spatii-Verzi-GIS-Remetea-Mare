ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([212035.122817, 480709.338006, 227586.640283, 490492.392967]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiteIntravilan_1 = new ol.format.GeoJSON();
var features_LimiteIntravilan_1 = format_LimiteIntravilan_1.readFeatures(json_LimiteIntravilan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_LimiteIntravilan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteIntravilan_1.addFeatures(features_LimiteIntravilan_1);
var lyr_LimiteIntravilan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteIntravilan_1, 
                style: style_LimiteIntravilan_1,
                popuplayertitle: 'Limite Intravilan',
                interactive: true,
                title: '<img src="styles/legend/LimiteIntravilan_1.png" /> Limite Intravilan'
            });
var format_SVCimitir_2 = new ol.format.GeoJSON();
var features_SVCimitir_2 = format_SVCimitir_2.readFeatures(json_SVCimitir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVCimitir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVCimitir_2.addFeatures(features_SVCimitir_2);
var lyr_SVCimitir_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVCimitir_2, 
                style: style_SVCimitir_2,
                popuplayertitle: 'SV-Cimitir',
                interactive: true,
                title: '<img src="styles/legend/SVCimitir_2.png" /> SV-Cimitir'
            });
var format_SVZoneVerziSpecializate_3 = new ol.format.GeoJSON();
var features_SVZoneVerziSpecializate_3 = format_SVZoneVerziSpecializate_3.readFeatures(json_SVZoneVerziSpecializate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVZoneVerziSpecializate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVZoneVerziSpecializate_3.addFeatures(features_SVZoneVerziSpecializate_3);
var lyr_SVZoneVerziSpecializate_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVZoneVerziSpecializate_3, 
                style: style_SVZoneVerziSpecializate_3,
                popuplayertitle: 'SV-Zone Verzi Specializate',
                interactive: true,
                title: '<img src="styles/legend/SVZoneVerziSpecializate_3.png" /> SV-Zone Verzi Specializate'
            });
var format_SVParcurisiGradini_4 = new ol.format.GeoJSON();
var features_SVParcurisiGradini_4 = format_SVParcurisiGradini_4.readFeatures(json_SVParcurisiGradini_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVParcurisiGradini_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVParcurisiGradini_4.addFeatures(features_SVParcurisiGradini_4);
var lyr_SVParcurisiGradini_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVParcurisiGradini_4, 
                style: style_SVParcurisiGradini_4,
                popuplayertitle: 'SV-Parcuri si Gradini',
                interactive: true,
                title: '<img src="styles/legend/SVParcurisiGradini_4.png" /> SV-Parcuri si Gradini'
            });
var format_SVDAliniamentInfrastructura_5 = new ol.format.GeoJSON();
var features_SVDAliniamentInfrastructura_5 = format_SVDAliniamentInfrastructura_5.readFeatures(json_SVDAliniamentInfrastructura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVDAliniamentInfrastructura_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVDAliniamentInfrastructura_5.addFeatures(features_SVDAliniamentInfrastructura_5);
var lyr_SVDAliniamentInfrastructura_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVDAliniamentInfrastructura_5, 
                style: style_SVDAliniamentInfrastructura_5,
                popuplayertitle: 'SVD-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVDAliniamentInfrastructura_5.png" /> SVD-Aliniament Infrastructura'
            });
var format_SVAliniamentInfrastructura_6 = new ol.format.GeoJSON();
var features_SVAliniamentInfrastructura_6 = format_SVAliniamentInfrastructura_6.readFeatures(json_SVAliniamentInfrastructura_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamentInfrastructura_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamentInfrastructura_6.addFeatures(features_SVAliniamentInfrastructura_6);
var lyr_SVAliniamentInfrastructura_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamentInfrastructura_6, 
                style: style_SVAliniamentInfrastructura_6,
                popuplayertitle: 'SV-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamentInfrastructura_6.png" /> SV-Aliniament Infrastructura'
            });
var format_CopaciIanova_7 = new ol.format.GeoJSON();
var features_CopaciIanova_7 = format_CopaciIanova_7.readFeatures(json_CopaciIanova_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciIanova_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciIanova_7.addFeatures(features_CopaciIanova_7);
var lyr_CopaciIanova_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciIanova_7, 
                style: style_CopaciIanova_7,
                popuplayertitle: 'Copaci Ianova',
                interactive: true,
                title: '<img src="styles/legend/CopaciIanova_7.png" /> Copaci Ianova'
            });
var format_CopaciRemeteaMare_8 = new ol.format.GeoJSON();
var features_CopaciRemeteaMare_8 = format_CopaciRemeteaMare_8.readFeatures(json_CopaciRemeteaMare_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciRemeteaMare_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciRemeteaMare_8.addFeatures(features_CopaciRemeteaMare_8);
var lyr_CopaciRemeteaMare_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciRemeteaMare_8, 
                style: style_CopaciRemeteaMare_8,
                popuplayertitle: 'Copaci Remetea Mare',
                interactive: true,
                title: '<img src="styles/legend/CopaciRemeteaMare_8.png" /> Copaci Remetea Mare'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LimiteIntravilan_1.setVisible(false);lyr_SVCimitir_2.setVisible(true);lyr_SVZoneVerziSpecializate_3.setVisible(true);lyr_SVParcurisiGradini_4.setVisible(true);lyr_SVDAliniamentInfrastructura_5.setVisible(true);lyr_SVAliniamentInfrastructura_6.setVisible(true);lyr_CopaciIanova_7.setVisible(true);lyr_CopaciRemeteaMare_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LimiteIntravilan_1,lyr_SVCimitir_2,lyr_SVZoneVerziSpecializate_3,lyr_SVParcurisiGradini_4,lyr_SVDAliniamentInfrastructura_5,lyr_SVAliniamentInfrastructura_6,lyr_CopaciIanova_7,lyr_CopaciRemeteaMare_8];
lyr_LimiteIntravilan_1.set('fieldAliases', {'fid': 'fid', });
lyr_SVCimitir_2.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVZoneVerziSpecializate_3.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVParcurisiGradini_4.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVDAliniamentInfrastructura_5.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVAliniamentInfrastructura_6.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_CopaciIanova_7.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciRemeteaMare_8.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_LimiteIntravilan_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_SVCimitir_2.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVZoneVerziSpecializate_3.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVParcurisiGradini_4.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVDAliniamentInfrastructura_5.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVAliniamentInfrastructura_6.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_CopaciIanova_7.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciRemeteaMare_8.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_LimiteIntravilan_1.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_SVCimitir_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVZoneVerziSpecializate_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVParcurisiGradini_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVDAliniamentInfrastructura_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVAliniamentInfrastructura_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_CopaciIanova_7.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciRemeteaMare_8.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciRemeteaMare_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});