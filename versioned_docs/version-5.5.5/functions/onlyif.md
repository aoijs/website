---
title: $onlyIf
description: Checks if a condition is true
---

This function checks if the condition is true or not

```php
$onlyIf[value(!=/==/>=/<=/>/<)value2;error message]
```

### Examples:

`$onlyIf[value==value2;error message]`

`$onlyIf[value!=value2;error message]`

`$onlyIf[value&gt;value2;error message]`

`$onlyIf[value&lt;value2;error message]`

`$onlyIf[value&gt;=value2;error message]`

`$onlyIf[value&lt;=value2;error message]`



```javascript
bot.command({
name: "special",
code: `Special Command
$onlyIf[15==6;:x: 15 doesn't equal 6!]`
})
```

