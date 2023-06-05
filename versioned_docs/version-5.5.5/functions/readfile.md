---
title: $readFile
description: Returns the contents of the provided file
---

This function simply returns the contents of the provided file.

Here is the usage:

```php
$readFile[(file location)]
```

Now lets get contents of a file.

```javascript
bot.command({
name: "read",
code: `
$readFile[config.json]
//This will send config.json contents in the channel.
`
})
```

Now lets get the contents of a file in directory.

```javascript
bot.command({
name: "read",
code: `
$readFile[config/text/data.json]
//This will send data.json contents in the channel.
`
})
```

