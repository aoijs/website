---
title: $setStatus
description: $setStatus will change the client's status.
id: setStatus
---

`$setStatus` will change the client's status.

## Usage

```php
$setStatus[name;type?;status?;URL?;afk?]
```

## Parameters

| Field  | Type                                                                                                                                                                                                 | Description                                                                                                             | Required |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | :------: |
| name   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The content of the status.                                                                                              |   true   |
| type   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | 1. **PLAYING** (default) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |  false   |
| status | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | 1. **online** (default) <br /> 2. **idle** <br /> 3. **dnd** <br /> 4. **invisible**                                    |  false   |
| URL    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | URL (streaming status)                                                                                                  |  false   |
| afk?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | 1. **true** <br /> 2. **false** (default)                                                                               |  false   |

## Example(s)

This will change the client's status to **PLAYING** and **online**:

```javascript
client.command({
    name: "setStatus",
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```
