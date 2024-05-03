---
title: $useChannel
description: $useChannel will use the specified channel and execute all function inside of it instead.
id: useChannel
---

`$useChannel` will use the specified channel and execute all function inside of it instead.

## Usage

```php
$useChannel[channelID]
```

## Parameters

| Field     | Type                                                                                              | Description                     | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Where to execute the functions. |   true   |

## Example(s)

This will send an embed in the current channel:

```javascript
client.command({
    name: "useChannel",
    code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```
