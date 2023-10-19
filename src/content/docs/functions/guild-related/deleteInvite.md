---
title: $deleteInvite
description: $deleteInvite will delete a specific guild invite.
id: deleteInvite
---

`$deleteInvite` will delete a specific guild invite.

## Usage

```php
$deleteInvite[guildID;inviteCode;reason?]
```

## Parameters

| Field      | Type                                                                                                | Description                                               | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | :------: |
| guildID    | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The guild ID whose invite should be deleted.              |   true   |
| inviteCode | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The specific invite code.                                 |   true   |
| reason?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Reason which will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will delete an invite (wont work as the invite code doesn't exist):

```javascript
client.command({
  name: "deleteInvite",
  code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `,
});
```
