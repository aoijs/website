---
title: $loop
description: $loop will execute awaited commands a given amount of times.
id: loop
---

`$loop` will execute awaited commands a given amount of times.

## Usage

```php
$loop[time;awaitData;...awaitedCmds]
```

## Parameters

| Field          | Type   | Description                    | Required |
| -------------- | ------ | ------------------------------ | :------: |
| time           | string | How often to execute the loop. |   true   |
| awaitData      | object | Awaited Data.                  |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.   |   true   |

## Example(s)

This will execute a loop which will edit the sent message 5 times with the given content in `awaitData`:

```javascript
client.command({
  name: "loop",
  code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[My ping is: $pingMS;true]]
    `
});
```

We use `$awaitData` to retrieve the given properties in the `awaitData` field which is located in the loop command.

```javascript
client.awaitedCommand({
  name: "editMessage",
  code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```
