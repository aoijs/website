---
title: $jsonRequest
description: $jsonRequest will send a GET request to a given URL.
id: jsonRequest
---

`$jsonRequest` will send a GET request to a given URL.

## Usage

```aoi
$jsonRequest[URL;property?;error?;...header?]
```

## Parameters

| Field     | Type                                                                                              | Description                           | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------- | :------: |
| URL       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | URL you want to get/send data to/from |   true   |
| property? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Property to return (get method)       |  false   |
| error?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return when request fails    |  false   |
| ...header | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Header.                               |  false   |

## Example(s)

This will return a random dog fact:

```javascript
client.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```
