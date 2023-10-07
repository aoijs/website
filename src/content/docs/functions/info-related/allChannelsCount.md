---
title: $allChannelsCount
description: $allChannelsCount will return the amount of all cached channels of a given type.
id: allChannelsCount
---

`$allChannelsCount` will return the amount of all cached channels of a given type.

## Usage

```php
$allChannelsCount[type?]
```

## Parameters

| Field | Type   | Description                                 | Required |
| ----- | ------ | ------------------------------------------- | -------- |
| type? | string | Type you want the amount of to be returned. | false    |

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

This will return the amount of Voice Channels in your guild:

```javascript
client.command({
  name: "allChannelsCount",
  code: `
  $allChannelsCount[Voice]
  `
});
```
