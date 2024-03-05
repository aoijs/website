---
title: $guildOwnerID
description: $guildOwnerID will return the ID of the server owner, depending on the given argument.
id: guildOwnerID
---

`$guildOwnerID` +will return the ID of the server owner, depending on the given argument.

## Usage

```php
$guildOwnerID[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |

## Example(s)

This will return the ID of the server owner where you execute the command in:

```javascript
client.command({
  name: "guildOwnerID",
  code: `
  $guildOwnerID[$guildID]
  `
});
```
