---
title: '$randomChannelID'
description: '$randomChannelID will return a random channel ID of all guilds or of a specific guild.'
id: randomChannelID
---

`$randomChannelID` will return a random channel ID of all guilds or of a specific guild.

## प्रोयोग

```php
$randomChannelID[guildID/global?;type?]
```

## पैरामीटर्स

| फील्ड           | टाइप     | डिस्क्रिप्शन               |    चाहिए     |
| --------------- | -------- | -------------------------- |:------------:|
| guildID/global? | integer  | Guild ID or global search. | असत्य (नहीं) |
| टाइप?           | स्ट्रिंग | Channel type.              | असत्य (नहीं) |

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
| Home                 | GuildDirectory     |
| NSFW Channel         | NSFW               |
| Direct Message       | DM                 |
| All Channel Types    | all                |

</details>

## ट्रू (हा)

This will return a random channel ID of your guild:

```javascript
bot.command({
    name: 'randomChannelID',
    code: `
  <#$randomChannelID[$guildID;all]>
  `
});
```
