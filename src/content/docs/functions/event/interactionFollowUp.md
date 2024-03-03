---
title: $interactionFollowUp
description: $interactionFollowUp can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.
id: interactionFollowUp
---

`$interactionFollowUp` can be used for JSON requests, song information or playing tracks, since these things takes more
than 3 seconds.

## Usage

```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?;returnID?]
```

## Parameters

| Field       | Type                                                                                                | Description                                                                          | Required |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| content?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Message content.                                                                     |  false   |
| embeds?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Embed parser.                                                                        |  false   |
| components? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Component parser.                                                                    |  false   |
| files?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | File parser.                                                                         |  false   |
| ephemeral?  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| returnID?  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return message ID? <br /> 1. **true** <br /> 2. **false** (default) |  false   |

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
  `
  },
];
```
