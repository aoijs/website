---
title: '$guildCount'
description: '$guildCount wird die Anzahl der Gilden zurückgeben, wo sich dein Bot befindet.'
id: guildCount
---

`$guildCount` wird die Anzahl der Gilden zurückgeben, in denen sich dein Bot befindet.

## Verwendung

```php
$guildCount
```

## Beispiel(e)

Dies gibt die Anzahl der Gilden zurück, die dein Bot hat:

```javascript
bot.command({
    name: 'guildCount',
    code: `
  Ich bin in $guildCount Gilden!
  `
});
```
