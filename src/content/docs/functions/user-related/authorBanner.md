---
title: $authorBanner
description: $authorBanner will return the banner of the command author.
id: authorBanner
---

`$authorBanner` will return the banner of the command author.

## Usage

```php
$authorBanner[size?;dynamic?;extension?]
```

## Parameters

| Field                                        | Type                                                                                                                                                                                                 | Description                       | Required |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | :------: |
| size?                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The size of the image             |  false   |
| dynamic?                                     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  |
 1. **true** (default) <br /> 2. **false**                                                                                                                                                            | false                             |
| extension?                                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The format of the returned image. |  false   |

## Example(s)

This will return your banner (if any):

```javascript
client.command({
  name: "authorBanner",
  code: `
  $authorBanner[2048;true;webp]
  `,
});
```
