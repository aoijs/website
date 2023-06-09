---
title: $forEachMember
description: $forEachMember will execute awaited commands for user within the current guild.
id: forEachMember
---

`$forEachMember` will execute awaited commands for user within the current guild.

## Usage

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field          | Type   | Description                                                | Required |
| -------------- | ------ | ---------------------------------------------------------- | :------: |
| time           | string | How long it takes between each member to execute the next. |   true   |
| awaitData      | object | Awaited Data.                                              |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.                               |   true   |
| endCmd         | string | Awaited command to execute when loop ends.                 |   true   |