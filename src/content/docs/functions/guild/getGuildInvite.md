---
title: $getGuildInvite
description: $getGuildInvite will create a guild invite.
id: getGuildInvite
---

`$getGuildInvite` will create a guild invite.

## Usage

```php
$getGuildInvite[guildID?;...options]
```

## Parameters

| Field    | Type                                                                                              | Description                                           | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of which the invite will be returned of. |  false   |
| options? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Invite option object.                                 |  false   |

<div class="details">
<details>
  <summary><h3>Invite Target Types</h3></summary>
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
    name: "getGuildInvite",
    code: `
  $getGuildInvite[$guildID]
  `
});
```

### Advanced Example

Create Temporary Invites with limited uses:

```javascript
client.command({
    name: "getGuildInvite",
    code: `
  $getGuildInvite[$guildID;{
            "temporary": true,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```
