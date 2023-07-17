---
title: $findNumbers
description: '$findNumbers wird versuchen, alle Zahlen in einer Nachricht eines gegebenen Textes zurückzugeben.'
id: findNumbers
---

`$findNumbers` wird versuchen, alle Zahlen in einer Nachricht eines gegebenen Textes zurückzugeben.

## Verwendung

```php
$findNumbers[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                        | Erforderlich |
| ---- | ------ | ----------------------------------- |:------------:|
| text | string | Text, wo Sie Zahlen finden möchten. |     wahr     |

## Beispiel(e)

Dies gibt `25` zurück und entfernt `Hallo, ich bin [..] Jahre alt` vom angegebenen Text:

```javascript
bot.command({
    name: 'findNumbers',
    code: `
  $findNumbers[Hello, I'm 25 years old]
  `
});
```
