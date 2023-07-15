---
title: '$createStageInstance'
description: '$createStageInstance will start a stage.'
id: createStageInstance
---

`$createStageInstance` will start a stage.

## Modo de uso

```php
$createStageInstance[channelID;topic;type?]
```

## Parámetros

| Campo   | Tipo   | Descripción                              | Requerido |
| ------- | ------ | ---------------------------------------- |:---------:|
| canalID | entero | The channel ID of the stage channel.     |    sí     |
| topic   | string | The stage topic which will be displayed. |    sí     |
| tipo?   | entero | The stage type. (listed below)           |    no     |

<details open>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE    | VALUE |
| ------- | ----- |
| PUBLIC  | 1     |
| PRIVATE | 2     |

</details>

## Ejemplo(s)

This will create start a new stage instance:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // replace "stageID" with an actual stage ID
});
```
