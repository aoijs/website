---
title: $inviteEventInfo
description: $inviteEventInfo returns the inviteSystem event's information
id: inviteEventInfo
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.invite installed.

:::

`$inviteEventInfo` will return the inviteSystem event's information

## Usage

```php
$inviteEventInfo[field[options]]
```

## Parameters

| Parameter | Description | Type   | Required |
| --------- | ----------- | ------ | -------- |
| options   | The options | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Returns the inviteSystem event's information

```javascript
$inviteEventInfo
//or

$inviteEventInfo[inviter]
//or

$getObjectProperty[name;inviter]
$createObject[name;$inviteEventInfo]
```
