---
title: '$humanizeMs'
description: '$humanizeMs wandelt MS in menschenlesbare Zeit um.'
id: humanizeMs
---

`$humanizeMs` wandelt MS in menschenlesbare Zeit um.

## Verwendung

```php
$humanizeMs[time]
```

## Verwendung

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| Zeit | anzahl | Zeit in MS.  |     wahr     |

## Beispiel(e)

Dies liefert `6mon 1w 4d 16h 34m` konvertiert von `16782516189` MS:

```javascript
bot.command({
    name: "humanizeMs",
    code: `
    $humanizeMs[16782516189]
    `
});
```