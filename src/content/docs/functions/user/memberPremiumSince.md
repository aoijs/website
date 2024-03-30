---
title: $memberPremiumSince
description: $memberPremiumSince will return the timestamp of when the user started boosting the guild.
id: memberPremiumSince
---

`$memberPremiumSince` will return the timestamp of when the member started boosting the guild.

## Usage

```php
$memberPremiumSince[userID?;guildID?]
```

## Parameters

| Field     | Type                                                                                                | Description   | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ------------- | :------: |
| userID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The user ID.  |  false   |
| guildID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The guild ID. |  false   |

## Example(s)

This will return the timestamp of when you started boosting the guild:

```js
client.command({
  name: "memberPremiumSince",
  code: `$memberPremiumSince[$authorID;$guildID]`
});
```
