---
title: '$editChannel'
description: '$editChannel will edit a channel.'
id: editChannel
---

`$editChannel` will edit a channel.

## प्रोयोग

```php
$editChannel[channelID;name?;type?;position?;topic?;nsfw?;bitrate?;userlimit?;parent?;lockPermissions?;permissionOverwrites?;rateLimitPerUser?;defaultAutoArchiveDuration?;rtcRegion?;reason?]
```

## पैरामीटर्स

| फील्ड                       | टाइप     | डिस्क्रिप्शन                                              |    चाहिए     |
| --------------------------- | -------- | --------------------------------------------------------- |:------------:|
| channelID                   | integer  | The ID of the channel which will be notified.             |     true     |
| name?                       | स्ट्रिंग | The new channel name.                                     | असत्य (नहीं) |
| टाइप?                       | स्ट्रिंग | The new channel type. (listed below)                      | असत्य (नहीं) |
| position?                   | स्ट्रिंग | The new channel position.                                 | असत्य (नहीं) |
| topic?                      | स्ट्रिंग | The new channel topic.                                    | असत्य (नहीं) |
| nsfw?                       | boolean  | If it should mark the channel as NSFW or not.             | असत्य (नहीं) |
| bitrate?                    | integer  | Voice Channel bitrate.                                    | असत्य (नहीं) |
| userlimit?                  | number   | Voice Channel userlimit.                                  | असत्य (नहीं) |
| parent?                     | integer  | The new parent of the channel. (category ID)              | असत्य (नहीं) |
| lockPermissions?            | स्ट्रिंग | The new channels lock permissions.                        | असत्य (नहीं) |
| permissionOverwrites?       | स्ट्रिंग | The new channels permission overwrites.                   | असत्य (नहीं) |
| rateLimitPerUser?           | number   | The channel slowmode of the edited channel.               | असत्य (नहीं) |
| defaultAutoArchiveDuration? | number   | Thread/Forum archive duration. (in ms)                    | असत्य (नहीं) |
| rtcRegion?                  | स्ट्रिंग | Voice Channel RTC region.                                 | असत्य (नहीं) |
| reason?                     | स्ट्रिंग | Reason which will be displayed in the guild's audit logs. | असत्य (नहीं) |

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

## ट्रू (हा)

This will change the current channel name to "i-love-aoijs":

```javascript
bot.command({
    name: 'editChannel',
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```