---
title: $deafenUser
description: $deafenUser will deafen a user.
id: deafenUser
---

`$deafenUser` will deafen a user.

## Usage

```php
$deafenUser[userID;deafen?]
```

## Parameters

| Field   | Type                                                                                                | Description                                                                         | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | :------: |
| userID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The user who will be deafened or undeafened.                                        |   true   |
| deafen? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Deafen or Undeafen the given user. <br /> 1. **true** (default) <br /> 2. **false** |  false   |

## Example(s)

This will deafen yourself:

```javascript
client.command({
  name: "deafen",
  code: `
  $deafen[$authorID;true]
  `
});
```
