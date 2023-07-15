---
title: '$randomChannelID'
description: '$randomChannelID will return a random channel ID of all guilds or of a specific guild.'
id: randomChannelID
---

`$randomChannelID` will return a random channel ID of all guilds or of a specific guild.

## Використання

```php
$randomChannelID[guildID/global?;type?]
```

## Параметри

| Поле            | Тип     | Опис                       | Обов'язковий |
| --------------- | ------- | -------------------------- |:------------:|
| guildID/global? | integer | Guild ID or global search. |      ні      |
| тип?            | рядок   | Channel type.              |      ні      |

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

## Приклад(и)

This will return a random channel ID of your guild:

```javascript
bot.command({
    name: 'randomChannelID',
    code: `
  <#$randomChannelID[$guildID;all]>
  `
});
```
