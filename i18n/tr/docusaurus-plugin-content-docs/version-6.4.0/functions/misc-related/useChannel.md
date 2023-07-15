---
title: '$useChannel'
description: '$useChannel will use the specified channel and execute all function inside of it instead.'
id: useChannel
---

`$useChannel` will use the specified channel and execute all function inside of it instead.

## Usage

```php
$useChannel[channelID]
```

## Parameters

| Field     | Type    | Description                     | Required |
| --------- | ------- | ------------------------------- |:--------:|
| channelID | integer | Where to execute the functions. |   true   |

## Example(s)

This will send an embed in the current channel:

```javascript
bot.command({
    name: "useChannel",
    code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```