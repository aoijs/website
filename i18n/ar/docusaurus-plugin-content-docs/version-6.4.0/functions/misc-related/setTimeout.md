---
title: '$setTimeout'
description: '$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).'
id: setTimeout
---

`$setTimeout` will set a timeout for a given action (which will even continue to run after bot restart).

## الاستخدام

```php
$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]
```

## البارامترات

| Field       | النوع          | الديسكبربشين                                                           | مطلوب |
| ----------- | -------------- | ---------------------------------------------------------------------- |:-----:|
| awaitedCmd  | string         | Awaited command to execute after duration ends.                        | true  |
| duration    | string, number | After how much time it will execute / this cannot go over **21 days**. | true  |
| timeoutData | object         | Timeout data.                                                          | true  |
| returnId?   | boolean        | Return timeout ID.                                                     | false |
| pulse?      | number         | Pulse.                                                                 | false |

- You can retrieve timeout data using `$timeoutData[name]`.
- Note that the duration may not go over **21 days**.

## مثال

This will send "Hello!" after 10 seconds in the command execution channel:

```javascript
bot.command({
    name: "setTimeout",
    code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

bot.timeoutCommand({
    name: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]
    `
});
```