---
title: '$editIn'
description: '$editIn will edit a message after a given time.'
id: editIn
---

`$editIn` will edit a message after a given time.

## Usage

```php
$editIn[time;...content]
```

## Parameters

| Field   | Type           | Description                                     | Required |
| ------- | -------------- | ----------------------------------------------- |:--------:|
| time    | string, number | After how much time the message will be edited. |   true   |
| content | string         | What the new content of the message should be.  |   true   |

## Example(s)

This will edit the sent message after five seconds:

```javascript
bot.command({
    name: 'editIn',
    code: `
  $editIn[5s;aoi.js is great, don't you agree?;Yes, I do!]
  I'll edit this message in 5 seconds!
  `
});
```
