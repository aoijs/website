---
title: $guildRandomID
description: $guildRandomID will return a random guild ID.
id: guildRandomID
---

`$guildRandomID` will return a random guild ID.

## Usage

```php
$guildRandomID
```

## Example(s)

This will return a random guild if of the guild's your bot is a member of:

```javascript
client.command({
    name: "guildRandomID",
    code: `
  $guildRandomID
  `
});
```
