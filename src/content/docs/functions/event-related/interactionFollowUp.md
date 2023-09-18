---
title: $interactionFollowUp
description: $interactionFollowUp can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.
id: interactionFollowUp
---

`$interactionFollowUp` can be used for JSON requests, song information or playing tracks, since these things takes more
than 3 seconds.

## Usage

```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]
```

## Parameters

| Field       | Type    | Description                                                                           | Required |
| ----------- | ------- | ------------------------------------------------------------------------------------- | :------: |
| content?    | string  | Message content.                                                                      |  false   |
| embeds?     | string  | Embed parser.                                                                         |  false   |
| components? | string  | Component parser.                                                                     |  false   |
| files?      | string  | File parser.                                                                          |  false   |
| ephemeral?  | boolean | vVisible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

```javascript
module.exports = [
  {
    name: "interactionFollowUp",
    type: "interaction",
    prototype: "slash",
    code: `
  $interactionFollowUp[Bye, world!]
  $interactionDefer[true]
  `,
  },
];
```
