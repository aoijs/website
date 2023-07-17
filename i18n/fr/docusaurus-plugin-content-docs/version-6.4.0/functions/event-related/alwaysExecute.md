---
title: '$alwaysExecute'
description: '$alwaysExecute s''exécute toujours lorsqu''un évènement de message est déclenché'
id: alwaysExecute
---

`$alwaysExecute` s'exécute toujours lorsqu'un évènement de message est déclenché.

## Utilisation

```php
$alwaysExecute
```

## Exemple(s)

Ceci enverra le message donné à chaque fois que vous envoyez un message:

```javascript
bot.command({
  name: "$alwaysExecute",
  code: `Bonjour!`
})
```