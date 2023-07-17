---
title: '$setGuildDiscoverySplash'
description: '$setGuildDiscoverySplash wird das Entdeckungs-Banner der Gilde ändern.'
id: setGuildDiscoverySplash
---

`$setGuildDiscoverySplash` wird das Aufdeckungs-Banner einer Gilde ändern.

## Verwendung

```php
$setGuildDiscoverySplash[guildID?;URL;reason?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                           | Erforderlich |
| -------- | ---------- | ------------------------------------------------------ | ------------ |
| guildID? | ganze Zahl | Gilden-ID der Gilde.                                   | falsch       |
| URL      | string     | Neue Entdeckungs-Splash-Banner.                        | wahr         |
| warum?   | string     | Begründung, die im Audit-Log der Gilde angezeigt wird. | falsch       |

## Beispiel(e)

Dies wird das Banner der aktuellen Gilde ändern:

```javascript
bot.command({
    Name: 'setGuildDiscoverySplash',
    Code: `
  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```