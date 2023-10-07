---
title: $autoPlay
description: $autoPlay will autoplay songs.
id: autoPlay
---

`$autoPlay` will autoplay songs.

## Usage

```php
$autoPlay[type?]
```

## Parameters

| Field | Type   | Description                                                                                                                   | Required |
| ----- | ------ | ----------------------------------------------------------------------------------------------------------------------------- | :------: |
| type? | string | Type <br /> 1. **relative** (default) <br /> 2. **spotify** <br /> 3. **youtube** <br /> 4. **soundcloud** <br /> 5. **none** |  false   |

## Example(s)

This will automatically add songs to your queue from the given type:

```javascript
client.command({
  name: "autoPlay",
  code: `
    $autoPlay[relative]
  `
});
```
