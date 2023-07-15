---
title: $playTrack
description: $playTrack will play a track using the specified method.
id: playTrack
---

`$playTrack` will play a track using the specified method.

## Usage

```php
$playTrack[track;type]
```

## Parameters

| Field | Type   | Description                                                                                                                                                                     | Required |
|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------:|
| track | string | track to play                                                                                                                                                                   |   true   |
| type  | string | platform type <br /> 1. **youtube** <br /> 2. **soundcloud** <br /> 3. **spotify** <br /> 4. **local** (local file) <br /> 5. **url** (url which emits music or any other kind) |   true   |

## Example(s)

This will play a youtube video called "Silly Goose":

```javascript
bot.command({
    name: 'playTrack',
    code: `
    $playTrack[Silly Goose;youtube]
  `
});
```