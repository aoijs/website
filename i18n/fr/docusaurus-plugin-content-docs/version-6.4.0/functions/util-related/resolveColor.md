---
title: '$resolveColor'
description: '$resolveColor will convert a given color to a given type.'
id: resolveColor
---

`$resolveColor` will convert a given color to a given type.

## Usage

```php
$resolveColor[type;returnAs?;...data]
```

## Parameters

| Field     | Type   | Description                                | Required |
| --------- | ------ | ------------------------------------------ |:--------:|
| type      | string | Which type the input is.                   |   true   |
| returnAs? | string | As what the color will be returned.        |  false   |
| ...data   | string | The data of the RGB or decimal color data. |   true   |

### Types

| Types   |                   | Returns     |
| ------- | ----------------- | ----------- |
| RGB     | red, green, blue  | 50, 168, 82 |
| decimal | hex color         | #32a852     |
| number  | hexadecimal color | 80          |

## Example(s)

This will return `#32a852` as `50, 168, 82` is the RGB value of it:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[rgb;decimal;50;168;82]
  `
});
```

This will return `50, 168, 82` as `#32a852` is the hex color of it:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[decimal;rgb;#32a852]
  `
});
```

This will return `3319890` as `#32a852` is the hex color of it:

```javascript
bot.command({
    name: 'resolveColor',
    code: `
  $resolveColor[decimal;number;#32a852]
  `
});
```