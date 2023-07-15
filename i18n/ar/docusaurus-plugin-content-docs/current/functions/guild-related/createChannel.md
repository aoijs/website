---
title: '$createChannel'
description: '$createChannel will create a channel of a given type.'
id: createChannel
---

`$createChannel` will create a channel of a given type.

## الاستخدام

```php
$createChannel[guildID;name;type;returnID;parentID]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                              | مطلوب |
| -------- | ------- | ----------------------------------------------------------------------------------------- |:-----:|
| guildID  | Integer | ID of the guild of where the channel will be created in.                                  | true  |
| name     | string  | The channel name of the newly created channel.                                            | true  |
| type     | string  | The channel type. (listed below)                                                          | true  |
| returnID | boolean | Return the channel ID of the newly created channel. <br /> 1. true. false (default) | true  |
| parentID | Integer | The category ID.                                                                          | false |

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

## مثال

This will create a new text channel called "aoijs":

```javascript
bot.command({
    name: 'createChannel',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
