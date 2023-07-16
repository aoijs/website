---
title: '$setGuildBanner'
description: '$setGuildBanner wird das Banner einer Gilde ändern.'
id: setGuildBanner
---

`$setGuildBanner` wird das Banner einer Gilde ändern.

## Verwendung

```php
$setGuildBanner[guildID?;URL;reason?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                           | Erforderlich |
| -------- | ---------- | ------------------------------------------------------ | ------------ |
| guildID? | ganze Zahl | Gilden-ID der Gilde.                                   | falsch       |
| URL      | string     | Neuer Gilden-Banner.                                   | wahr         |
| warum?   | string     | Begründung, die im Audit-Log der Gilde angezeigt wird. | falsch       |

## Beispiel(e)

Dies wird das Banner der aktuellen Gilde ändern:

```javascript
bot.command({
    Name: 'setGuildBanner',
    Code: `
  $setGuildBanner[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```
