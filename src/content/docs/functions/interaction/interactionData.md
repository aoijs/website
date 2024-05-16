---
title: $interactionData
description: $interactionData will return given arguments of an interaction.
id: interactionData
---

`$interactionData` will return given arguments of an interaction.

## Usage

```php
$interactionData[data]
```

## Parameters

| Field | Type                                                                                              | Description       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| data  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Data to retrieve. |   true   |

## Example(s)

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

```php
$interactionData[channel.id]
// returns the channel ID of the interaction.
```

That are just a few example, there are a lot more.
