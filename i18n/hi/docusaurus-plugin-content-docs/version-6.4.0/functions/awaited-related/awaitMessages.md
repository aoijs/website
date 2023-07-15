---
title: '$awaitMessages'
description: '$awaitMessages will reply once a given message has been sent by the given user.'
id: awaitMessages
---

`$awaitMessages` will reply once a given message has been sent by the given user.

## प्रोयोग

```php
$awaitMessages[channelID;userFilter;time;replies;cmds;errorMessage?;awaitData?;dm?]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन                                                                                                                        |    चाहिए     |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | integer  | Channel ID.                                                                                                                         |     true     |
| userFilter    | integer  | User filter <br /> 1. **everyone** <br /> 2. **specific user** - any user ID                                            |     true     |
| time          | स्ट्रिंग | How long the command lasts / when it expires.                                                                                       |     true     |
| replies       | स्ट्रिंग | To what the bot will be responding to, multiple words can be separated with a comma  (or use "everything" to respond to everything) |     true     |
| cmds          | स्ट्रिंग | Commands that will be executed, multiple commands can be separated with a comma.                                                    |     true     |
| errorMessage? | स्ट्रिंग | Error message when the command expires.                                                                                             | असत्य (नहीं) |
| awaitData?    | स्ट्रिंग | Awaited Data.                                                                                                                       | असत्य (नहीं) |
| dm?           | integer  | User ID of where the command may be executed.                                                                                       | असत्य (नहीं) |

## ट्रू (हा)

This will reply to any message you send after executing the command:

```js
bot.command({
    name: "awaitMessages",
    code: `
  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? You don't want to talk to me..?] 
  What's your name?
  `
    // Please make sure that the awaitedCommand name is ALL lowercase or else it won't work.
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Nice to meet you, $message!
  `
});
```
