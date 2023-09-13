---
title: $userBanner
description: $userBanner will return the profile banner of a specific user.
id: userBanner
---

`$userBanner` will return the profile banner of a specific user.

## Usage

```php
$userBanner[userID?;size?;dynamic?;extension?]
```

## Parameters

| Field      | Type           | Description                               | Required |
| ---------- | -------------- | ----------------------------------------- | :------: |
| userID?    | integer        | The ID of the user.                       |  false   |
| size?      | string, number | The size of the image.                    |  false   |
| dynamic?   | boolean        | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | string         | The format of the returned image.         |  false   |

## Example(s)

This will return your profile banner:

```javascript
bot.command({
  name: "userBanner",
  code: `
  $userBanner[$authorID;4096;true;webp]
  `,
});
```
