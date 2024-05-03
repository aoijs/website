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

| Field        | Type                                                                                                | Description                                           | Required |
| ------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| userResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | User you want to find.                                |   true   |
| returnSelf?  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the author ID if the given user was not found. |  false   |
| guildID?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Guild ID where the user is present in.                |  false   |

## Example(s)

This will return your ID as `Leref` was not found in the given guild:

```javascript
client.command({
    name: "findMember",
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
