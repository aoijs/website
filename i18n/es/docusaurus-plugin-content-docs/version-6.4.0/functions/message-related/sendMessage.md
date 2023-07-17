---
title: '$sendMessage'
description: '$sendMessage enviará un mensaje en el canal de ejecución.'
id: sendMessage
---

`$sendMessage` enviará un mensaje en un canal específico.

## Uso

```php
$sendMessage[contenido;ID de retorno?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                                                  | Requerido |
| -------------- | -------- | ------------------------------------------------------------------------------------------- |:---------:|
| contenido      | consulta | Contenido del mensaje a enviar.                                                             | verdadero |
| ID de retorno? | boolean  | ¿Devolver ID del mensaje?  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto enviará una inserción en el canal actual:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello!;false]  
  `
});
```

Esto enviará una inserción en el canal actual usando "parsers".

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hola! {newEmbed:{title:Bonjour!}};false]  
  `
});
```