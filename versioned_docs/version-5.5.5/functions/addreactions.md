---
title: $addReactions
description: Add reactions to bot's message.
id: addreactions
---

`$addReactions` allows to add reactions to bot's response.

## Usage

```php
$addReactions[emoji;...]
```

## Parameters

| Field | Description | Type |
| :--- | :--- | :--- | 
| emoji | The emoji going to be reacted on bot's response | string | 


## Example

This will add a reaction to bot's response.

```javascript
bot.command({
  name: "add-reactions",
  code: `
  $addReactions[🌸;🌺]
  
  Hi, take a flower.
  `
});
```

