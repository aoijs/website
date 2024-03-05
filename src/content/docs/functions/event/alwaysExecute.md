---
title: $alwaysExecute
description: $alwaysExecute will always emit when a message event is triggered
id: alwaysExecute
---

`$alwaysExecute` will always emit when a message event is triggered.

## Usage

```php
$alwaysExecute
```

## Example(s)

This will send the given message each time you send a message:

```javascript
client.command({
  name: "$alwaysExecute",
  code: `Hello!`
});
```
