---
title: $emojiURL
description: $emojiURL will return the emoji URL of an emoji.
id: emojiURL
---

`$emojiURL` will return the emoji URL of an emoji.

## Usage

```php
$emojiURL[emojiResolver]
```

## Parameters

| Field         | Type                                                                                              | Description                             | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Emoji string, id.   |   true   |

## Example(s)

This will return the URL of an emoji called "Leref", (if it exists):

```javascript
client.command({
  name: "emojiURL",
  code: `
  $emojiURL[<:LerefMoney:1003365344724910191>]
  `
});
```
