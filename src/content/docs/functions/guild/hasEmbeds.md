---
title: $hasEmbeds
description: $hasEmbeds will check if there are embeds attached to the message.
id: hasEmbeds
---

`$hasEmbeds` will check if there are embeds attached to the message.

## Usage

```php
$hasEmbeds[messageID;channelID]
```

## Parameters

| Field     | Type                                                                                              | Description                                         | Required |
| --------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- | :------: |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the message to check if it contains an embed. |   true   |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel where the message is located in.  |   true   |

## Example(s)

This will return `false` as there are no embeds attached to your message:

```javascript
client.command({
    name: "hasEmbeds",
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```
