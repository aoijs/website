---
title: '$getMessage'
description: '$getMessage will return properties about a given message.'
id: getMessage
---

`$getMessage` will return properties about a given message.

## Modo de uso

```php
$getMessage[channelID;messageID;option?]
```

## Parámetros

| Campo         | Tipo   | Descripción                                        | Requerido |
| ------------- | ------ | -------------------------------------------------- |:---------:|
| canalID       | entero | ID of the channel where the message is located in. |    sí     |
| ID de mensaje | entero | The ID of the message.                             |    sí     |
| opción?       | cadena | Which option to fetch.                             |    no     |

<details open>
  <summary><h3> Options </h3></summary>

| Tipo              | Descripción             |
| ----------------- | ----------------------- |
| contenido         | Content of the message. |
| usarioID          | Author User ID.         |
| usertag           | Author Discriminator.   |
| nombre de usuario | Author Username.        |

</details>

## Ejemplo(s)

This will return the content of your sent message:

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```