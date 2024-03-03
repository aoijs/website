---
title: $interactionDeferUpdate
description: $interactionDeferUpdate defers the interaction message that will be updated.
id: interactionDeferUpdate
---

`$interactionDeferUpdate` defers the interaction message that will be updated.

## Usage

```php
$interactionDeferUpdate[ephemeral]
```

## Parameters

| Field     | Type                                                                                                | Description                         | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| ephemeral | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Visible to the command author only? |   true   |

## Example(s)

```javascript
client.command({
  name: "exampleButton",
  type: "interaction",
  prototype: "button",
  code: ` 
   $interactionFollowUp[This is the first message!]
   $interactionEdit[This is the second message!]
   $interactionDeferUpdate[true]`
});
```
