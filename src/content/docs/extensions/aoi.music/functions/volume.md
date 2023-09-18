---
title: $volume
description: $volume will set or return the current volume.
id: volume
pagination_next: null
---

`$volume` will set or return the current volume.

## Usage

```php
$volume[value]
```

## Parameters

| Field | Type           | Description                                                                             | Required |
| ----- | -------------- | --------------------------------------------------------------------------------------- | :------: |
| value | string, number | new volume <br /> 1. **number** (any number) <br /> 2. **get** (returns current volume) |   true   |

## Example(s)

This will return the current volume:

```javascript
bot.command({
  name: "volume",
  code: `
    $volume[get]
  `,
});
```

This will set the current volume to `45`:

```javascript
bot.command({
  name: "volume",
  code: `
    $volume[45]
  `,
});
```
