---
title: $isUnicodeEmoji
description: $isUnicodeEmoji will check if the given emoji is an unicode emoji.
id: isUnicodeEmoji
---

`$isUnicodeEmoji` will check if the given emoji is an unicode emoji.

## Usage

```aoi
$isUnicodeEmoji[emojiResolver]
```

## Parameters

| Field         | Type                                                                                              | Description    | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | -------------- | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Unicode emoji. |   true   |

## Example(s)

This will return `true` as "🤓" is a valid unicode emoji:

```javascript
client.command({
    name: "isUnicodeEmoji",
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
