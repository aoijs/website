---
title: $nodeVersion
description: Returns Node.js version.
---

This function returns the current Node.js verion the server is using.

#### Example Command:

The function would return `v18.4.0` as example.

```javascript
bot.command({
name: "node",
code: `
current version: $nodeVersion
`
})
```

