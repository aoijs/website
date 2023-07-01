---
title: $setStatus
description: $setStatus will change the client's status.
id: setStatus
---

`$setStatus` will change the client's status.

## Usage

```php
$setStatus[name;type;status;URL;afk?]
```

## Parameters

| Field  | Type            | Description                                                                                                             | Required |
| ------ | --------------- | ----------------------------------------------------------------------------------------------------------------------- | :------: |
| name   | string          | The content of the status.                                                                                              |   true   |
| type   | string, integer | 1. **PLAYING** (default) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |   true   |
| status | string          | 1. **online** (default) <br /> 2. **idle** <br /> 3. **dnd** <br /> 4. **invisible**                                    |   true   |
| URL    | string          | URL (streaming status)                                                                                                  |   true   |
| afk?   | boolean         | 1. **true** <br /> 2. **false** (default)                                                                               |  false   |

## Example(s)

This will change the client's status to **PLAYING** and **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```