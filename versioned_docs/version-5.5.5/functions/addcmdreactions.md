---
title: $addCmdReactions
description: $addCmdReactions allows you to add reactions to a command.
id: addcmdreactions
---

`$addCmdReactions` adds single or multiple reactions to author's message.

## Usage

```php
$addCmdReactions[emoji;emoji;...]
```

## Parameters

| Field | Description | Type |
| :--- | :--- | :--- |
| emoji | A default Discord emoji or a custom emoji with ID | string |

## Custom Emoji Information

### Animated emoji ID

`<a:emoji:1234567890>`

### Static emoji ID

`<:emoji:1234567890>`

## Examples

### With custom emoji:

This adds emojis to author's message.

```javascript
bot.command({
  name: "add-cmd-reactions",
  code: `
  $addCmdReactions[<:mns_neoXD:961249981107413022>;<:mns_lolie:966349758203559977>]
  `
});
```

### With default emoji

This also adds emojis to author's message as well.

```javascript
bot.command({
  name: "add-cmd-reactions",
  code: `
  $addCmdReactions[😋;🤠]
  `
});
```

