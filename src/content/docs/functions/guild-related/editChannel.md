---
title: $editChannel
description: $editChannel will edit a channel.
id: editChannel
---

`$editChannel` will edit a channel.

## Usage

```php
$editChannel[channelID;name?;type?;position?;topic?;nsfw?;bitrate?;userlimit?;parent?;lockPermissions?;permissionOverwrites?;rateLimitPerUser?;defaultAutoArchiveDuration?;rtcRegion?;reason?]
```

## Parameters

| Field                       | Type    | Description                                               | Required |
| --------------------------- | ------- | --------------------------------------------------------- | :------: |
| channelID                   | integer | The ID of the channel which will be notified.             |   true   |
| name?                       | string  | The new channel name.                                     |  false   |
| type?                       | string  | The new channel type. (listed below)                      |  false   |
| position?                   | string  | The new channel position.                                 |  false   |
| topic?                      | string  | The new channel topic.                                    |  false   |
| nsfw?                       | boolean | If it should mark the channel as NSFW or not.             |  false   |
| bitrate?                    | integer | Voice Channel bitrate.                                    |  false   |
| userlimit?                  | number  | Voice Channel userlimit.                                  |  false   |
| parent?                     | integer | The new parent of the channel. (category ID)              |  false   |
| lockPermissions?            | string  | The new channels lock permissions.                        |  false   |
| permissionOverwrites?       | string  | The new channels permission overwrites.                   |  false   |
| rateLimitPerUser?           | number  | The channel slowmode of the edited channel.               |  false   |
| defaultAutoArchiveDuration? | number  | Thread/Forum archive duration. (in ms)                    |  false   |
| rtcRegion?                  | string  | Voice Channel RTC region.                                 |  false   |
| reason?                     | string  | Reason which will be displayed in the guild's audit logs. |  false   |

**Note: you can use `$default` to keep the current property.**

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

Note: all channel types are **case-sensitive**.

</details>

## Example(s)

This will change the current channel name to "i-love-aoijs":

```javascript
client.command({
  name: "editChannel",
  code: `
  $editChannel[$channelID;i-love-aoi-js]
  `,
});
```
