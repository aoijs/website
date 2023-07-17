---
title: '$isEveryoneMentioned'
description: '$isEveryoneMentioned comprobará si se menciona a todos o aquí.'
id: isEveryoneMentioned
---

`$isEveryoneMentioned` comprobará si se menciona a todos o aquí.

## Uso

```php
$isEveryoneMentioned
```

## Ejemplo(s)

Esto comprobará si mencionaste `@here` o `@everyone`:

```javascript
bot.command({
    nombre: 'isEveryoneMtioned',
    code: `
  ¡No mencionaste a todos!
  $onlyIf[$isEveryoneMentioned==false;You tried to mention @ everyone!]
  `
});
```
