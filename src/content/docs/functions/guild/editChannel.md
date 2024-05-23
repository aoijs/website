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

| Field                       | Type                                                                                                | Description                                               | Required |
| --------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | :------: |
| channelID                   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the channel which will be notified.             |   true   |
| name?                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new channel name.                                     |  false   |
| type?                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new channel type. (listed below)                      |  false   |
| position?                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new channel position.                                 |  false   |
| topic?                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new channel topic.                                    |  false   |
| nsfw?                       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If it should mark the channel as NSFW or not.             |  false   |
| bitrate?                    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Voice Channel bitrate.                                    |  false   |
| userlimit?                  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Voice Channel userlimit.                                  |  false   |
| parent?                     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The new parent of the channel. (category ID)              |  false   |
| lockPermissions?            | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new channels lock permissions.                        |  false   |
| permissionOverwrites?       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new channels permission overwrites.                   |  false   |
| rateLimitPerUser?           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The channel slowmode of the edited channel.               |  false   |
| defaultAutoArchiveDuration? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Thread/Forum archive duration. (in ms)                    |  false   |
| rtcRegion?                  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Voice Channel RTC region.                                 |  false   |
| reason?                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Reason which will be displayed in the guild's audit logs. |  false   |

**Note: you can use `$default` to keep the current property.**

<details open>
  <summary>Channel Types</summary>
    <table>
      <thead>
        <tr>
          <th>Channel Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Text Channel</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Voice Channel</td>
          <td>Voice</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>Category</td>
        </tr>
        <tr>
          <td>Stage Channel</td>
          <td>Stage</td>
        </tr>
        <tr>
          <td>Private Thread</td>
          <td>PrivateThread</td>
        </tr>
        <tr>
          <td>Public Thread</td>
          <td>PublicThread</td>
        </tr>
        <tr>
          <td>Forum</td>
          <td>Forum</td>
        </tr>
        <tr>
          <td>Announcement Thread</td>
          <td>AnnouncementThread</td>
        </tr>
        <tr>
          <td>Announcement Channel</td>
          <td>Announcement</td>
        </tr>
        <tr>
          <td>Home</td>
          <td>GuildDirectory</td>
        </tr>
        <tr>
          <td>NSFW Channel</td>
          <td>NSFW</td>
        </tr>
        <tr>
          <td>Direct Message</td>
          <td>DM</td>
        </tr>
        <tr>
          <td>All Channel Types</td>
          <td>all</td>
        </tr>
      </tbody>
    </table>
</details>

## Example(s)

This will change the current channel name to "i-love-aoijs":

```javascript
client.command({
    name: "editChannel",
    code: `
  $editChannel[$channelID;i-love-aoi-js]
  `
});
```
