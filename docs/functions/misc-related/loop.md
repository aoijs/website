---
title: $loop
description: $loop will execute awaited commands a given amount of times.
id: loop
---

`$loop` will execute awaited commands a given amount of times.

## Usage

```php
$loop[time;awaitData;...awaitedCmds]
```

## Parameters

| Field          | Type   | Description                    | Required |
| -------------- | ------ | ------------------------------ | :------: |
| time           | string | How often to execute the loop. |   true   |
| awaitData      | object | Awaited Data.                  |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.   |   true   |