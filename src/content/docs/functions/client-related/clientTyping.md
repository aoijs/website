---
title: $clientTyping
description: $clientTyping will make your bot type in a channel (show that it's typing).
id: clientTyping
---

`$clientTyping` will make your bot type in a channel (show that it's typing).

## Usage

```php
$clientTyping
```

## Example(s)

This will display your bot as typing and send "Hello!" as message:

```javascript
client.command({
  name: "clientTyping",
  code: `
  Hello!
  $clientTyping
  `,
});
```
