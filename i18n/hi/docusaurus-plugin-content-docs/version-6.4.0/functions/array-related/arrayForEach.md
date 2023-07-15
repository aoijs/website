---
title: '$arrayForEach'
description: '$arrayForEach will execute an awaited command for each item in the array.'
id: arrayForEach
---

`$arrayForEach` will execute an awaited command for each item in the array.

## प्रोयोग

```php
$arrayForEach[name;awaitedCommand;awaitData?]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                 |    चाहिए     |
| -------------- | -------- | ---------------------------- |:------------:|
| name           | स्ट्रिंग | Array name.                  |     true     |
| awaitedCommand | स्ट्रिंग | Awaited command to executed. |     true     |
| awaitData?     | स्ट्रिंग | Awaited Data.                | असत्य (नहीं) |