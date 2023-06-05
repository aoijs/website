---
title: Command Aliases
description: Setting up Aliases for your Commands.
---

### Usage:

```javascript
aliases: ['TEXT1','TEXT2']
```

```javascript
bot.command({
name: "name",
aliases: ['name2','name3'],
code: `code`
})
```
 
 

### Aliases in your `command.js` in commands folder:

### Example

```javascript
module.exports = ({
name: "ping",
aliases: ['pong','info'],
code: `$pingms`
})
```
 