---
title: $messagePing
description: $messagePing will return the latency of the message.
id: messagePing
---

`$messagePing` will return the latency of the message.

## Usage

```php
$messagePing
```

## Example(s)

This will return the latency of your message:

```javascript
client.command({
  name: "messagePing",
  code: `
  $messagePing
  `
});
```
