---
title: '$setTimeout'
description: '$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).'
id: setTimeout
---

`$setTimeout` will set a timeout for a given action (which will even continue to run after bot restart).

## प्रोयोग

```php
$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]
```

## पैरामीटर्स

| फील्ड       | टाइप           | डिस्क्रिप्शन                                                           |    चाहिए     |
| ----------- | -------------- | ---------------------------------------------------------------------- |:------------:|
| awaitedCmd  | स्ट्रिंग       | Awaited command to execute after duration ends.                        |     true     |
| duration    | string, number | After how much time it will execute / this cannot go over **21 days**. |     true     |
| timeoutData | object         | Timeout data.                                                          |     true     |
| returnId?   | boolean        | Return timeout ID.                                                     | असत्य (नहीं) |
| pulse?      | number         | Pulse.                                                                 | असत्य (नहीं) |

- You can retrieve timeout data using `$timeoutData[name]`.
- Note that the duration may not go over **21 days**.

## ट्रू (हा)

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