// Google Mercator projection
// Used in combination with GoogleMercator layer type in OpenLayers
//+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs

Proj4js.defs["EPSG:900913"]= "+title=GoogleMercator +proj=longlat +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";

//instead of merc, which may means meters units, we replace it with proj=longlat