---
title: $setTimeout
description: $setTimeout will set a timeout for a given action (which will even continue to run after bot restart).
id: setTimeout
---

`$setTimeout` will set a timeout for a given action (which will even continue to run after bot restart).

## Usage

```php
$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]
```

## Parameters

| Field                                        | Type                                                                                                                                                                                                 | Description                                                            | Required |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | :------: |
| awaitedCmd                                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Awaited command to execute after duration ends.                        |   true   |
| duration                                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | After how much time it will execute / this cannot go over **21 days**. |   true   |
| timeoutData                                  | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                    |
| JavaScript/Reference/Global_Objects/Object)  | Timeout data.                                                                                                                                                                                        | true                                                                   |
| returnId?                                    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  |
| JavaScript/Reference/Global_Objects/Boolean) | Return timeout ID.                                                                                                                                                                                   | false                                                                  |
| pulse?                                       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Pulse.                                                                 |  false   |

- You can retrieve timeout data using `$timeoutData[name]`.
- Note that the duration may not go over **21 days**.

## Example(s)

This will send "Hello!" after 10 seconds in the command execution channel:

```javascript
client.command({
  name: "setTimeout",
  code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `,
});

client.timeoutCommand({
  name: "timeoutCommand",
  code: `
    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]
    `,
});
```
