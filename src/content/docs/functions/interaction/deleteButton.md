---
title: $deleteButton
description: $deleteButton will remove a given button component from a given message authored by the bot.
id: deleteButton
---

`$deleteButton` removes a given button component from a given message authored by the bot.

## Usage

```php
$deleteButton[messageId;customId;channelId?]
```

## Parameters

| Field     | Type                                                                                              | Description                                            | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| messageId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Message ID corresponding to the message of the button. |   true   |
| customId  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Custom ID corresponding to the component.              |   true   |
| channelId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID corresponding to the message of the button. |  false   |

## Example(s)

This will send a message with a button and remove the button after doing so:

```js
client.command({
  name: "deleteButton",
  code: `
  $deleteButton[$get[messageId];customId]
  $wait[5s]
  $let[messageId;$sendMessage[Hello! This is a button. {actionRow:{button:I'm a button!:primary:customId:false}};true]]` // saving the message Id for later! 
});
```
