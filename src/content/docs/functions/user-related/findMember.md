---
title: $findMember
description: $findMember will find a specific member in a specific guild by their name.
id: findMember
---

`$findMember` will find a specific member in a specific guild.

## Usage

```php
$findMember[userResolver;returnSelf?;guildID?]
```

## Parameters

| Field        | Type    | Description                                           | Required |
| ------------ | ------- | ----------------------------------------------------- | :------: |
| userResolver | string  | User you want to find.                                |   true   |
| returnSelf?  | boolean | Return the author ID if the given user was not found. |  false   |
| guildID?     | integer | Guild ID where the user is present in.                |  false   |

## Example(s)

This will return your ID as `Leref` was not found in the given guild:

```javascript
bot.command({
  name: "findMember",
  code: `
  $findMember[Leref;true;$guildID]
  `,
});
```
