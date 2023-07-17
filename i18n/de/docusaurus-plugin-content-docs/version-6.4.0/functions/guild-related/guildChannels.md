---
title: $guildChannels
description: '$guildChannels wird alle Kanäle einer bestimmten Gilde zurückgeben.'
id: guildChannels
---

`$guildChannels` wird alle Kanäle einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$guildChannels[guildID?;option?;sep?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                                      | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde.                                                                                                                 |    falsch    |
| option?  | string     | Die Option, wie man den Kanal <br /> 1 zurückgibt. **Name** (Standard) <br /> 2. **id** <br /> 3. **Erwähnung** |    falsch    |
| sep?     | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                                                             |    falsch    |

## Beispiel(e)

Dies gibt alle Kanäle deiner Gilde zurück:

```javascript
bot.command({
    name: 'guildChannels',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
