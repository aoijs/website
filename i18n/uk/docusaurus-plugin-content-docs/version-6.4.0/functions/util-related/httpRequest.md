---
title: '$httpRequest'
description: '$httpRequest either posts to or retrieves data from an API.'
id: httpRequest
---

`$httpRequest` either posts to or retrieves data from an API.

## Використання

```php
$httpRequest[URL;method;body?;property?;error?;...header?]
```

## Параметри

| Поле      | Тип   | Опис                                                                                      | Обов'язковий |
| --------- | ----- | ----------------------------------------------------------------------------------------- |:------------:|
| URL       | рядок | URL you want to get/send data to/from.                                                    |     так      |
| method    | рядок | Method <br /> 1. **GET** (default) <br /> 2. **POST** <br /> 3. **PUT** |     так      |
| body?     | рядок | Content.                                                                                  |      ні      |
| property? | рядок | Property to return (get method).                                                          |      ні      |
| error?    | рядок | Error to return when request fails.                                                       |      ні      |
| ...header | рядок | Header.                                                                                   |      ні      |

## Приклад(и)

This will return a random dog fact using the `GET` method:

```javascript
bot.command({
    name: "httpRequest",
    code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```