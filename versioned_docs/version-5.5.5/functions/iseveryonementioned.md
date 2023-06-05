---
title: $isEveryoneMentioned
description: Returns true/false if @everyone was mentioned in the command.
---

With this function you can check if `@everyone` was mentioned in the command's message.

Raw usage: `$isEveryoneMentioned`

#### Example Command:

```javascript
bot.command({
name: "everyonementioned",
code: `
Everyone mentioned? $isEveryoneMentioned
? 
})
```

