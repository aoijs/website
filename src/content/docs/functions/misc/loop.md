---
title: $loop
description: $loop will execute awaited commands a given amount of times.
id: loop
---

`$loop` will execute awaited commands a given amount of times.

## Usage

```aoi
$loop[time;awaitData;...awaitedCmds]
```

## Parameters

| Field          | Type                                                                                              | Description                    | Required |
| -------------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| time           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How often to execute the loop. |   true   |
| awaitData      | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Awaited Data.                  |   true   |
| ...awaitedCmds | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.   |   true   |

## Example(s)

This will execute a loop that will edit the sent message 5 times with the given content in `awaitData`:

```javascript
client.command({
    name: "loop",
    code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[My ping is: $pingMS;true]]
    `
});
```

We use `$awaitData` to retrieve the given properties in the `awaitData` field in the loop command.

```javascript
client.awaitedCommand({
    name: "editMessage",
    code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```
