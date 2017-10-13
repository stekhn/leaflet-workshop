# Übungsblätter

*In den folgenden Beispielen sind Fehler versteckt. Kannst du sie finden?*

Diese JSON-Datei hat fünf Fehler. Welche?

```javascript
[
  {
    name: "Michael",
    age: "39",
    income: "52000"
  },
  {
    name: "Sandra",
    age: "24",
    income: "32000"
  }
  {
    nane: "Jakob",
    age: "32",
    income: "46000"
  },
]
```

Wieso kann D3 dieses CSV nicht laden?

```csv
name;age;income
Michael;39;52000
Sandra;23;32000
Jakob;32;46000
```

Was ist in diesem Beispiel falsch?

```javascript
d3.select('body')
  .append('h1')
    .text('Überschrift');
  .append('p')
    .text('Ein kurzer Text.');
  .append('p')
    .text('Ein noch ein kurzer Text.');
```

Wieso werden keine Werte im Paragraphen angezeigt?

```javascript
var data = [{value: 5}, {value: 2}, {value: 10}, {value: 25}, {value: 40}]
]

d3.select('body').selectAll('p')
    .data(data)
    .enter()
  .append('p')
    .text(d.value);
```

Warum werden in diesem Beispiel keine Paragraphen ausgegeben?

```javascript
var data = {a: 5, b: 2, c: 10, d: 25, e: 40};

d3.select('body').selectAll('p')
    .data(data)
    .enter()
  .append('p')
    .text(function (d) {
      return 'Wert: ' + d;
    });
```

Warum sieht mein Kreis so komisch aus?

```
d3.select('body')
  .append('svg')
    .attr('width', 600)
    .attr('height', 160)
  .append('circle')
    .attr('x', 305)
    .attr('y', 80)
    .attr('r', 75)
    .attr('fill', 'lime');
```

Wieso gibt `console.log(data)` keine Daten aus?

```javascript
var data;

d3.csv('data.csv', function (csv) {
  data = csv;
});

console.log(data);
```

Warum passiert in diesem Beispiel gar nichts?

```html
<!DOCTYPE html>

<head>
  <title>Meine tolle Grafik</title>

  <script src="https://d3js.org/d3.v4.min.js"></script>

  <script>
    d3.select('#container')
      .append('h1')
        .text('Überschrift');
  </script>
</head>

<body>
  <div id="container"></div>
</body>
```


