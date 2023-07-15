---
title: '$interactionFollowUp'
description: '$interactionFollowUp can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.'
id: interactionFollowUp
---

`$interactionFollowUp` can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.

## الاستخدام

```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                                               | مطلوب |
| ----------- | ------- | -------------------------------------------------------------------------- |:-----:|
| content?    | string  | Message content.                                                           | false |
| embeds?     | string  | Embed parser.                                                              | false |
| components? | string  | Component parser.                                                          | false |
| files?      | string  | File parser.                                                               | false |
| ephemeral?  | boolean | vVisible to the command author only? <br /> 1. true. false (default) | false |

## مثال

```javascript
bot.interactionCommand({
    name: "interactionFollowUp",
    prototype: "slash",
    code: `
  $interactionFollowUp[Bye, world!]
  $interactionDefer[true]
  `
});
```
