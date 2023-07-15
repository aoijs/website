---
title: '$channelCount'
description: '$channelCount will return the amount of channels of a given type.'
id: channelCount
---

`$channelCount` will return the amount of channels of a given type.

## الاستخدام

```php
$channelCount[guildID?;type?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                              | مطلوب |
| -------- | ------- | --------------------------------------------------------- |:-----:|
| guildID? | Integer | ID of the guild where the channels will be counted from.  | false |
| النوع?   | string  | Type you want the amount of to be returned, listed below. | false |

<details>
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

## مثال

This will return the amount of Voice Channels in your guild:

```javascript
bot.command({
    name: 'channelCount',
    code: `
  $channelCount[$guildID;Voice]
  `
});
```
