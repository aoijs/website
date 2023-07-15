---
title: '$getApplicationCommandOptions'
description: '$getApplicationCommandOptions will return application options of a given application command.'
id: getApplicationCommandOptions
---

`$getApplicationCommandOptions` will return the ID of a given application command.

## प्रोयोग

```php
$getApplicationCommandOptions[name;type?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                                                                   |    चाहिए     |
| ----- | -------- | -------------------------------------------------------------------------------------------------------------- |:------------:|
| name  | स्ट्रिंग | Name of the application command.                                                                               |     true     |
| टाइप? | स्ट्रिंग | Application command type. <br /> 1. **global** (default) <br /> 2. **guildID** (specific guild ID) | असत्य (नहीं) |