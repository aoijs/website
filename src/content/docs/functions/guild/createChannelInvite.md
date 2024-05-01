---
title: $createChannelInvite
description: $createChannelInvite will create a channel invite.
id: createChannelInvite
---

`$createChannelInvite` will create a channel invite.

## Usage

```php
$createChannelInvite[channelID?;...options]
```

## Parameters

| Field      | Type                                                                                              | Description                                         | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel ID of which the invite will be created. |  false   |
| options?   | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Invite options.                                     |  false   |

<div class="details">
<details open>
  <summary><h3> Invite Target Types </h3></summary>
</details>
<div class="content">

<table>
  <thead>
    <tr>
      <th>TYPE</th>
      <th>VALUE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>STREAM</td>
      <td>1</td>
    </tr>
    <tr>
      <td>EMBEDDED_APPLICATION</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

  </div>
</div>

## Example(s)

This will create an invite of the channel where the command is executed in:

```javascript
client.command({
    name: "createChannelInvite",
    code: `
  $createChannelInvite[$channelID]
  `
});
```

### Advanced Example(s)

Create Temporary Invites with limited uses:

```javascript
client.command({
    name: "createChannelInvite",
    code: `
  $createChannelInvite[$channelID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```

Create Activity Invites:

```javascript
client.command({
    name: "createChannelInvite",
    code: `
  $createChannelInvite[voiceID;{
            "targetApplication": "application ID",
            "targetType": 2
  }]
  `
});
```
