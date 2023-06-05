---
title: $globalUserLeaderboard
description: A global Leaderboard, with all Guilds.
---

This function returns a user leaderboard for a global user variable

```php
$globalUserLeaderboard[variable;asc/dec (optional);{top} - {username} - {value}]
```

asc - The values will be from greatest to least \(top to bottom\)

desc - The values will be from least to greatest \(bottom to top\)

{top} - Their leaderboard position \(1./2./3./etc\)

{username} - The users username

{value} - The users value of the given var

```javascript
bot.command({
name: "topcash", 
code: `
$globalUserLeaderboard[cash]
})
```

