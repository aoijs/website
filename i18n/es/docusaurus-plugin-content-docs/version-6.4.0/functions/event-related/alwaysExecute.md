---
title: '$alwaysExecute'
description: '$alwaysExecute siempre se emitirá cuando se active un evento de mensaje'
id: alwaysExecute
---

`$alwaysExecute` siempre se emitirá cuando se active un evento de mensaje.

## Uso

```php
$alwaysExecute
```

## Ejemplo(s)

Esto enviará el mensaje dado cada vez que envíe un mensaje:

```javascript
bot.command({
  name: "$alwaysExecute",
  code: `Hola!`
})
```