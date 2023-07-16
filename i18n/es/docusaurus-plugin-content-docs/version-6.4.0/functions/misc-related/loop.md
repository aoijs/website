---
title: '$loop'
description: '$loop ejecutará comandos esperados una cantidad determinada de veces.'
id: loop
---

$loop ejecutará comandos esperados una cantidad determinada de veces.

## Uso

```php
$loop[tiempo;esperar datos;...comandos esperados]
```

## Parámetros

| Campo             | Tipo   | Parámetros                            | Requerido |
| ----------------- | ------ | ------------------------------------- |:---------:|
| tiempo            | cadena | Con qué frecuencia ejecutar el bucle. | verdadero |
| esperar datos     | objeto | Datos esperados.                      | verdadero |
| ...Cmds esperados | cadena | Comando esperado para ejecutar.       | verdadero |

## Ejemplo(s)

Esto ejecutará un bucle que editará el mensaje enviado 5 veces con el contenido dado en `awaitData`:

```javascript
bot.command({
    name: "loop",
    code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[mi ping es: $pingMS;true]]
    `
});
```

Utilizamos `$awaitData` para recuperar las propiedades dadas en el campo `awaitData` que se encuentra en el comando de bucle.

```javascript
bot.awaitedCommand({
    name: "editMessage",
    code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```