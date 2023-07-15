---
title: '$interactionData'
description: '$interactionData will return given arguments of an interaction.'
id: interactionData
---

`$interactionData` will return given arguments of an interaction.

## الاستخدام

```php
$interactionData[data]
```

## البارامترات

| Field | النوع  | الديسكبربشين      | مطلوب |
| ----- | ------ | ----------------- |:-----:|
| data  | string | Data to retrieve. | true  |

## مثال

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