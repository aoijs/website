---
title: '$interactionFollowUp'
description: '$interactionFollowUp can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.'
id: interactionFollowUp
---

`$interactionFollowUp` can be used for JSON requests, song information or playing tracks, since these things takes more than 3 seconds.

## प्रोयोग

```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन                                                                                      |    चाहिए     |
| ----------- | -------- | ------------------------------------------------------------------------------------------------- |:------------:|
| content?    | स्ट्रिंग | Message content.                                                                                  | असत्य (नहीं) |
| embeds?     | स्ट्रिंग | Embed parser.                                                                                     | असत्य (नहीं) |
| components? | स्ट्रिंग | Component parser.                                                                                 | असत्य (नहीं) |
| files?      | स्ट्रिंग | File parser.                                                                                      | असत्य (नहीं) |
| ephemeral?  | boolean  | vVisible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

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
