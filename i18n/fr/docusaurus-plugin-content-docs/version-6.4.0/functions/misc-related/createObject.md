---
title: '$createObject'
description: '$createObject will create a new object.'
id: createObject
---

`$createObject` will create a new object.

## Usage

```php
$createObject[object]
```

## Parameters

| Field  | Type   | Description  | Required |
| ------ | ------ | ------------ |:--------:|
| object | object | Json object. |   true   |

## Example(s)

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```