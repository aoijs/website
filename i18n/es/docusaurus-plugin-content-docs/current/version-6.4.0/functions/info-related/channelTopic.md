---
title: '$channelTopic'
description: '$channelTopic will return the given channel''s topic.'
id: channelTopic
---

`$channelTopic` will return the given channel's topic.

## Modo de uso

```php
$channelTopic[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                    | Requerido |
| -------- | ------- | ------------------------------------------------------------- |:---------:|
| canalID? | integer | ID of the channel you want it to return the channel topic of. |    no     |

## Ejemplo(s)

This will return the channel topic of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```