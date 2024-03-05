---
title: $clientID
description: $clientID will return the client's Discord User ID.
id: clientID
---

`$clientID` will return the client's Discord User ID.

## Usage

```php
$clientID
```

## Example(s)

This will return the client's ID:

```javascript
client.command({
  name: "clientID",
  code: `
  $clientID
  `
});
```
