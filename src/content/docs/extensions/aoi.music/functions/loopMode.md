---
title: $loopMode
description: $loopMode will either loop the current track, queue or end the loop.
id: loopMode
---

`$loopMode` will either loop the current track, queue or end the loop.

## Usage

```php
$loopMode[mode?]
```

## Parameters

| Field | Type   | Description                                                                   | Required |
| ----- | ------ | ----------------------------------------------------------------------------- | :------: |
| mode? | string | loop mode <br /> 1. **queue** (default) <br /> 2. **song** <br /> 3. **none** |  false   |

## Example(s)

This will set the loop mode to the current track:

```javascript
client.command({
  name: "loopMode",
  code: `
    $loopMode[song]
  `,
});
```
