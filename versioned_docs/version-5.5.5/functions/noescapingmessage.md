---
title: $noEscapingMessage
description: Special characters won't be replaced
---

This function makes it so special characters won't be escaped

```php
$noEscapingMessage[arg number (optional)]
```

```javascript
/*
How to escape a character:
by adding \ infront
example:
\]
*/


bot.command({
name: "noescapemessage",
code: `$title[Brackets[\]]
$noEscapingMessage`
})

/*
So basically $noEscapingMessage will ignore the '\'
*/
```

