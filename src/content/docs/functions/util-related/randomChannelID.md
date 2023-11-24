---
title: $randomChannelID
description: $randomChannelID will return a random channel ID of all guilds or of a specific guild.
id: randomChannelID
---

`$randomChannelID` will return a random channel ID of all guilds or of a specific guild.

## Usage

```php
$randomChannelID[guildID/global?;type?]
```

## Parameters

| Field           | Type                                                                                              | Description                | Required |
| --------------- | ------------------------------------------------------------------------------------------------- | -------------------------- | :------: |
| guildID/global? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID or global search. |  false   |
| type?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Channel type.              |  false   |

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

## Example(s)

This will return a random channel ID of your guild:

```javascript
client.command({
  name: "randomChannelID",
  code: `
  <#$randomChannelID[$guildID;all]>
  `
});
```
