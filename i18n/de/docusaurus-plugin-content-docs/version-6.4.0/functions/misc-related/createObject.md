---
title: '$createObject'
description: '$createObject wird ein neues Objekt erstellen.'
id: createObject
---

`$createObject` wird ein neues Objekt erstellen.

## Verwendung

```php
$createObject[object]
```

## Verwendung

| Feld   | Typ    | Beschreibung | Erforderlich |
| ------ | ------ | ------------ |:------------:|
| objekt | objekt | Json-Objekt. |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```