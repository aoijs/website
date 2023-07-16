---
title: '$userActivity'
description: '$activity will return a user''s activity.'
id: userActivity
---

`$userActivity` will return a user's current activity.

## Uso

```php
$userActivity[guildID?;userID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros    | Requerido |
| ----------- | ------ | ------------- |:---------:|
| servidorID? | entero | The guild ID. |    no     |
| usarioID?   | entero | The user ID.  |    no     |

## Ejemplo(s)

This will return your current Activity:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```