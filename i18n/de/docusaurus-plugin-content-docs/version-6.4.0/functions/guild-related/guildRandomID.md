---
title: $guildRandomID
description: '$guildRandomID wird eine zufällige Gilden-ID zurückgeben.'
id: guildRandomID
---

`$guildRandomID` wird eine zufällige Gilden-ID zurückgeben.

## Verwendung

```php
$guildRandomID
```

## Beispiel(e)

Dies wird eine zufällige Gilde zurückgeben, wenn dein Bot Mitglied der Gilde ist:

```javascript
bot.command({
    name: 'guildRandomID',
    code: `
  $guildRandomID
  `
});
```
