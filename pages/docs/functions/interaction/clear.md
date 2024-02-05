---
title: $clear
description: $clear will delete the amount of given messages in a channel.
id: clear
---

`$clear` will delete the amount of given messages in a channel.

## Usage

```php
$clear[channelID;amount;filter?;returnCount?]
```

## Parameters

| Field        | Type                                                                                                | Description                                                                                                                              | Required |
| ------------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| channelID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | In which channel the permissions shall be deleted.                                                                                       |   true   |
| amount       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Amount of messages to delete.                                                                                                            |   true   |
| filter?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Filter of messages which are to delete. <br /> 1. **everyone** (default) <br /> 2. **unpinned** <br /> 3. **bots** <br /> 4. **user:id** |  false   |
| returnCount? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the count of deleted messages. <br /> 1. **false** (default) <br /> 2. **true**                                                   |  false   |

## Example(s)

This will delete the most recent fifty messages which are not pinned:

```javascript
client.command({
  name: "clear",
  code: `
  $clear[$channelID;50;unpinned;false]
  `
});
```

This will delete the most recent fifty messages which are sent by the command author:

```javascript
client.command({
  name: "clear",
  code: `
  $clear[$channelID;50;user:$authorId;false]
  `
});
```
