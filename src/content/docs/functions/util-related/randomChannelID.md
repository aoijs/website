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

<div class="details">
<details open>
  <summary><h3>Channel Types</h3></summary>
</details>
  <div class="content">
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
  </div>
</div>

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
