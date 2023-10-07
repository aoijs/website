---
title: $channelSendMessage
description: $channelSendMessage will send a message in a specific channel.
id: channelSendMessage
---

`$channelSendMessage` will send a message in a specific channel.

## Usage

```php
$channelSendMessage[channelID;content;returnID?]
```

## Parameters

| Field     | Type    | Description                                                                                   | Required |
| --------- | ------- | --------------------------------------------------------------------------------------------- | :------: |
| channelID | integer | Where the messages shall be sent to.                                                          |   true   |
| content   | string  | What the content of the message should be.                                                    |   true   |
| returnID? | boolean | If the message ID should be returned or not. <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will send "Hello!" to the current channel:

```javascript
client.command({
  name: "channelSendMessage",
  code: `
  $channelSendMessage[$channelID;Hello!;false]
  `
});
```

### Embeds

This will send an embed with description and footer to the current channel:

```javascript
client.command({
  name: "channelSendMessage",
  code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]
  `
});
```
