---
title: '$setGuildIcon'
description: '$setGuildIcon wird das Gildensymbol ändern.'
id: setGuildIcon
---

`$setGuildIcon` wird das Gildensymbol ändern.

## Verwendung

```php
$setGuildIcon[URL;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                            | Erforderlich |
| -------- | ---------- | ------------------------------------------------------- |:------------:|
| URL      | string     | URL des neuen Gilden-Symbols.                           |     wahr     |
| guildID? | ganze Zahl | Die Gilden-ID, wo das Gildensymbol gesetzt werden soll. |    falsch    |

## Beispiel(e)

Dies ändert das Symbol der Gilde, in dem du den Befehl in deinem Avatar ausführst:

```javascript
bot.command({
    name: 'setGuildIcon',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```