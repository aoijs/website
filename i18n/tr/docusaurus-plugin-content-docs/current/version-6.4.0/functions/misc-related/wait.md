---
title: '$wait'
description: '$wait will delay functions from executing for a given time.'
id: wait
---

`$wait` will delay functions from executing for a given time.

## Usage

```php
$wait[time]
```

## Parameters

| Field | Type           | Description                      | Required |
| ----- | -------------- | -------------------------------- |:--------:|
| time  | string, number | How long to delay the execution. |   true   |

## Example(s)

This will send an embed delayed:

```javascript
bot.command({
    name: "wait",
    code: `
    $description[Hello!]
    $wait[5s]
    $sendMessage[Oh, what's that?]
    `
});
```