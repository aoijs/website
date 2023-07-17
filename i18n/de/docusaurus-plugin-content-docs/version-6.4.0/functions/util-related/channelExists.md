---
title: $channelExists
description: '$channelExists wird prüfen, ob der angegebene Kanal existiert.'
id: channelExists
---

`$channelExists` wird überprüfen, ob der angegebene Kanal existiert.

## Verwendung

```php
$channelExists[channel]
```

## Verwendung

| Feld  | Typ              | Beschreibung             | Erforderlich |
| ----- | ---------------- | ------------------------ |:------------:|
| kanal | string, Ganzzahl | Kanal-ID oder Kanalname. |     wahr     |

## Beispiel(e)

Hiermit wird überprüft, ob ein Kanal mit dem Namen `General` existiert. Alternativ können Sie stattdessen die Kanal-ID verwenden:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```
