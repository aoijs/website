---
title: $guildNames
description: '$guildNames wird die Anleitungsnamen Ihres Bots zurückgeben.'
id: guildNames
---

`$guildNames` gibt die Anleitungsnamen zurück, in denen sich Ihr Bot befindet.

## Verwendung

```php
$guildNames[sep?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                          | Erforderlich |
| ---- | ------ | ----------------------------------------------------- |:------------:|
| sep? | string | Separator um mehrere zurückgegebene Werte zu trennen. |    falsch    |

## Beispiel(e)

Dies wird die Namen der Gilden zurückgeben, in denen euer Bot sitzt, und durch Komma trennen:

```javascript
bot.command({
    name: 'guildNames',
    code: `
  $guildNames[, ]
  `
});
```
