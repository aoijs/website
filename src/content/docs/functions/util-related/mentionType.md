---
title: $mentionType
description: $mentionType will return the type of the mention.
id: mentionType
---

`$mentionType` will return the type of the mention.

## Usage

```php
$mentionType[content]
```

## Parameters

| Field   | Type                                                                                              | Description                                      | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The mention whose mention type will be returned. |   true   |

<details>
  <summary> <h3> Mention Types </h3></summary>

| Type     | Description                       |
| -------- | --------------------------------- |
| everyone | `@everyone` and `@here` mentions. |
| users    | All user mentions.                |
| roles    | All role mentions.                |
| all      | Everything listed above.          |

</details>

## Example(s)

This will return `users` as you're an user:

```javascript
client.command({
  name: "mentionType",
  code: `
  $mentionType[<@$authorID>]
  `,
});
```
