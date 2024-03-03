---
title: $disableMentionType
description: $disableMentionType will disable a specific mention type.
id: disableMentionType
---

`$disableMentionType` will disable a specific mention type.

## Usage

```php
$disableMentionType[type]
```

## Parameters

| Field | Type                                                                                              | Description                          | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| type  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Type of mention you want to disable. |   true   |

### Available Types

| Type     | Description                         |
| -------- | ----------------------------------- |
| everyone | `@everyone` and `@here` mentions.   |
| users    | All user mentions.                  |
| roles    | All role mentions.                  |
| all      | Roles, users and any other mention. |

## Example(s)

This will stop the bot from mentioning you:

```javascript
client.command({
  name: "mention",
  code: `
<@$authorID>
$disableMentionType[users] 
  `
});
```

This will stop the bot from mentioning anyone or anything:

```javascript
client.command({
  name: "mention",
  code: `
<@$authorID>
$disableMentionType[all] 
  `
});
```
