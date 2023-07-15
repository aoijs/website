---
title: '$jsonRequest'
description: '$jsonRequest will send a GET request to a given URL.'
id: jsonRequest
---

`$jsonRequest` will send a GET request to a given URL.

## الاستخدام

```php
$jsonRequest[URL;property?;error?;...header?]
```

## البارامترات

| Field     | النوع  | الديسكبربشين                          | مطلوب |
| --------- | ------ | ------------------------------------- |:-----:|
| URL       | string | URL you want to get/send data to/from | true  |
| property? | string | Property to return (get method)       | false |
| error?    | string | Error to return when request fails    | false |
| ...header | string | Header.                               | false |

## مثال

This will return a random dog fact:

```javascript
bot.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```