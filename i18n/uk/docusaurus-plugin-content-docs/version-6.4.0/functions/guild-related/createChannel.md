---
title: '$createChannel'
description: '$createChannel will create a channel of a given type.'
id: createChannel
---

`$createChannel` will create a channel of a given type.

## Використання

```php
$createChannel[guildID;name;type;returnID;parentID]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                             | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID  | integer | ID of the guild of where the channel will be created in.                                                         |     так      |
| назва    | рядок   | The channel name of the newly created channel.                                                                   |     так      |
| тип      | рядок   | The channel type. (listed below)                                                                                 |     так      |
| returnID | boolean | Return the channel ID of the newly created channel. <br /> 1. **true** <br /> 2. **false** (default) |     так      |
| parentID | integer | The category ID.                                                                                                 |      ні      |

<details open>
  <summary><h3> Channel Types </h3></summary>

| Channel Type         |                    |
| -------------------- | ------------------ |
| Text Channel         | Text               |
| Voice Channel        | Voice              |
| Category             | Category           |
| Stage Channel        | Stage              |
| Private Thread       | PrivateThread      |
| Public Thread        | PublicThread       |
| Forum                | Forum              |
| Announcement Thread  | AnnouncementThread |
| Announcement Channel | Announcement       |

</details>

## Приклад(и)

This will create a new text channel called "aoijs":

```javascript
bot.command({
    name: 'createChannel',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
