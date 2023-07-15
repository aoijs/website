---
title: '$jsonRequest'
description: '$jsonRequest will send a GET request to a given URL.'
id: jsonRequest
---

`$jsonRequest` will send a GET request to a given URL.

## Використання

```php
$jsonRequest[URL;property?;error?;...header?]
```

## Параметри

| Поле      | Тип   | Опис                                  | Обов'язковий |
| --------- | ----- | ------------------------------------- |:------------:|
| URL       | рядок | URL you want to get/send data to/from |     так      |
| property? | рядок | Property to return (get method)       |      ні      |
| error?    | рядок | Error to return when request fails    |      ні      |
| ...header | рядок | Header.                               |      ні      |

## Приклад(и)

This will return a random dog fact:

```javascript
bot.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```