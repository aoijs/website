---
title: '$interactionData'
description: '$interactionData will return given arguments of an interaction.'
id: interactionData
---

`$interactionData` will return given arguments of an interaction.

## प्रोयोग

```php
$interactionData[data]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन      | चाहिए |
| ----- | -------- | ----------------- |:-----:|
| data  | स्ट्रिंग | Data to retrieve. | true  |

## ट्रू (हा)

```php
$interactionData[customId]
// returns the custom ID of the interaction.
```

```php
$interactionData[author.id]
// returns the author ID of the interaction.
```

```php
$interactionData[message.id]
// returns the message ID of the interaction.
```

That are just a few example, there are a lot more.