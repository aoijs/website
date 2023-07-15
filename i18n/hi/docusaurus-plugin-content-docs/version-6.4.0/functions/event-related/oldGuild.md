---
title: '$oldGuild'
description: '$oldGuild holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it''s cached, so use partial option before attempting to access any property. (guildUpdate event)'
id: oldGuild
---

`$oldGuild` holds data for the guild before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (guildUpdate event)

## प्रोयोग

```php
$oldGuild[option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन        | चाहिए |
| ------ | -------- | ------------------- |:-----:|
| option | स्ट्रिंग | Option to retrieve. | true  |