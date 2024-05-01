---
title: $referenceUserId
description: $referenceUserId will return the referenced user of a replied message.
id: referenceUserId
---

`$referenceUserId` will return the referenced user of a replied message.

## Usage

```php
$referenceUserId
```

## Example(s)

This will return the user ID of whoever you replied to:

```js
client.command({
    name: "referenceUserId",
    code: `
    $referenceUserId
    `
});
```
