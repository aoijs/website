---
title: '$editChannel'
description: '$editChannel will edit a channel.'
id: editChannel
---

`$editChannel` will edit a channel.

## Використання

```php
$editChannel[channelID;name?;type?;position?;topic?;nsfw?;bitrate?;userlimit?;parent?;lockPermissions?;permissionOverwrites?;rateLimitPerUser?;defaultAutoArchiveDuration?;rtcRegion?;reason?]
```

## Параметри

| Поле                        | Тип     | Опис                                                      | Обов'язковий |
| --------------------------- | ------- | --------------------------------------------------------- |:------------:|
| channelID                   | integer | The ID of the channel which will be notified.             |     так      |
| name?                       | рядок   | The new channel name.                                     |      ні      |
| тип?                        | рядок   | The new channel type. (listed below)                      |      ні      |
| position?                   | рядок   | The new channel position.                                 |      ні      |
| topic?                      | рядок   | The new channel topic.                                    |      ні      |
| nsfw?                       | boolean | If it should mark the channel as NSFW or not.             |      ні      |
| bitrate?                    | integer | Voice Channel bitrate.                                    |      ні      |
| userlimit?                  | number  | Voice Channel userlimit.                                  |      ні      |
| parent?                     | integer | The new parent of the channel. (category ID)              |      ні      |
| lockPermissions?            | рядок   | The new channels lock permissions.                        |      ні      |
| permissionOverwrites?       | рядок   | The new channels permission overwrites.                   |      ні      |
| rateLimitPerUser?           | number  | The channel slowmode of the edited channel.               |      ні      |
| defaultAutoArchiveDuration? | number  | Thread/Forum archive duration. (in ms)                    |      ні      |
| rtcRegion?                  | рядок   | Voice Channel RTC region.                                 |      ні      |
| reason?                     | рядок   | Reason which will be displayed in the guild's audit logs. |      ні      |

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

## Приклад(и)

This will change the current channel name to "i-love-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```