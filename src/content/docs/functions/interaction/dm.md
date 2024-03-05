---
title: $dm
description: $dm will send a message to an users Direct Messages.
id: dm
---

`$dm` will send a message to an users Direct Messages.

## Usage

```php
$dm[userID]
```

## Parameters

| Field  | Type                                                                                              | Description                          | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| userID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user which shall receive the DM. |   true   |

**Important**:

- You are unable to DM other bots.
- You are unable to DM people who closed their DMs.

## Example(s)

This will send an DM to you containing "Hello! Did you really think this works?":

```javascript
client.command({
  name: "dm",
  code: `
  Hello! Did you really think this works?
  $dm[$authorID]
  `
});
```
