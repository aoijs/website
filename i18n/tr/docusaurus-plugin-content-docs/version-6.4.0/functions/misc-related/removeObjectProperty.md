---
title: '$removeObjectProperty'
description: '$removeObjectProperty will remove a property of an object.'
id: removeObjectProperty
---

`$removeObjectProperty` will remove a property of an given object.

## Usage

```php
$removeObjectProperty[property;object]
```

## Parameters

| Field    | Type   | Description           | Required |
| -------- | ------ | --------------------- |:--------:|
| property | string | Name of the property. |   true   |
| object   | object | The object.           |   true   |

## Example(s)

This will remove `Ferel` from the given object:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```
