---
title: $httpRequest
description: $httpRequest either posts to or retrieves data from an API.
id: httpRequest
---

`$httpRequest` either posts to or retrieves data from an API.

## Usage

```aoi
$httpRequest[URL;method;body?;property?;error?;...header?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                             | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | :------: |
| URL       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | URL you want to get/send data to/from.                                  |   true   |
| method    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Method <br /> 1. **GET** (default) <br /> 2. **POST** <br /> 3. **PUT** |   true   |
| body?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Content.                                                                |  false   |
| property? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Property to return (get method).                                        |  false   |
| error?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return when request fails.                                     |  false   |
| ...header | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Header.                                                                 |  false   |

## Example(s)

This will return a random dog fact using the `GET` method:

```javascript
client.command({
    name: "httpRequest",
    code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```
