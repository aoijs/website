---
title: '$reactionCount'
description: '$reactionCount will return the amount of users who reacted to a specific emoji.'
id: reactionCount
---

`$reactionCount` will return the amount of users who reacted to a specific emoji.

## Modo de uso

```php
$reactionCount[channelID;messageID;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                             | Requerido |
| ------------- | ------ | ------------------------------------------------------ |:---------:|
| canalID       | entero | The ID of the channel where the message is located in. | verdadero |
| ID de mensaje | entero | The ID of the message.                                 | verdadero |
| emoji         | string | The emoji its reaction count will be returned of.      |    sí     |

## Ejemplo(s)

This will return the amount of reactions on your message with which you executed the command, will most likely return `1` due to the bot being the only one who reacted to it:

```javascript
bot.command({
    name: 'reactionCount',
    code: `
There are: $reactionCount[$channelID;$messageID;😫] reactions!
$addCmdReactions[😫]
`
});
```
