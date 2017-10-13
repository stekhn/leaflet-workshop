# Leaflet-Workshop

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

## Leaflet einbinden

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


```javascript
var map = L.map('map').setView([48.13, 11.57], 11);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```

## Kartenanbieter

```javascript
var map = L.map('map').setView([48.13, 11.57], 11);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(map);
```

Eine Übersicht über die veschiedenen kostenlosen Basiskarten gibt es [hier](https://leaflet-extras.github.io/leaflet-providers/preview/index.html). Die genauen Benutzungsbedingungen für die OpenStreetMap-Karten kann man [hier](https://operations.osmfoundation.org/policies/tiles/) nachlesen. Wenn man großen Traffic auf seiner Webseite erwartet und das Projekt eine kommerziellen Zweck verfolgt, sollte man überlegen zu einem Bezahlanbieter wie [Mapbox](https://www.mapbox.com/), [MapQuest](https://developer.mapquest.com/plans) oder [HERE](https://developer.here.com/plans) zu wechseln. Außdem bieten diese Anbieter den Vorteil eigene Kartendesign erstellen zu können.


## Marker erstellen

## Thematische Karten erstellen

## Legende

## Kartenebenen umschalten

## Zoom-Stufen

## Praktische Tools
https://leaflet-extras.github.io/leaflet-providers/preview/index.html
http://opendatalab.de/projects/geojson-utilities/
http://mapshaper.org/
http://geojson.io/
https://overpass-turbo.eu/
http://colorbrewer2.org/


## Einbetten
Das Einbetten von Leaflet-Karten funktioniert am besten mit einem HTML-iFrame:

```html
<iframe style="width: 100%; height: 360px; border: 0;" width="100%" height="100%" frameborder="0" src="http://leafletjs.com/examples/mobile/example.html"></iframe>
```

Das funktioniert aber nur dann, wenn sich bei Größenänderung die Höhe nicht verändert. Andernfalls kann es sein, dass Teile der Grafik abgeschnitten werden oder weiße Lücken entstehen.

Für das Einbetten von Grafiken mit variabler Höhe empfiehlt sich die JavaScript-Bibliothek [pym.js](http://blog.apps.npr.org/pym.js/). 
