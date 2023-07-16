---
title: '$getMessage'
description: '$getMessage devolverá propiedades sobre un mensaje dado.'
id: getMessage
---

`$getMessage` devolverá propiedades sobre un mensaje dado.

## Uso

```php
$getMessage[canalID;mensajeID;opción?]
```

## Parámetros

| Campo         | Tipo   | Descripción                                     | Requerido |
| ------------- | ------ | ----------------------------------------------- |:---------:|
| canalID       | entero | ID del canal en el que se encuentra el mensaje. |    sí     |
| ID de mensaje | entero | ID del mensaje.                                 |    sí     |
| opción?       | cadena | Qué opción buscar.                              |    no     |

<details open>
  <summary><h3> Opciones </h3></summary>

| Tipo     | Descripción                  |
| -------- | ---------------------------- |
| content  | Contenido del mensaje.       |
| userID   | ID de usuario del autor.     |
| usertag  | Discriminador del autor.     |
| username | Nombre de usuario del autor. |

</details>

## Ejemplo(s)

Esto devolverá el contenido de su mensaje enviado:

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```