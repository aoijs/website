---
title: $addEmoji
description: $addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.
id: addEmoji
---

`$addEmoji` will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one
of the provided role IDs.

## Usage

```php
$addEmoji[guildID;URL;name;returnEmoji?;reason?;...roles?]
```

## Parameters

| Field        | Type                                                                                              | Description                                              | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | :------: |
| guildID      | integer                                                                                           | guild ID                                                 |   true   |
| URL          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | valid image URL                                          |   true   |
| name         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | emoji name                                               |   true   |
| returnEmoji? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | return the created emoji?                                |  false   |
| reason?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | reason which will be displayed in the guild's audit logs |  false   |
| roles?       | integer                                                                                           | which roles will be able to use the given emoji          |  false   |

## Example(s)

This will create an emoji:

```javascript
client.command({
  name: "addEmoji",
  code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `,
});
```
