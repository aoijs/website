---
title: '$addObjectProperty'
description: '$addObjectProperty will add a property to an existing object.'
id: addObjectProperty
---

`$addObjectProperty` will add a property to an existing object.

## Usage

```php
$addObjectProperty[name;value]
```

## Parameters

| Field | Type   | Description            | Required |
| ----- | ------ | ---------------------- |:--------:|
| name  | string | Name of the property.  |   true   |
| value | string | Value of the property. |   true   |

## Example(s)

This will return `Ferel` from the `Leref` Property:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```
