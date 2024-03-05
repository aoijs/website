---
title: $newEmoji
description: $newEmoji holds data for the emoji after it was updated/ deleted. (emojiUpdate and emojiDelete event)
id: newEmoji
---

`$newEmoji` holds data for the emoji after it was updated/ deleted. (emojiUpdate and emojiDelete event)

## Usage

```php
$newEmoji[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options

| Option | Type                                                                                              | Description                              |
| ------ | ------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| string | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns text required to form the emoji. |
| guild  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the guild ID of emoji.           |
| url    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns url of emoji(if it's custom).    |
