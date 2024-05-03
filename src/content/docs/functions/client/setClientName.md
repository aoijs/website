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

| Field    | Type                                                                                              | Description              | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| username | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new client username. |   true   |

## Example(s)

This will change the client's username to the command author's username:

```javascript
client.command({
    name: "setClientName",
    code: `
   $setClientName[$username[$authorID]]`
});
```
