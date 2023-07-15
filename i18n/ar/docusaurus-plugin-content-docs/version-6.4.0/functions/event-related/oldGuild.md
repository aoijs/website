---
title: '$oldGuild'
description: '$oldGuild holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it''s cached, so use partial option before attempting to access any property. (guildUpdate event)'
id: oldGuild
---

`$oldGuild` holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (guildUpdate event)

## الاستخدام

```php
$oldGuild[option]
```

## البارامترات

| Field  | النوع  | الديسكبربشين        | مطلوب |
| ------ | ------ | ------------------- |:-----:|
| option | string | Option to retrieve. | true  |