---
title: $repeatMessage
description: $repeatMessage will repeat the given text for given amount of times.
id: repeatMessage
---

`$repeatMessage` will repeat the given text for given amount of times.

## Usage

```php
$repeatMessage[time;text]
```

## Parameters

| Field | Type    | Description                                 | Required |
| ----- | ------- | ------------------------------------------- | :------: |
| time  | integer | The amount of times the text gets repeated. |   true   |
| text  | string  | The text that will get repeated.            |   true   |

## Example(s)

This will return `Hello` twenty times:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
