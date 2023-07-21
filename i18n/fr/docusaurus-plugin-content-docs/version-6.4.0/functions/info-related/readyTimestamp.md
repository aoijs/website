---
title: '$readyTimestamp'
description: '$readyTimestamp retournera le timestamp de quand le bot a été mis en ligne.'
id: readyTimestamp
---

`$readyTimestamp` retournera le timestamp de quand le bot a été mis en ligne.

## Utilisation

```php
$readyTimestamp
```

## Exemple(s)

Cela retournera la dernière fois que votre bot a démarré :

```javascript
bot.command({
    name: 'readyTimestamp',
    code: `
  $readyTimestamp
  `
});
```
