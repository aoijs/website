---
title: $log
description: $log will log a given message in your bot's console.
id: log
---

`$log` will log a given message in your bot's console.

## Usage

```php
$log[content]
```

## Parameters

| Field   | Type           | Description                    | Required |
| ------- | -------------- | ------------------------------ | :------: |
| content | string, number | Content of the message to log. |   true   |

## Example(s)

This will log "Aoi.js is great!" in your bot's console:

```javascript
client.command({
  name: "log",
  code: `
    $log[Aoi.js is great!]
    `
});
```
