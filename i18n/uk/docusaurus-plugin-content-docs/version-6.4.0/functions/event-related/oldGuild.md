---
title: '$oldGuild'
description: '$oldGuild holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it''s cached, so use partial option before attempting to access any property. (guildUpdate event)'
id: oldGuild
---

`$oldGuild` holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (guildUpdate event)

## Використання

```php
$oldGuild[option]
```

## Параметри

| Поле   | Тип   | Опис                | Обов'язковий |
| ------ | ----- | ------------------- |:------------:|
| option | рядок | Option to retrieve. |     так      |