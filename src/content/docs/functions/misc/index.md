---
title: $index
description: $index will return the current index of a loop.
id: index
sidebar: 
  badge:
    text: New
    variant: tip
---

`$index` will return the current index of a loop.

## Usage

```php
$index
```

## Example(s)

This will create a loop and return the index, starting with `0` instead of `1`:

```js
client.command({
  name: "loop",
  code: `
    $loop[5;{ "channel": "$channelID" };index]
    `
});
```

We use `$index` to retrieve the current index:

```js
client.awaitedCommand({
  name: "index",
  code: `
    $channelSendMessage[$awaitData[channel];The current loop index is: $index]
    ` // returns 5 messages counting from 0 to 4
});
```