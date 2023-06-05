---
title: $onlyIfMessageContains
description: Checks if value is in text
---

This function only allows a command to be ran if the all the values are in the &lt;text&gt;

```php
$onlyIfMessageContains[text;value1;value2;...;error when value isn't in text]
```

```javascript
bot.command({
name: "special",
code: `Special Command
$onlyIfMessageContains[Tick Tock on the clock and the party don't stop;Tick;Hole;The provided text does not have 'Tick' and 'Hole']`
})
```

