---
title: '$reactionCollector'
description: '$reactionCollector creará un recopilador de reacciones en un mensaje determinado.'
id: reactionCollector
---

`$reactionCollector` creará un recopilador de reacciones en un mensaje determinado.

## Uso

```php
$reactionCollector[CanalID;ID de mensaje;filtros de usuario;tiempo
;reacciones;comandosesperados;eliminar reacción?;esperar datos?;finEsperar?]
```

## Parámetros

| Campo              | Tipo   | Descripción                                                                                                                  | Requerido |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID            | entero | iD del canal                                                                                                                 | verdadero |
| ID de mensaje      | entero | mensaje ID                                                                                                                   | verdadero |
| filtro de usuario  | cadena | a lo que el bot responderá <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario | verdadero |
| tiempo             | cadena | cuando el comando expira                                                                                                     | verdadero |
| reacciones         | cadena | reacciones que escuchará el bot, puede separar varios emojis con una coma ( `,` )                                            | verdadero |
| comandoEsperado    | cadena | comandos que se ejecutarán, puede separar varios emojis con una coma ( `,` )                                                 | verdadero |
| ¿remover Reacción? | cadena | remover las reacciones después de ejecutar los comandos                                                                      |   falso   |
| esperar datos?     | cadena | datos esperados.                                                                                                             |   falso   |
| finEsperar?        | cadena | comando para terminar esperado / esperar a ejecutar cuando finalice el temporizador                                          |   falso   |

## Ejemplo(s)

Esto enviará un mensaje cuando agregue una reacción:

```js
bot.command({
    name: "reactionCollector",
    code: `
  $reactionCollector[$channelID;$splitText[1];$authorID;10m;👀;awaitReaction;;true]
  $textSplit[$sendMessage[¡Reacciona con "👀" para algo especial!;true]; ]
  `
});

bot.awaitedCommand({
    name: "awaitReaction",
    code: `
  $sendMessage[👀 que es esto?]
  `
});
```

