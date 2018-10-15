# Hausaufgabe

Hier ein paar kleine Aufgaben, um eure Programmierkenntnisse wieder wachzurufen und euch auf die wichtigsten Programmpunkte des kommenden Leaflet-Seminars vorzubereiten. Viel Spaß!

## Javascript

JavaScript ist die wichtige Grundlage unseres Seminars. Um so wichtiger ist es, sich mit den verschiedenen Arten von Listen in Javascript auseinanderzusetzen: [Arrays](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array) `[]` und [Objekte](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object) `{}`. 

### 1. Arrays

Wir haben ein Array mit verschiedenen Namen. Deine Aufgabe ist es, eine Funktion zu schreiben, welche alle Personen einzeln begrüßt.

```javascript
var names = ['Philipp', 'Andrea', 'Sophie'];

var sayHello = function (array) {
  // dein Code
};

sayHello(names); // => Hallo Philipp. Hallo Andrea. Hallo Sophie.
```

**Lösung**

```javascript
var names = ['Philipp', 'Andrea', 'Sophie'];

var sayHello = function (array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Hallo ' + names[i]+ '.');
  }
};

sayHello(names);
```

### 2. Objekte

Objekte sind neben Arrays eine andere Möglichkeit digitale Listen zu führen. In diesem Beispiel wollen wir Philipps Alter wissen:

```javascript
var person = { name: 'Philipp', age: 31 };

var getAge = function (object) {
  // dein Code
};

getAge(person); // => Philipp ist 31 Jahre alt.
```

**Lösung**

```javascript
var names = ['Philipp', 'Andrea', 'Sophie'];

var sayHello = function (array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Hallo ' + names[i]+ '.');
  }
};

sayHello(names);
```

Objekte können auch verschachtelt werden. Um auf ein bestimmtes Unterobjekt zuzugreifen, gibt es zwei Möglichkeiten: [Punkt oder Klammernotion](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors). In diesem Beispiel können wir beide anwenden. Wir wollen wissen, wo Philipp überall arbeitet:

```javascript
var person = {
  name: 'Philipp',
  locations: {
    home: 'Stuttgart',
    work: {
      'main job': 'Esslingen',
      freelance: 'Düsseldorf'
    }
  }
};

var getLocations = function (object) {
  // dein Code
};

getLocations(person); // => Philipp wohnt in Stuttgart, arbeitet hauptberuflich in Esslingen und als Freelancer in Düsseldorf.
```

**Lösung**

```javascript
var person = {
  name: 'Philipp',
  locations: {
    home: 'Stuttgart',
    work: {
      'main job': 'Esslingen',
      freelance: 'Düsseldorf'
    }
  }
};

var getLocations = function (object) {

  console.log(
    object.name + ' wohnt in ' + object.locations.home + ', arbeitet haupberuflich in ' +
    object.locations.work['main job'] + ' und als Freelancer in ' + object.locations.work.freelance
  );
};

getLocations(person); // => Philipp wohnt in Stuttgart, arbeitet hauptberuflich in Esslingen und als Freelancer in Düsseldorf.
```

### 3. Object Arrays

Arrays bestehen nicht immer nur aus Buchstaben oder Zahlen, sondern manchmal auch aus mehreren Objekten. Das ist praktisch, um zum Beispiel Personen mit mehreren Eigenschaften zu speichern. Schaffst du es, alle Personen mit ihrem Namen und Herkunftsort zu begrüßen?

```javascript
var persons = [
  { name: 'Philipp', city: 'Stuttgart' },
  { name: 'Andrea', city: 'Hamburg' },
  { name: 'Sophie', city: 'Dresden' }
];

var sayHelloCity = function (objectArray) {
  // dein Code
};

sayHelloCity(persons); // => Hallo Philipp aus Stuttgart. Hallo Andrea aus Hamburg. Hallo Sophie aus Dresden.
```

**Lösung**

```javascript
var persons = [
  { name: 'Philipp', city: 'Stuttgart' },
  { name: 'Andrea', city: 'Hamburg' },
  { name: 'Sophie', city: 'Dresden' }
];

var sayHelloCity = function (objectArray) {

  var string = '';

  for (var i in objectArray) {
    string += 'Hallo ' + objectArray[i].name + ' aus ' +  objectArray[i].city + '. ';
  }

  console.log(string);
};

sayHelloCity(persons);
```

### 4. Filter

Manchmal möchte man aus einem Object Array nur ein bestimmtes Objekt haben. Hier geht es darum, für eine bestimmte Person (nach Namen) das Alter zu herauszufinden. 

```javascript
var persons = [
  { name: 'Philipp', city: 'Stuttgart' },
  { name: 'Andrea', city: 'Hamburg' },
  { name: 'Sophie', city: 'Dresden' }
];

var getCity = function (objectArray) {
  // dein Code
};

getCity('Philipp'); // => Philipp kommt aus Stuttgart.
```

**Lösung**

```javascript
var persons = [
  { name: 'Philipp', city: 'Stuttgart' },
  { name: 'Andrea', city: 'Hamburg' },
  { name: 'Sophie', city: 'Dresden' }
];

var getCity = function (objectArray, name) {

  var person = objectArray.filter(function (obj) {

    return obj.name === name;
  });

  console.log(person.name + ' kommt aus ' + person.city + '.');
};

getCity(persons, 'Philipp'); // => Philipp kommt aus Stuttgart.
```

Wenn du Probleme hast die Lösung zu finden, google doch einfach mal nach _javascript find object in object array_. Vermutlich findest du die Lösung auf der Seite [Stackoverflow](https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property).

### 5. Bonusübung

Und hier noch ein kleine Programmierübung aus der Kartenwelt. Wir wollen die Landkreise auf einer Karte entsprechend der jeweiligen Arbeitslosenquote einfärben. Je höher die Arbeitlosenquote ist, desto dunkelblauer die Färbung. Schaffst du es, für jeden Wert zwischen 0 (minimale Arbeitslosenquote) und 20 (maximale Arbeitslosenquote), die richtige Farbe zu finden?

```javascript
// Farbpalett von Hellblau bis Dunkelblau in Hexadezimaldarstellung
var colors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];

var getColor = function (value) {
  // dein Code
};

getColor(3); // => #f1eef6
getColor(9); // => #74a9cf
getColor(10); // => #74a9cf
getColor(14); // => #2b8cbe
getColor(18); // => #045a8d
```

Diese Aufgabe lässt sich mit [if-Bedingungen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/if...else), [switch-Anweisungen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/switch) und auf hundert anderen Weisen lösen.

**Einfache Lösung**

```javascript
// Farbpalett von Hellblau bis Dunkelblau in Hexadezimaldarstellung
var colors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];

var getColor = function (value) {

  switch (true) {
    case (value >= 16): return colors[4];
    case (value >= 12): return colors[3];
    case (value >= 8): return colors[2];
    case (value >= 4): return colors[1];
    case (value >= 0): return colors[0];
    default: return '#ff0000';
  }
};

getColor(3); // => #f1eef6
getColor(9); // => #74a9cf
getColor(10); // => #74a9cf
getColor(14); // => #2b8cbe
getColor(18); // => #045a8d
```

**Universelle Lösung** 

```javascript
// Farbpalett von Hellblau bis Dunkelblau in Hexadezimaldarstellung
var colors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];

var quantizeScale = function (arr, min, max) {

  var steps = colors.length;
  var increment = (max - min) / steps;
  var bins = Array.apply(undefined, Array(steps)).map(function (bin, index) {
    return (index * increment) + min;
  });

  return function (value) {
    for (var i = 0; i < bins.length; i++) {
      if (value <= bins[i]) {
        return colors[i];
      }
    }
    return colors[colors.length - 1];
  };
};

var colors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];
var getColor = quantizeScale(colors, 5, 20);

getColor(3); // => #f1eef6
getColor(9); // => #74a9cf
getColor(10); // => #74a9cf
getColor(14); // => #2b8cbe
getColor(18); // => #045a8d
```

### Vielen Dank für deine Mühe und bis zum Seminar 🍻
