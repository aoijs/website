---
title: $cloneChannel
description: $cloneChannel will clone a channel.
id: cloneChannel
---

`$cloneChannel` will clone a channel.

## Usage

```php
$cloneChannel[channelID;name;returnID?]
```

## Parameters

| Field                                        | Type                                                                                              | Description                              | Required |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| channelID                                    | integer                                                                                           | The ID of the channel which is to clone. |   true   |
| name                                         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new name of the cloned channel.      |   true   |
| returnID?                                    | [boolean](https://developer.mozilla.org/en-US/docs/Web/                                           |
| JavaScript/Reference/Global_Objects/Boolean) | If the function should return the ID of the newly created channnel.                               | false                                    |

**It won't clone any messages of that channel.**

## Example(s)

This will clone the current channel and name it "new channel":

```javascript
client.command({
  name: "cloneChannel",
  code: `
  $cloneChannel[$channelID;new channel;false]
  `,
});
```
