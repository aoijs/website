---
title: $killClient
description: $killClient will forcefully shutdown your bot.
id: killClient
---

`$killClient` will forcefully shutdown your bot.

## Usage

```php
$killClient
```

## Example(s)

This will forcefully shutdown your bot:

```javascript
client.command({
  name: "killClient",
  code: `
    $killClient
    `,
});
```
