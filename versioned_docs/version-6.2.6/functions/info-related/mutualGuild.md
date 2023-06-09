---
title: $mutualGuilds
description: $mutualGuilds will return the mutual servers with a given user and the bot.
id: mutualGuilds
---

`$mutualGuilds` will return the mutual servers with a given user and the bot.

## Usage

```php
$mutualGuilds[userID?;sep?]
```

## Parameters

| Field   | Type    | Description                                    | Required |
| ------- | ------- | ---------------------------------------------- | :------: |
| userID? | integer | The ID of the user.                            |  false   |
| sep?    | string  | The separator to separate the returned values. |  false   |

## Example(s)

This will return the mutual servers of you and the bot:

```javascript
bot.command({
    name: 'mutualGuilds',
    code: `
  $mutualGuilds[$authorID;, ]
  `
});
```
