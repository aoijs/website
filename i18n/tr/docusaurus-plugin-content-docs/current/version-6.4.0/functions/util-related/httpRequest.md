---
title: '$httpRequest'
description: '$httpRequest either posts to or retrieves data from an API.'
id: httpRequest
---

`$httpRequest` either posts to or retrieves data from an API.

## Usage

```php
$httpRequest[URL;method;body?;property?;error?;...header?]
```

## Parameters

| Field     | Type   | Description                                                                               | Required |
| --------- | ------ | ----------------------------------------------------------------------------------------- |:--------:|
| URL       | string | URL you want to get/send data to/from.                                                    |   true   |
| method    | string | Method <br /> 1. **GET** (default) <br /> 2. **POST** <br /> 3. **PUT** |   true   |
| body?     | string | Content.                                                                                  |  false   |
| property? | string | Property to return (get method).                                                          |  false   |
| error?    | string | Error to return when request fails.                                                       |  false   |
| ...header | string | Header.                                                                                   |  false   |

## Example(s)

This will return a random dog fact using the `GET` method:

```javascript
bot.command({
    name: "httpRequest",
    code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```