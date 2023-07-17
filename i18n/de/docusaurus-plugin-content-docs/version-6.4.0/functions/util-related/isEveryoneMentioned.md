---
title: $isEveryoneMentioned
description: '$isEveryoneMentioned wird prüfen, ob alle oder hier erwähnt werden.'
id: isEveryoneMentioned
---

`$isEveryoneMentioned` wird überprüfen, ob alle oder hier erwähnt werden.

## Verwendung

```php
$isEveryoneMentioned
```

## Beispiel(e)

Dies wird überprüfen, ob du `@here` oder `@everyone` erwähnt hast:

```javascript
bot.command({
    Name: 'isEveryoneMentioned',
    Code: `
  Du hast nicht @ alle erwähnt!
  $onlyIf[$isEveryoneMentioned==false;You tried to mention @ everyone!]
  `
});
```
