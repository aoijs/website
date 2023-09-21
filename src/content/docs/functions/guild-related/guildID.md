---
title: $guildID
description: $guildID will return the guild ID of a given guild.
id: guildID
---

`$guildID` will return the guild ID of a given guild.

## Usage

```php
$guildID[name?]
```

## Parameters

| Field | Type   | Description                                       | Required |
| ----- | ------ | ------------------------------------------------- | :------: |
| name? | string | The guild name you want the ID to be returned of. |  false   |

## Example(s)

This will return your guild ID:

```javascript
client.command({
  name: "guildID",
  code: `
  $guildID
  `,
});
```
