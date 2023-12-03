---
title: $mentionedUsersCount
description: $mentionedUsersCount will return the amount of user mentions within a message.
id: mentionedUsersCount
---

`$mentionedUsersCount` will return the amount of user mentions within a message.

## Usage

```php
$mentionedUsersCount
```

## Example(s)

This will return the amount of user mentions in the given text:

```javascript
client.command({
  name: "mentionedUsersCount",
  code: `
  Amount of user mentions: $mentionedUsersCount
`
});
```
