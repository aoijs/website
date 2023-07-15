---
title: '$loop'
description: '$loop will execute awaited commands a given amount of times.'
id: loop
---

`$loop` will execute awaited commands a given amount of times.

## प्रोयोग

```php
$loop[time;awaitData;...awaitedCmds]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                   | चाहिए |
| -------------- | -------- | ------------------------------ |:-----:|
| time           | स्ट्रिंग | How often to execute the loop. | true  |
| awaitData      | object   | Awaited Data.                  | true  |
| ...awaitedCmds | स्ट्रिंग | Awaited Commands to execute.   | true  |

## ट्रू (हा)

This will execute a loop which will edit the sent message 5 times with the given content in `awaitData`:

```javascript
bot.command({
    name: "loop",
    code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[My ping is: $pingMS;true]]
    `
});
```

We use `$awaitData` to retrieve the given properties in the `awaitData` field which is located in the loop command.

```javascript
bot.awaitedCommand({
    name: "editMessage",
    code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```