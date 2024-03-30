---
title: $comment
description: $comment will add text to your code without executing it.
id: comment
---

`$comment` will add text to your code without executing it.

## Usage

```php
$comment[content]
```

## Parameters

| Field   | Type                                                                                                | Description                         | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The text that will be commented on. |   true   |

## Example(s)

This will only return "Hello!":

```js
client.command({
  name: "hi",
  code: `Hello!
  $comment[This is a comment!]`
});
```
