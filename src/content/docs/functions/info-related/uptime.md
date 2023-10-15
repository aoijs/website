---
title: $uptime
description: $uptime will return the bot's uptime.
id: uptime
---

`$uptime` will return the bot's uptime.

## Usage

```php
$uptime[option?]
```

## Parameters

| Field   | Type                                                                                              | Description                                     | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| option? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How the uptime will be returned (listed below). |  false   |

| Option             | Output                 |
| ------------------ | ---------------------- |
| full **(default)** | 19 minutes, 21 seconds |
| humanize           | 19m 21s                |
| ms                 | 1165980                |

## Example(s)

This will return the time of how long your bot is online for:

```javascript
client.command({
  name: "uptime",
  code: `
  I've been up for $uptime[full]!
  `,
});
```
