---
title: '$mentioned'
description: '$mentioned will return the ID of an user of the mention.'
id: mentioned
---

`$mentioned` will return the ID of an user of the mention.

## Modo de uso

```php
$mentioned[index;returnSelf?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                    | Requerido |
| ----------- | ------- | --------------------------------------------- |:---------:|
| índice      | número  | The index of the argument.                    | verdadero |
| returnSelf? | boolean | Return the author's ID if user was not found. |    no     |

## Ejemplo(s)

This will return the ID of the **first** mention if you attempt to mention someone in this command, or else it will return your ID:

```javascript
bot.command({
    name: 'mentioned',
    code: `
  $mentioned[1;true]
  `
});
```
