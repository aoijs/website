---
title: $randomUserID
description: $randomUserID will return a random username.
id: randomUserID
---

`$randomUserID` will return a random username.

## Usage

```php
$randomUserID[global/guildID?]
```

## Parameters

| Field           | Type                                                                                              | Description                                                              | Required |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | :------: |
| global/guildID? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Return a random user out of all guild or out of one specific guild only. |  false   |

## Example(s)

This will return a random user id:

```javascript
client.command({
    name: "randomUserID",
    code: `
  $randomUserID[global]
  `
});
```
