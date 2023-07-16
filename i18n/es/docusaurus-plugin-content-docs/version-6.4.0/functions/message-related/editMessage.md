---
title: '$editMessage'
description: '$editMessage editará un mensaje dado.'
id: editMessage
---

`$editMessage` editará un mensaje dado.

## Uso

```php
$editMessage[mensajeID;contenido;canalID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                     | Requerido |
| ------------- | -------- | ---------------------------------------------- |:---------:|
| ID de mensaje | entero   | El mensaje se ha modificado.                   | verdadero |
| contenido     | consulta | El contenido del nuevo mensaje.                | verdadero |
| canalID?      | entero   | El ID del canal donde se encuentra el mensaje. |   falso   |

Solo puede editar mensajes que fueron enviados por el propio bot.

## Ejemplo(s)

Esto editará el mensaje enviado después de cinco segundos: (funciona de la misma manera que `$editIn`)

```javascript
bot.command({
    name: 'editMessage',
    code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```