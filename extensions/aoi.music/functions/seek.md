---
title: $seek
description: $seek will seek to a specified position of a song.
id: seek
---

`$seek` will seek to a specified position of a song.

## Usage

```php
$seek[time]
```

## Parameters

| Field | Type   | Description         | Required |
|-------|--------|---------------------|:--------:|
| time  | number | song position in ms |   true   |

## Example(s)

This will seek to second 10 of the song>

```javascript
bot.command({
    name: 'seek',
    code: `
    $seek[10000]
  `
});
```