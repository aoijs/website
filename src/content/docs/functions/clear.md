---
title: $clear
description: $clear will delete the amount of given messages in a channel.
id: clear
---

`$clear` will delete the amount of given messages in a channel.

## Usage

```aoi
$clear[channelID;amount;returnCount?;deleteBots?;deletePinned?;wordsFilter?;...usersFilter?]
```

## Parameters

| Field           | Type                                                                                                | Description                                                                            | Required |
| --------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | :------: |
| channelID       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | In which channel the permissions shall be deleted.                                     |   true   |
| amount          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Amount of messages to delete.                                                          |   true   |
| returnCount?    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the count of deleted messages. <br /> 1. **false** (default) <br /> 2. **true** |  false   |
| deleteBots?     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | Include bot messages. <br /> 1. **false** (default) <br /> 2. **true**                 |  false   |
| deletePinned?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | Include pinned messages. <br /> 1. **false** (default) <br /> 2. **true**              |  false   |
| wordsFilter?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Words to include, split by `:` colons.                                                 |  false   |
| ...usersFilter? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Users to include.                                                                      |  false   |

## Example(s)

This will delete the most recent fifty messages which are pinned:

```javascript
client.command({
  name: "clear",
  code: `
  $clear[$channelID;50;false;false;true]
  `,
});
```

This will delete the most recent fifty messages which are sent by the command author:

```javascript
client.command({
  name: "clear",
  code: `
  $clear[$channelID;50;false;false;false;;$authorId]
  `,
});
```
