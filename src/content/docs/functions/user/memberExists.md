---
title: $memberExists
description: $memberExists check if a given user is member of the given guild.
id: memberExists
---

`$memberExists` check if a given user is member of the given guild.

## Usage

```php
$memberExists[userID;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                        | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------- |
| userID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | id of the user you want to check if they're currently a member of the given server | true     |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | the server where the user is present in                                            | false    |

## Example(s)

This will return `true` as you're currently in this guild:

```javascript
client.command({
  name: "memberExists",
  code: `
  $memberExists[$authorid;$guildID]
  `
});
```
