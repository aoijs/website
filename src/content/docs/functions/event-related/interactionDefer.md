---
title: $interactionDefer
description: $interactionDefer defers an Interaction of the last 15 minutes.
id: interactionDefer
---

`$interactionDefer` defers an Interaction of the last 15 minutes.

## Usage

```php
$interactionDefer[ephemeral]
```

## Parameters

| Field     | Type    | Description                         | Required |
| --------- | ------- | ----------------------------------- | :------: |
| ephemeral | boolean | Visible to the command author only? |   true   |

## Example(s)

```javascript
client.command({
  name: "exampleButton",
  type: "interaction",
  prototype: "button",
  code: `
   $interactionFollowUp[This is the second message!] 
   $interactionFollowUp[This is the first message!] 
   $interactionDefer[true]`,
});
```
