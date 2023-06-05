---
title: $timezone
---

This function sets the time zone to all date related functions for the current command

```php
$timezone[timezone]
```

```javascript
bot.command({
name: "time", 
code: `
$hour:$minute:$second
$timezone[America/New_York]
`
})
```

