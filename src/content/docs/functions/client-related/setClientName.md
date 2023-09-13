---
title: $setClientName
description: $setClientName will change the clients' Discord Username.
id: setClientName
---

`$setClientName` will change the clients' Discord Username.

## Usage

```php
$setClientName[username]
```

## Parameters

| Field    | Type   | Description              | Required |
| -------- | ------ | ------------------------ | :------: |
| username | string | The new client username. |   true   |

## Example(s)

This will change the client's username to the command author's username:

```javascript
bot.command({
  name: "setClientName",
  code: `
   $setClientName[$username[$authorID]]`,
});
```
