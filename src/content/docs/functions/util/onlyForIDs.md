---
title: $onlyForIDs
description: $onlyForIDs will check if the command was executed by any user of the listed user IDs and return a error if not.
id: onlyForIDs
---

`$onlyForIDs` will check if the command was executed by any user of the listed user IDs and return a error if not.

## Usage

```php
$onlyForIDs[...userIds;error]
```

## Parameters

| Field      | Type                                                                                                                                                                                                 | Description                                                                   | Required |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | :------: |
| ...userIds | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Users you want to limit the command to.                                       |   true   |
| error      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Error to return when the command was not executed by and of the listed users. |   true   |

## Example(s)

This will limit the command to bot developers only:

```javascript
client.command({
  name: "onlyForIDs",
  code: `
    You can use this!
    $onlyForIDs[$clientOwnerIds;You can't use that command!]
    `
});
```
