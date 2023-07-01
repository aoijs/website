---
title: $humanizeMs
description: $humanizeMs will convert MS to human-readable time.
id: humanizeMs
---

`$humanizeMs` will convert MS to human-readable time.

## Usage

```php
$humanizeMs[time]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| time  | number | Time in MS. |   true   |

## Example(s)

This will return `6mon 1w 4d 16h 34m` converted from `16782516189` MS:

```javascript
bot.command({
    name: "humanizeMs",
    code: `
    $humanizeMs[16782516189]
    `
});
```