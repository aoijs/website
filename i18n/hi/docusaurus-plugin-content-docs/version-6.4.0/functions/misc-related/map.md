---
title: '$map'
description: '$map will execute awaited commands for given elements.'
id: map
---

`$map` will execute awaited commands for given elements.

## प्रोयोग

```php
$map[text;split;awaitedCmds;sep?]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन                 |    चाहिए     |
| ----------- | -------- | ---------------------------- |:------------:|
| text        | स्ट्रिंग | Text.                        |     true     |
| split       | स्ट्रिंग |                              |     true     |
| awaitedCmds | स्ट्रिंग | Awaited Commands to execute. |     true     |
| sep?        | स्ट्रिंग | Separator.                   | असत्य (नहीं) |