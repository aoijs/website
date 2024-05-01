---
title: $emojiName
description: $emojiName will return the name of an emoji.
id: emojiName
---

`$emojiName` will return the name of an emoji.

## Usage

```php
$emojiName[emojiResolver]
```

## Parameters

| Field         | Type                                                                                              | Description       | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Emoji string, id. |   true   |

## Example(s)

This will return the name of an emoji:

```javascript
client.command({
    name: "emojiName",
    code: `
  $emojiName[emojiResolver]
  `
});
```
