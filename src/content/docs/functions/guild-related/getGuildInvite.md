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

| Field    | Type                                                                                                | Description                                           | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The guild ID of which the invite will be returned of. |  false   |
| options? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Invite option object.                                 |  false   |

<details>
  <summary><h3> Invite Target Types </h3></summary>

| TYPE                 | VALUE |
| -------------------- | ----- |
| STREAM               | 1     |
| EMBEDDED_APPLICATION | 2     |

</details>

## Example(s)

This will create an invite of the channel where the command is executed in:

```javascript
client.command({
  name: "getGuildInvite",
  code: `
  $getGuildInvite[$guildID]
  `,
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
  `,
});
```
