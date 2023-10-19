---
title: $clientMutualGuilds
description: $clientMutualGuilds will return the mutual servers with a given user and the bot.
id: clientMutualGuilds
---

`$clientMutualGuilds` will return the mutual servers with a given user and the bot.

## Usage

```php
$clientMutualGuilds[userID?;sep?]
```

## Parameters

| Field   | Type                                                                                                | Description                                    | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- | :------: |
| userID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the user.                            |  false   |
| sep?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The separator to separate the returned values. |  false   |

## Example(s)

This will return the mutual servers of you and the bot:

```javascript
client.command({
  name: "clientMutualGuilds",
  code: `
  $clientMutualGuilds[$authorID;, ]
  `,
});
```
