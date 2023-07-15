---
title: '$isValidImageLink'
description: '$isValidImageLink will check if the given image link is valid.'
id: isValidImageLink
---

`$isValidImageLink` will check if the given image link is valid.

## Usage

```php
$isValidImageLink[URL]
```

## Parameters

| Field | Type   | Description        | Required |
| ----- | ------ | ------------------ |:--------:|
| URL   | string | Direct Image link. |   true   |

## Example(s)

This will return `true` as the given image link is valid:

```javascript
bot.command({
    name: 'isValidImageLink',
    code: `
  $isValidImageLink[https://cdn.discordapp.com/attachments/832704676096245800/1058914808109486221/Screenshot_2022-12-31_at_8.08.57_PM.png]
  `
});
```
