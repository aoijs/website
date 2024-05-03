---
title: $interactionEdit
description: $interactionEdit will return edit an interaction.
id: interactionEdit
---

`$interactionEdit` will return edit an interaction.

## Usage

```php
$interactionEdit[content;allowedMentions?]
```

## Parameters

| Field            | Type                                                                                              | Description                                                                      | Required |
| ---------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | :------: |
| content          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New message content.                                                             |   true   |
| allowedMentions? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Allowed mentions? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users** |  false   |

## Example(s)

```javascript
module.exports = [
    {
        name: "interactionEdit",
        type: "interaction",
        prototype: "slash",
        code: ` $interactionEdit[Bye, World!]`
    }
];
```

```javascript
module.exports = [
    {
        name: "interactionEdit",
        type: "interaction",
        prototype: "slash",
        code: ` $interactionEdit[Bye, World! {newEmbed:{title:Hello!}{description:This is an embed!}}]`
    }
];
```
