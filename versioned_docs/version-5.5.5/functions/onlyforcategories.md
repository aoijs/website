---
title: $onlyForCategories
description: Allows the command to be only executable in the given categories
---

This function only allows the command to be ran in the specified categories

```php
$onlyForCategories[categoryID;categoryID;...;error when not in given category]
```

```javascript
bot.command({
name: "special",
code: `Special Command
$onlyForCategories[773356383625150505;:x: Command not executable here]`
})
```

