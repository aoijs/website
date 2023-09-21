---
title: $clientPrefixes
description: $clientPrefixes will return the client prefix(es).
id: clientPrefixes
---

`$clientPrefixes` will return the client prefix(es).

## Usage

```php
$clientPrefixes
```

## Example(s)

This will return all your prefixes separated by a comma (`, `):

```javascript
client.command({
  name: "clientPrefixes",
  code: `
  $clientPrefixes
  `,
});
```
