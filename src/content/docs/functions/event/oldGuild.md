---
title: $oldGuild
description: $oldGuild holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (guildUpdate event)
id: oldGuild
---

`$oldGuild` holds data for the guild before it was updated, this is from discord cache and might be empty depending on
whether it's cached, so use partial option before attempting to access any property. (guildUpdate event)

## Usage

```php
$oldGuild[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |
