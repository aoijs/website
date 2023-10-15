---
title: $editIn
description: $editIn will edit a message after a given time.
id: editIn
---

`$editIn` will edit a message after a given time.

## Usage

```php
$editIn[time;...content]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                                     | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| time    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | After how much time the message will be edited. |   true   |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | What the new content of the message should be.  |   true   |

## Example(s)

This will edit the sent message after five seconds:

```javascript
client.command({
  name: "editIn",
  code: `
  $editIn[5s;aoi.js is great, don't you agree?;Yes, I do!]
  I'll edit this message in 5 seconds!
  `,
});
```
