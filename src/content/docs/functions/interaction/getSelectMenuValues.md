---
title: $getSelectMenuValues
description: $getSelectMenuValues returns the value of an option from select menu.
id: getSelectMenuValues
---

`$getSelectMenuValues` returns the value of an option from select menu.

## Usage

```php
$getSelectMenuValues[index?;sep?]
```

## Parameters

| Field  | Type                                                                                                                                                                                                 | Description                                                                                                                                 | Required |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| index? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The option index from where the value will be fetched.<br>1. **all** - returns the value of all options.<br>2. **any number** (default `1`) |  false   |
| sep?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Separator for returned values. (default `,`)                                                                                                |  false   |

## Example(s)

This will return the ID of all selected users from the option, delimited by comma (`,`):

```js
client.command({
    name: "select-menu",
    code: `
  Select a user.
  $addSelectMenu[1;user;yourCustomID;This is a placeholder!;1;5;false]`
});

client.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `$interactionReply[$getSelectMenuValues[all;,]]`
});
```
