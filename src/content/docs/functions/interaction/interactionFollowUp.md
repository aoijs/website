---
title: $interactionFollowUp
description: $interactionFollowUp can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.
id: interactionFollowUp
---

`$interactionFollowUp` can be used for JSON requests, song information or playing tracks, since these things takes more
than 3 seconds.

## Usage

```php
$interactionFollowUp[content?;ephemeral?;returnID?]
```

## Parameters

| Field      | Type                                                                                                | Description                                                                          | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| content    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | New message content.                                                                 |   true   |
| ephemeral? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| returnID?  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return message ID? <br /> 1. **true** <br /> 2. **false** (default)                  |  false   |

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


```javascript
module.exports = [
  {
    name: "interactionFollowUp",
    type: "interaction",
    prototype: "slash",
    code: `
  $interactionFollowUp[Bye, world! {newEmbed:{title:Hello!}{description:This is an embed!}}]
  $interactionDefer[true]
  `
  },
];
```