---
title: $mentionedRolesCount
description: $mentionedRolesCount will return the amount of role mentions within a message.
id: mentionedRolesCount
---

`$mentionedRolesCount` will return the amount of role mentions within a message.

## Usage

```aoi
$mentionedRolesCount
```

## Example(s)

This will return the amount of role mentions in the given text:

```javascript
client.command({
    name: "mentionedRolesCount",
    code: `
  You have: $mentionedRolesCount role mentions in your message!
`
});
```
