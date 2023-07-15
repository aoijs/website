---
title: '$interactionData'
description: '$interactionData will return given arguments of an interaction.'
id: interactionData
---

`$interactionData` will return given arguments of an interaction.

## Використання

```php
$interactionData[data]
```

## Параметри

| Поле | Тип   | Опис              | Обов'язковий |
| ---- | ----- | ----------------- |:------------:|
| data | рядок | Data to retrieve. |     так      |

## Приклад(и)

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