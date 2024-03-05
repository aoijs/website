---
title: $channelPermissionsFor
description: $channelPermissionsFor will return the channel permissions of a specific user or role.
id: channelPermissionsFor
---

`$channelPermissionsFor` will return the channel permissions of a specific user or role.

## Usage

```php
$channelPermissionsFor[userOrRoleID?;channelID?;sep?]
```

## Parameters

| Field        | Type                                                                                              | Description                                                                   | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | :------: |
| userOrRoleID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user or role ID whose permissions shall be returned.                      |   true   |
| channelID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel ID of the channel of which the permissions should be returned of. |   true   |
| sep?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator which will be used to separate the permissions, by default ",". |  false   |

## Example(s)

This will return your permissions in the channel where you execute the command:

```javascript
client.command({
  name: "channelPermissionsFor",
  code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
