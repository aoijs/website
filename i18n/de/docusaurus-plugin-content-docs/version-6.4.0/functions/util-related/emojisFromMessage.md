---
title: '$emojisFromMessage'
description: '$emojisFromMessage wird alle Emojis in einer Nachricht abrufen.'
id: emojisFromMessage
---

`$emojisFromMessage` gibt alle Emojis in einer gegebenen Nachricht zurück.

## Verwendung

```php
$emojisFromMessage
```

**Bitte beachte, dass dein Bot in der Gilde anwesend sein muss, in der sich die Emoji befinden.**

## Beispiel(e)

Dies gibt alle Emojis zurück, die du als Argument angibst:

```javascript
bot.command({
    name: 'emojisFromMessage',
    code: `
$emojisFromMessage
  `
});
```
