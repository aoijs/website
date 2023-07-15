---
title: '$createChannel'
description: '$createChannel will create a channel of a given type.'
id: createChannel
---

`$createChannel` will create a channel of a given type.

## प्रोयोग

```php
$createChannel[guildID;name;type;returnID;parentID]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                     |    चाहिए     |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID  | integer  | ID of the guild of where the channel will be created in.                                                         |     true     |
| name     | स्ट्रिंग | The channel name of the newly created channel.                                                                   |     true     |
| टाइप     | स्ट्रिंग | The channel type. (listed below)                                                                                 |     true     |
| returnID | boolean  | Return the channel ID of the newly created channel. <br /> 1. **true** <br /> 2. **false** (default) |     true     |
| parentID | integer  | The category ID.                                                                                                 | असत्य (नहीं) |

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

## ट्रू (हा)

This will create a new text channel called "aoijs":

```javascript
bot.command({
    name: 'createChannel',
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
