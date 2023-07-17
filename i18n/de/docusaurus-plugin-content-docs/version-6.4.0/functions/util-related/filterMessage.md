---
title: $filterMessage
description: '$filterMessage filtert bestimmte Zeichen aus dem angegebenen Text.'
id: filterMessage
---

`$filterMessage` filtert bestimmte Zeichen aus dem angegebenen Text.

## Verwendung

```php
$filterMessage[text;...letters]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                           | Erforderlich |
| ---------- | ------ | ------------------------------------------------------ |:------------:|
| text       | string | Texteingabe der gefiltert wird.                        |     wahr     |
| buchstaben | string | Inhalte, die Sie aus dem `Text` herausfiltern möchten. |     wahr     |

## Beispiel(e)

Dies entfernt die `N` von `Nie` und gibt `jemals` zurück:

```javascript
bot.command({
    name: 'filterMessage',
    code: `
  $filterMessage[Never;N]
  `
});
```
