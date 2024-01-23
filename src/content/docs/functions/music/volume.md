---
title: $volume
description: $volume will set or return the current volume.
id: volume
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$volume` will set or return the current volume.

## Usage

```php
$volume[value]
```

## Parameters

| Field | Type                                                                                                                                                                                                 | Description                                                                             | Required |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | :------: |
| value | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | new volume <br /> 1. **number** (any number) <br /> 2. **get** (returns current volume) |   true   |

## Example(s)

This will return the current volume:

```javascript
client.command({
  name: "volume",
  code: `
    $volume[get]
  `,
});
```

This will set the current volume to `45`:

```javascript
client.command({
  name: "volume",
  code: `
    $volume[45]
  `,
});
```
