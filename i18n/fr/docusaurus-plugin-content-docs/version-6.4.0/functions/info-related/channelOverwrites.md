---
title: '$channelOverwrites'
description: '$channelOverwrites will return the given channel''s overwrites.'
id: channelOverwrites
---

`$channelOverwrites` will return the given channel's overwrites.

## Usage

```php
$channelOverwrites[channelID?;response?;sep?]
```

## Parameters

| Field      | Type    | Description                                                          | Required |
| ---------- | ------- | -------------------------------------------------------------------- |:--------:|
| channelID? | integer | ID of the channel you want the channel overwrites of.                |  false   |
| response?  | string  | The format the channel overwrites will be returned in.               |  false   |
| sep?       | string  | The separator to split the channel overwrites if there are multiple. |  false   |

|    Type     | Output                         |
|:-----------:| ------------------------------ |
| `{mention}` | Mentions the role or user      |
|  `{type}`   | Returns the type, user or role |
|  `{allow}`  | The granted permissions        |
|  `{deny}`   | The denied permissions         |

## Example(s)

This will return the channel overwrites of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelOverwrites',
    code: `
  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]
  `
});
```