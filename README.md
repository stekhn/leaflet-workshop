# Leaflet-Workshop

Einführung in die Karten-Bibliothek Leaflet mit praktischen Beispielen und Übungen.

## Was ist Leaflet

Leaflet ist eine JavaScript-Bibliothek zum Erstellen von Kartenanwendungen und -visualisierungen. Leaflet baut auf modernen Webtechnologien wie HTML5 und CSS3 auf und unterstützt die meisten Mobil- und Desktop-Plattformen. Die Bibliothek wird unter anderem von großen Webseiten wie Github, Pinterest oder Flickr verwendet.

Mithilfe von Leaflet können Entwickler ohne große Erfahrung mit Geoinformationssystemen einfach Webkarten mit verschiedenen Overlays darstellen. Leaflet kann GeoJSON-Dateien laden, formatieren und interaktive Kartenebenen erstellen. Diese Ebenen können zum Beispiel Flächen oder Marker mit Popups sein.

- Offizielle Webseite: http://leafletjs.com
- Dokumentation: http://leafletjs.com/reference-1.2.0.html
- Tutorials: http://leafletjs.com/examples.html

## Installation

Um die Beispiele verwenden und verändern zu können, empfiehlt es sich [Node.js](https://nodejs.org/en/) zu installieren. Node.js ist eine JavaScript-Umgebung für die Kommandozeile und für alle Betriebssystem verfügbar. In diesem Workshop werden wir Node.js verwenden, um eine kleinen Webserver für Entwicklungszwecke aufzusetzen. 

1. [Node.js](https://nodejs.org/en/) installieren. Wenn alles geklappt hat, sollte man in der Kommandozeile den Befehl `node --version` aufrufen können.
2. Erforderliche Pakete mit dem Node.js-Paketmanager [NPM](https://www.npmjs.com/) installieren. Dazu in das Hauptverzeichnis dieses Projekts gehen und `npm install` ausführen. Welche Pakete Node.js installieren soll, ist in der Datei `package.json` festgelegt.
3. Webserver starten mit `npm start`. Jetzt sollte ein Browserfenster unter der Addresse http://127.0.0.1:8080/ aufgehen. Die Beispiele zu diesem Workshop finden sich im Ordner `examples`.

Optional:
4. Einen sogenannten *Linter* installieren, der JavaScript-Fehler schon im Code-Editor anzeigt. Für diesen Workshop verwenden wir ESLint. Für Sublime Text muss man nur noch die Erweiterungen [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter) und [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint) installieren. Am einfachsten geht das mit dem Sublime-Paketmanager [Packagecontrol](https://packagecontrol.io/installation).

## Leaflet einbinden ([Demo](https://stekhn.github.io/leaflet-workshop/examples/1-base-map.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/1-base-map.html))

Man kann Leaflet entweder von einer externen Seite oder lokal einbinden.

Einbinden von einem CDN (Content Delivery Network), welches auf die schnelle Bereitstellung von Paketen optimiert ist:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ==" crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js" integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log==" crossorigin=""></script>
```

Einbinden einer lokalen Version von Leaflet:

```html
<link rel="stylesheet" href="node_modules/leaflet/dist/leaflet.css" />

<script src="../node_modules/leaflet/dist/leaflet.js"></script>
```

In diesem Fall wurde die Leaflet mithilfe des Paketmanagers NPM installiert `npm install leaflet`. Man könnte aber Leaflet auch einfach herunterladen.

Üblicherweise bindet man Bibliotheken im `<head></head>` Bereich einer Website ein. So stellt man sicher, dass die durch die Bibliothek bereitgestellten Funktionen von Anfang verfügbar sind.

## Basiskarte einbinden

Die Grundlage für die meisten Karten-Anwendungen ist eine Basiskarten. Das kann beispielsweise eine klassische Straßenkarte sein, eine Satelittenkarte oder etwa eine topographische Karte. Diese Basiskarte ermöglicht dem Benutzer eine grobe geografische Orientierung. Sehr häufig verwendet wird die kostenlose OpenStreetMap.

```javascript
var map = L.map('map').setView([48.13, 11.57], 11);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```

Die genauen Benutzungsbedingungen für die OpenStreetMap-Karten kann man [hier](https://operations.osmfoundation.org/policies/tiles/) nachlesen. Die OpenStreetMap-Karte ist jedoch recht unübersichtlich, da sie versucht so viele Informationen wie möglich darzustellen. Das kann für viele Kartenvisulisierungen eher hinderlich sein. Daher kann es sinnvoll sein, eine andere, sehr reduzierte, Basiskarte einzubinden, welche nur die wichtigsten Informationen darstellt.  

Eine Übersicht über die verschiedenen kostenlosen Basiskarten gibt es [hier](https://leaflet-extras.github.io/leaflet-providers/preview/index.html).

```javascript
var map = L.map('map').setView([48.13, 11.57], 11);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(map);
```

Wenn man großen Traffic auf seiner Webseite erwartet und das Projekt eine kommerziellen Zweck verfolgt, sollte man überlegen zu einem Bezahlanbieter wie [Mapbox](https://www.mapbox.com/), [MapQuest](https://developer.mapquest.com/plans) oder [HERE](https://developer.here.com/plans) zu wechseln. Außerdem bieten diese Anbieter den Vorteil eigene Kartendesign erstellen zu können.

## Marker erstellen ([Demo](https://stekhn.github.io/leaflet-workshop/examples/2-markers.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/2-markers.html))

In Leaflet kann man relativ einfach Marker anlegen, die bestimmte Orte markieren. Das können zum Beispiel Kindergärten, Notrufsäulen aber auch Drogenfunde oder Radundfälle sein. Um diese Orte sinnvoll zu markieren, gibt es die Möglichkeit eigene Icon-Grafiken zu definieren:  

```javascript
var icon = new L.Icon({
  iconSize: [24, 24],     // Größe des Icons
  iconAnchor: [12, 12],   // Positionierung des Icons
  shadowSize: [30,15],    // Größe des Schatten (optional)
  popupAnchor:  [0, -18], // Position des Popups
  iconUrl: './defibrillator.png'  // Pfad zur Icon-Grafik
});
```

Ein einzelner Marker lässt sich über die Funktion `L.marker()` hinzufügen:

```javascript
L.marker([48.13, 11.57], {icon: icon}).addTo(map);
```

In den meisten Fällen ist es jedoch praktischer Marker aus einer GeoJSON-Dateien hinzufügen:

```javascript
L.geoJson(geojson, {
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng, {
      icon: icon
    });
  },
}).addTo(map);

```

Ein ausführliches Beispiel findet sich in den [Leaflet-Beispielen](http://leafletjs.com/examples/custom-icons/).

## Geodaten finden

Ein häufiges Problem ist das Beschaffen von aktuellen und hochwertigen Geodaten. Geodaten können beispielsweise Flächendaten sein (Bundesländer, Gemeinden, Wahlkreise, Überschwemmungsgebiete), Punkte (Kindergärten, Notrufsäulen, Drogenfunde) oder Linien (Flüsse, Autobahnen).

Typische Datenquellen sind:
- Behörden und Ämter: [Bundesamt für Kartografie](https://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_akt_zeile=5&gdz_anz_zeile=0&gdz_unt_zeile=0&gdz_user_id=0), Landesvermessungsämter, [Bundeswahlleiter](https://www.bundeswahlleiter.de/bundestagswahlen/2017/wahlkreiseinteilung/downloads.html)
- [Eurostat](http://ec.europa.eu/eurostat/de/web/gisco), EU-Daten
- [Geoportal.de](http://www.geoportal.de/DE/Geoportal/geoportal.html?lang=de), Suchmaschine für amtliche Geodaten
- OpenStreetMap-Daten über [OverPass Turbo](https://overpass-turbo.eu/) oder das QGIS-Plugin [Quick OSM](https://wiki.openstreetmap.org/wiki/QGIS_OSM_Plugin) 
- [OpenDataLab](http://opendatalab.de/projects/geojson-utilities/) (Bundesländer, Landkreise und Gemeinden)
- [Natural Earth](http://www.naturalearthdata.com/downloads/), Welt- und Kontinentkarten
- [Geofabrik](https://www.geofabrik.de/data/), kommerzieller Anbieter

Außerdem gibt es auf Wikipedia [diese Liste der GIS-Datenquellen](https://en.wikipedia.org/wiki/List_of_GIS_data_sources).

## Overpass Turbo verwenden

[OverPass Turbo](https://overpass-turbo.eu/) ist eine Webseite (und API), welche dabei hilft die Datenschätze der Open Street Map zu heben und nutzbar zu machen. Am einfachsten lassen sich Suchanfragen mit dem *Wizard* erstellen. So lassen sich einfache Anfragen in die deutlich kompliziertere Anfragesprache *Overpass-QL* übersetzt.

**Beispiel:** Stadtbezirke für München anzeigen:

```
boundary=administrative and admin_level=9 in München
```

Mit einem Klick auf *Abfrage erstellen und ausführen* wird die Suchanfrage erstellt und die Daten (sofern vorhanden) auf der Karte angezeigt:

```
[out:json][timeout:25];

{{geocodeArea:München}}->.searchArea;

(
  node["boundary"="administrative"]["admin_level"="9"](area.searchArea);
  way["boundary"="administrative"]["admin_level"="9"](area.searchArea);
  relation["boundary"="administrative"]["admin_level"="9"](area.searchArea);
);

out body;
>;
out skel qt;
```

Die automatisch generierte Suchanfrage im *Overpass-QL-Format* kann später verändert werden. Wenn die Suchanfrage etwa wegen eins *Timeouts* scheitert, kann man die Zeit, die eine Suchanfrage maximal dauern darf, hochsetzen. Außerdem wollen wir in unserem Beispiel nur die Flächen der Verwaltungsgebiete bekommen. Daher können wir die Teile der Anfragen entfernen, welche Geometrie vom Typ `point` und `way` zurückgeben: 

```
// Time-out hochsetzen
[out:json][timeout:300];

{{geocodeArea:München}}->.searchArea;

( 
  // Nur Elemente vom Typ "Relation" abfragen.
  relation["boundary"="administrative"]["admin_level"="9"](area.searchArea);
);

out body;
>;
out skel qt;
```

Wenn die Abfragen erfolgreich war, kann man die Dateien mit einem Klick auf *Exportieren* als GeoJSON oder KML herunterladen. Außerdem kann man Suchanfragen speichern oder per Link teilen.

Ein Überblick der verschiedenen Daten in Open Street Map gibt es [hier im OSM-Wiki](https://wiki.openstreetmap.org/wiki/DE:Map_Features). Weitere Beispiel für nützliche Anfrage-Techniken an die Overpass-Turbo-API finden sich [hier im OSM-Wiki](https://wiki.openstreetmap.org/wiki/DE:Overpass_API/Beispielsammlung).

## GeoJSON laden ([Demo](https://stekhn.github.io/leaflet-workshop/examples/3-choropleth.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/3-choropleth.html))

GeoJSON ist ein offenes Format um geografische Daten zu repräsentieren. Ein Beispiel mit Feature, in diesem Fall ein Punk (*Point*), der die Eigenschaften (*Properties*) `name` und `value` hat.

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
      },
      "properties": {
        "name": "Mein Punkt",
        "value": 10
      }
    }
  ]
}
```

Leider bietet Leaflet keine eigene Funktion an, um externe GeoJSON-Datei zu laden. Man braucht daher eine kleine Hilfsfunktion, welche die Daten laden kann.

```javascript
function getJson(path, callback) {
  var httpRequest = new XMLHttpRequest();

  httpRequest.overrideMimeType('application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        if (callback) callback(JSON.parse(httpRequest.responseText));
      }
    }
  };

  httpRequest.open('GET', path);
  httpRequest.send();
}
```

Das Laden der Daten erfolgt asynchron und erfordert daher ein *Callback*. Ein Beispiel:

```javascript
getJson('./countries.geojson', drawMap);

function drawMap(geojson) {

  // Hier kann man etwas mit den Daten tun.
}
```

Weitere Beispiel wie man in Leaflet mit Geo-JSON arbeiten kann, finden sich in den [Leaflet-Beispielen](http://leafletjs.com/examples/geojson/).

## Thematische Karten erstellen ([Demo](https://stekhn.github.io/leaflet-workshop/examples/3-choropleth.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/3-choropleth.html))

Bei thematischen Karten oder sogenannten Choroplethen-Karten geht es darum Flächen, zum Beispiel Bundesländer, entsprechend eines bestimmten Merkmals einzufärben. Im folgenden Beispiel erstellen wir die Flächen aus einer GeoJSON-Datei. Die Farbe der jeweiligen Fläche wird aus dem Wert `feature.properties.value` mithilfe der Funktion `getColor()` definiert:

```javascript
L.geoJson(geojson, {
  style: function (feature) {
    return {
      fillColor: getColor(feature.properties.value),
      weight: 2,
      opacity: 1,
      color: 'white',
      fillOpacity: 1
    };
  }
}).addTo(map);

// Sequentielle Farbskala von 0 bis 100
function getColor(value) {
  switch (true) {
    case value <= 25:
      return '#eff3ff';
    case value <= 50:
      return '#bdd7e7';
    case value <= 75:
      return '#6baed6';
    case value <= 100:
      return '#2171b5';
  }
}
```

Ein praktisches Online-Werkzeug zum erstellen von gängigen Farbpaletten ist [ColorBrewer](http://colorbrewer2.org/). Wie man ein richtiges Farbschema für seine Daten findet, wird [hier](https://tilemill-project.github.io/tilemill/docs/guides/tips-for-color/) gut erklärt.

Ein ausführliches Beispiel findet sich in den [Leaflet-Beispielen](http://leafletjs.com/examples/choropleth/).

## Legende ([Demo](https://stekhn.github.io/leaflet-workshop/examples/3-choropleth.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/3-choropleth.html))

```javascript
var legend = L.control({position: 'bottomright'});
legend.onAdd = getLegend;
legend.addTo(map);

function getLegend () {
  return '<h3>Legende</h3>' +
    '<i style="background:#eff3ff"></i> 0 - 25<br>' +
    '<i style="background:#bdd7e7"></i> 25 - 50<br>' +
    '<i style="background:#6baed6"></i> 50 - 75<br>' +
    '<i style="background:#2171b5"></i> 75 - 100';
}
```

Alternativ kann man die Legende auch unter Zuhilfenahme der Funktion `getColor()` aus dem vorherigen Beispiel programmatisch generieren:

```javascript
function getLegend () {
  var div = L.DomUtil.create('div', 'info legend');
  var grades = [0, 25, 50, 75, 100];

  div.innerHTML += '<h3>Ausländeranteil</h3>';

  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + (grades[i + 1] ? ' % - ' + grades[i + 1] + ' %<br>' : ' % +');
  }

  return div;
}
```

Ein ausführliches Beispiel findet sich in den [Leaflet-Beispielen](http://leafletjs.com/examples/choropleth/).

## Popups ([Demo](https://stekhn.github.io/leaflet-workshop/examples/4-popups.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/4-popups.html))

Um zusätzliche Daten anzuzeigen, kann man für die einzelnen Elemente der Karte ein *Popup* anzeigen. Dazu müssen wir festlegen, welche Art der Interaktion das Popup öffnet ([Klick, Doppelklick, Hover](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)). In diesem Beispiel öffnet sich das Popup, wenn der Benutzer mit der Maus über eines der Kartenelement fährt (hover). Es schließt sich wieder, wenn der Benutzer mit dem Mauszeiger das Kartenelement verlässt.

```javascript
var popup = L.popup({ closeButton: false });

var districts = L.geoJson(geojson, {
  // style: function (feature) { return { ... } },
  onEachFeature: bindEvents
}).addTo(map);

function bindEvents(feature, layer) {
  layer.bindPopup(feature.properties['@id']);
  layer.on('mouseover', highlightFeature);
  layer.on('mouseout', resetHighlight);
}
```

Die Funktionen `highlightFeature` und `resetHighlight` bestimmen, was passiert, wenn der Benutzer mit der Karte interagiert:

```javascript
function highlightFeature(e) {
  var layer = e.target;

  // Position und Inhalt des Popups festlegen
  popup
    .setLatLng(getLatLong(layer))
    .setContent(getPopup(layer, data))
    .openOn(map);

  // Kartenelement grafisch hervorheben
  layer.setStyle({
    fillOpacity: 1,
    weight: 3
  });
}

function resetHighlight(e) {
  map.closePopup();
  districts.resetStyle(e.target);
}
```

Der Inhalt des Popups ist HTML, welches wir aus den verschiedenen Daten des Kartenelements zusammenbauen:

```javascript
function getPopup(layer, data) {
  var props = layer.feature.properties;
  var datum = getData(data, props.name);
  var html = '';
  html += '<h3>' + props.name.split('-').join(', ') + '</h3>';
  html += '<p>Ausländeranteil: ' + datum['Ausländeranteil'] + ' %</p>';
  html += '<p>Einwohnerdichte: ' + datum['Einwohnerdichte'] + ' Einwohner/km²</p>';
  html += '<p>Fläche: ' + datum['Fläche'] + ' km²</p>';
  return html;
}
```

Um das Popup an der richtigen Stelle zu öffnen, brauchen wir eine Hilfsfunktion `getLatLong`. Diese verwendet den geografischen Rahmen (*bounding box*), um den Punkt oberhalb der Mitte des Kartenelement zu berechnen. Das Ergebnis ist ein Koordinatenpaar, zum Beispiel `[48.2481162, 11.52133505]`:

```javascript
function getLatLong(feature) {
  return [
    feature.getBounds().getNorth(),
    feature.getBounds().getWest() +
      (feature.getBounds().getEast() -
      feature.getBounds().getWest()) / 2
  ];
}
```

Ein ausführliche Beschreibung der Popup-Funktion findet sich in der [Leaflet-Dokumentation](http://leafletjs.com/reference-1.2.0.html#popup).

## Kartenebenen umschalten ([Demo](https://stekhn.github.io/leaflet-workshop/examples/5-switch-layers.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/5-switch-layers.html))

In diesem Beispiel kann man zwischen zwei Basiskarten umschalten und zwei *Feature Layer* an- oder abwählen.

```javascript
var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'ESRI and the GIS User Community'
});

var cityLayer = L.geoJson(geojson, {
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng);
  }
}).addTo(map);

var stateLayer = L.geoJson(geojson, {
  style: getStyle
}).addTo(map);


L.control.layers(
  {
    'Straßenkarte': streetLayer,
    'Satelittenkarte': satLayer
  },
  {
    'Landeshauptstädte': cityLayer,
    'Bundesländer': stateLayer
  },
  {
    position:'topleft'
  }
).addTo(map);

```

Ein ausführliches Beispiel findet sich in den [Leaflet-Beispielen](http://leafletjs.com/examples/layers-control/).

## Zoom-Stufen ([Demo](https://stekhn.github.io/leaflet-workshop/examples/4-popups.html), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/4-popups.html))

Manchmal kann notwenig sein, den Zoom in einer Karte zu beschränken oder auf bestimmte Anwendungsfälle hin anzupassen. Dafür bietet Leaflet mehrere Optionen beim Initialisieren der Karte.

Zoom auf minimal 5 und maximal 14 beschränken:

```javascript
var map = L.map('map', {
  minZoom: 5,
  maxZoom: 13
});
```

Außerdem kann man freies Zoomen erlauben, ohne dass die Karte einrastet. Das ist vor allem für mobile Anwendungen praktisch (*pinch to zoom*);

```javascript
var map = L.map('map', {
  zoomDelta: 0.1,
  zoomSnap: 0
});
```

Auch nach dem man eine Karte erstellt hat, kann die Position und die Zoomstufe verändert werden:

```javascript
map.setView([35.652832, 139.839478], 10);
```

Besonders praktisch ist diese Funktion, um beispielsweise bei einem Klick auf eine Kartenelement auf diese Kartenelement zu zoomen:

```javascript
var map = L.map('map').setView([48.13, 11.57], 11);

var districts = L.geoJson(geojson, {
  // style: function (feature) { return { ... } },
  onEachFeature: function (feature, layer) {
    layer.on('click', zoomToFeature);
  }
}).addTo(map);

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds(), {
    maxZoom: 13
  });
}
```

Ein ausführliches Beispiel findet sich in den [Leaflet-Beispielen](http://leafletjs.com/examples/zoom-levels/).

## Plugins ([Demo](https://stekhn.github.io/leaflet-workshop/examples/6-plugins), [Code](https://github.com/stekhn/leaflet-workshop/blob/master/examples/6-plugins.html))

Der Funktionsumfang von Leaflet kann durch viele verschiedene Plugin erweitert werden. Dieses Beispiel verwendet das Plugin [Locate](https://github.com/domoritz/leaflet-locatecontrol). Damit kann der Benutzer seinen [Standort lokalisieren](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), was praktisch für personalisierte Kartenanwendungen ist.

Wie Leaflet auch, müssen die Plugins im `<head>`-Bereich einer Seite eingebunden werden. Wichtig ist, dass Plugins immer **nach** dem Leaflet-Skript oder -Stylesheet eingebunden werden:

```html
<head>

  <title>Meine Karte</title>

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css">
  <link rel="stylesheet" href="https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet.locatecontrol@0.63.0/dist/L.Control.Locate.min.css">

  <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
  <script src="https://unpkg.com/leaflet.locatecontrol@0.63.0/dist/L.Control.Locate.min.js"></script>
</head>
```

Das Einbinden der Locate-Funktion in den eigenen Code ist einfach:

```javascript
L.control.locate().addTo(map);
```

Eine Liste der verfügbaren Plugins findet sich auf der [Leaflet-Seite](https://leafletjs.com/plugins.html).

## Praktische Tools

- [Leaflet Providers](https://leaflet-extras.github.io/leaflet-providers/preview/index.html): Übersicht der verfügbaren Grundlagenkarten
- [Mapshaper](http://mapshaper.org/): Geodaten vereinfachen
- [GeoJSON.io](http://geojson.io/): Geodaten online anschauen und bearbeiten
- [Overpass Turbo](https://overpass-turbo.eu/): Daten aus der Open Street Map herunterladen
- [Color Brewer](http://colorbrewer2.org/): Farbskalen für Karten und Diagramme
- [CSV2JSON](https://www.csvjson.com/csv2json): Tabellen in JSON umwandeln

## Einbetten

Das Einbetten von Leaflet-Karten funktioniert am besten mit einem iFrame:

```html
<iframe style="width: 100%; height: 360px; border: 0;" width="100%" height="100%" frameborder="0" src="http://leafletjs.com/examples/mobile/example.html"></iframe>
```

Das funktioniert aber nur dann, wenn sich bei Größenänderung die Höhe nicht verändert. Andernfalls kann es sein, dass Teile der Grafik abgeschnitten werden oder weiße Lücken entstehen.

Für das Einbetten von Grafiken mit variabler Höhe empfiehlt sich die JavaScript-Bibliothek [pym.js](http://blog.apps.npr.org/pym.js/). 
