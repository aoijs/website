---
title: '$httpRequest'
description: '$httpRequest either posts to or retrieves data from an API.'
id: httpRequest
---

`$httpRequest` either posts to or retrieves data from an API.

## प्रोयोग

```php
$httpRequest[URL;method;body?;property?;error?;...header?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                              |    चाहिए     |
| --------- | -------- | ----------------------------------------------------------------------------------------- |:------------:|
| URL       | स्ट्रिंग | URL you want to get/send data to/from.                                                    |     true     |
| method    | स्ट्रिंग | Method <br /> 1. **GET** (default) <br /> 2. **POST** <br /> 3. **PUT** |     true     |
| body?     | स्ट्रिंग | Content.                                                                                  | असत्य (नहीं) |
| property? | स्ट्रिंग | Property to return (get method).                                                          | असत्य (नहीं) |
| error?    | स्ट्रिंग | Error to return when request fails.                                                       | असत्य (नहीं) |
| ...header | स्ट्रिंग | Header.                                                                                   | असत्य (नहीं) |

## ट्रू (हा)

This will return a random dog fact using the `GET` method:

```javascript
bot.command({
    name: "httpRequest",
    code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```