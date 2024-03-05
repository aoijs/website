---
title: $onlyForChannels
description: $onlyForChannels will check if the command was executed in one of the listed channels and return a error message if not.
id: onlyForChannels
---

`$onlyForChannels` will check if the command was executed in one of the listed channels and return a error message if
not.

## Usage

```php
$onlyForChannels[...categoryIds;error]
```

## Parameters

| Field         | Type                                                                                                                                                                                                 | Description                                                                      | Required |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | :------: |
| ...channelIds | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Channels you want to limit the command to.                                       |   true   |
| error         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Error to return when the command was not executed in any of the listed channels. |   true   |

## Example(s)

This will limit the command only to the listed channels:

```javascript
client.command({
  name: "onlyForChannels",
  code: `
    Ok.
    $onlyForChannels[channelID;channelID;You can't use that command here!]
    `
});
```
