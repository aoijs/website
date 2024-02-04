---
title: $seek
description: $seek will seek to a specified position of a song.
id: seek
extension: true
---

`$seek` will seek to a specified position of a song.

## Usage

```php
$seek[time]
```

## Parameters

| Field | Type                                                                                              | Description         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| time  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | song position in ms |   true   |

## Example(s)

This will seek to second 10 of the song>

```javascript
client.command({
  name: "seek",
  code: `
    $seek[10000]
  `,
});
```
