---
title: $createChannel
description: $createChannel will create a channel of a given type.
id: createChannel
---

`$createChannel` will create a channel of a given type.

## Usage

```aoi
$createChannel[guildID;name;type;returnID;parentID]
```

## Parameters

| Field    | Type                                                                                                | Description                                                                                          | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | :------: |
| guildID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | ID of the guild of where the channel will be created in.                                             |   true   |
| name     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The channel name of the newly created channel.                                                       |   true   |
| type     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The channel type. (listed below)                                                                     |   true   |
| returnID | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the channel ID of the newly created channel. <br /> 1. **true** <br /> 2. **false** (default) |   true   |
| parentID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The category ID.                                                                                     |  false   |

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

This will create a new text channel called "aoijs":

```javascript
client.command({
    name: "createChannel",
    code: `
    $createChannel[$guildID;aoijs;Text;false]
  `
});
```
