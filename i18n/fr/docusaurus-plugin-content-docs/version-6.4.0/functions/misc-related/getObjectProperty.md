---
title: '$getObjectProperty'
description: '$getObjectProperty will return a object property of a given object.'
id: getObjectProperty
---

`$getObjectProperty` will return a object property of a given object.

## Usage

```php
$getObjectProperty[name]
```

## Parameters

| Field | Type   | Description                  | Required |
| ----- | ------ | ---------------------------- |:--------:|
| name  | string | Name of the object property. |   true   |

## Example(s)

This will return the object property of "hello" created in `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```