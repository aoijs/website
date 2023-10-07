---
title: $emojiExists
description: $emojiExists will check if the given emoji exists.
id: emojiExists
---

`$emojiExists` will check if the given emoji exists.

## Usage

```php
$emojiExists[emojiResolver]
```

## Parameters

| Field         | Type   | Description                           | Required |
| ------------- | ------ | ------------------------------------- | :------: |
| emojiResolver | string | Emoji you want to check if it exists. |   true   |

## Example(s)

This will return `true` as
the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji exists:

```javascript
client.command({
  name: "emojiExists",
  code: `
  $emojiExists[<:LerefMoney:1003365344724910191>]
  `
});
```
