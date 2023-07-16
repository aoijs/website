---
title: '$addObjectProperty'
description: '$addObjectProperty wird eine Eigenschaft zu einem existierenden Objekt hinzufügen.'
id: addObjectProperty
---

`$addObjectProperty` wird eine Eigenschaft zu einem existierenden Objekt hinzufügen.

## Verwendung

```php
$addObjectProperty[name;value]
```

## Verwendung

| Feld | Typ    | Beschreibung          | Erforderlich |
| ---- | ------ | --------------------- |:------------:|
| Name | string | Name der Eigenschaft. |     wahr     |
| wert | string | Wert der Eigenschaft. |     wahr     |

## Beispiel(e)

Dies gibt `Ferel` von der `Leref` Eigenschaft zurück:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```
