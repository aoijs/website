---
title: '$jsonRequest'
description: '$jsonRequest will send a GET request to a given URL.'
id: jsonRequest
---

`$jsonRequest` will send a GET request to a given URL.

## प्रोयोग

```php
$jsonRequest[URL;property?;error?;...header?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                          |    चाहिए     |
| --------- | -------- | ------------------------------------- |:------------:|
| URL       | स्ट्रिंग | URL you want to get/send data to/from |     true     |
| property? | स्ट्रिंग | Property to return (get method)       | असत्य (नहीं) |
| error?    | स्ट्रिंग | Error to return when request fails    | असत्य (नहीं) |
| ...header | स्ट्रिंग | Header.                               | असत्य (नहीं) |

## ट्रू (हा)

This will return a random dog fact:

```javascript
bot.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```