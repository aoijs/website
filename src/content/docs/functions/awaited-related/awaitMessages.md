---
title: $awaitMessages
description: $awaitMessages will reply once a given message has been sent by the given user.
id: awaitMessages
---

`$awaitMessages` will reply once a given message has been sent by the given user.

## Usage

```php
$awaitMessages[channelID;userFilter;time;replies;cmds;errorMessage?;awaitData?;dm?]
```

## Parameters

| Field         | Type                                                                                              | Description                                                                                                                        | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | :------: |
| channelID     | integer                                                                                           | Channel ID.                                                                                                                        |   true   |
| userFilter    | integer                                                                                           | User filter <br /> 1. **everyone** <br /> 2. **specific user** - any user ID                                                       |   true   |
| time          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long the command lasts / when it expires.                                                                                      |   true   |
| replies       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | To what the bot will be responding to, multiple words can be separated with a comma (or use "everything" to respond to everything) |   true   |
| cmds          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Commands that will be executed, multiple commands can be separated with a comma.                                                   |   true   |
| errorMessage? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message when the command expires.                                                                                            |  false   |
| awaitData?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Data.                                                                                                                      |  false   |
| dm?           | integer                                                                                           | User ID of where the command may be executed.                                                                                      |  false   |

## Example(s)

This will reply to any message you send after executing the command:

```js
client.command({
  name: "awaitMessages",
  code: `
  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? You don't want to talk to me..?] 
  What's your name?
  `,
  // Please make sure that the awaitedCommand name is ALL lowercase or else it won't work.
});

client.awaitedCommand({
  name: "awaitedcommandexample",
  code: `
  Nice to meet you, $message!
  `,
});
```
