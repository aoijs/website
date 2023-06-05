---
title: $queue
description: Returns queue of songs
---

This function returns the queue of songs

```php
$queue or $queue[page;amount;{number} - {title} by <@{userID}>]
```

> Available Options: {title} - Title of song, {url} - URL of song, {number} - Position in queue, {userID} - User who added song

```javascript
bot.command({
name: "queue",
code: `$queue[1;10;{number} - {title} by <@{userID}>]`
})
```

