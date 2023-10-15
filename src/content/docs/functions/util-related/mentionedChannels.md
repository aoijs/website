---
title: $mentionedChannels
description: $mentionedChannels will return the ID of a channel retrieved from the mention.
id: mentionedChannels
---

`$mentionedChannels` will return the ID of a channel retrieved from the mention.

## Usage

```php
$mentionedChannels[index;returnSelf?]
```

## Parameters

| Field                                        | Type                                                                                              | Description                | Required |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- | :------: |
| index                                        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The index of the argument. |   true   |
| returnSelf?                                  | [boolean](https://developer.mozilla.org/en-US/docs/Web/                                           |
| JavaScript/Reference/Global_Objects/Boolean) | Return the ID of the channel where the command was executed in when channel was not found.        | false                      |

## Example(s)

This will return the ID of the **first** mention if you attempt to mention any channel in this command, or else it will
return the channel ID of the channel where the command was executed in:

```javascript
client.command({
  name: "mentionedChannels",
  code: `
  $mentionedChannels[1;true]
  `,
});
```
