---
title: '$createStageInstance'
description: '$createStageInstance will start a stage.'
id: createStageInstance
---

`$createStageInstance` will start a stage.

## Використання

```php
$createStageInstance[channelID;topic;type?]
```

## Параметри

| Поле      | Тип     | Опис                                     | Обов'язковий |
| --------- | ------- | ---------------------------------------- |:------------:|
| channelID | integer | The channel ID of the stage channel.     |     так      |
| topic     | рядок   | The stage topic which will be displayed. |     так      |
| тип?      | integer | The stage type. (listed below)           |      ні      |

<details open>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE    | VALUE |
| ------- | ----- |
| PUBLIC  | 1     |
| PRIVATE | 2     |

</details>

## Приклад(и)

This will create start a new stage instance:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // replace "stageID" with an actual stage ID
});
```
