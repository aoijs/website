---
title: '$muteUser'
description: '$muteUser silenciará o dessilenciará a un usuario determinado en un canal de voz.'
id: muteUser
---

`$muteUser` silenciará o dessilenciará a un usuario determinado en un canal de voz.

## Uso

```php
$moveUser[servidorID;ID de usuario;Mudo;razon?]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                                                                                                             | Requerido |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID | entero   | El ID de gremio de donde se encuentra el usuario.                                                                                      | verdadero |
| usarioID   | entero   | El ID de usuario del usuario para silenciar/dessilenciar.                                                                              | verdadero |
| Mudo?      | booleano | Silenciar o dejar de silenciar a un usuario <br /> 1. **true** (Mudo/ default) <br /> 2. ** false ** (activar el silencio) |   falso   |
| ¿razón?    | cadena   | Razón que se mostrará en los registros de auditoría del gremio.                                                                        |   falso   |

## Ejemplo(s)

Esto se silenciará a ti mismo (debe estar en un canal de voz):

```javascript
bot.command({
    name: 'muteUser',
    code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```