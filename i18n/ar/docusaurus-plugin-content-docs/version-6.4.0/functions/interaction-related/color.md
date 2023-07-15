---
title: '$color'
description: '$color will change the color of an embed.'
id: color
---

`$color` will change the color of an embed

## الاستخدام

```php
$color[index?;hex]
```

## البارامترات

| Field  | النوع   | الديسكبربشين                                              | مطلوب |
| ------ | ------- | --------------------------------------------------------- |:-----:|
| index? | Integer | The embed index.                                          | false |
| hex    | string  | The hex color or color name (supported colornames below). | true  |

<details>
  <summary><h3> Embed Colors </h3></summary>

![c](https://placehold.co/15x15/000000/000000.png) Default <br /> ![c](https://placehold.co/15x15/FFFFFF/FFFFFF.png) White <br /> ![c](https://placehold.co/15x15/1ABC9C/1ABC9C.png) Aqua <br /> ![c](https://placehold.co/15x15/57F287/57F287.png) Green <br /> ![c](https://placehold.co/15x15/3498DB/3498DB.png) Blue <br /> ![c](https://placehold.co/15x15/FFFF00/FFFF00.png) Yellow <br /> ![c](https://placehold.co/15x15/9B59B6/9B59B6.png) Purple <br /> ![c](https://placehold.co/15x15/E91E63/E91E63.png) LuminousVividPink <br /> ![c](https://placehold.co/15x15/EB459E/EB459E.png) Fuchsia <br /> ![c](https://placehold.co/15x15/F1C40F/F1C40F.png) Gold <br /> ![c](https://placehold.co/15x15/E67E22/E67E22.png) Orange <br /> ![c](https://placehold.co/15x15/ED4245/ED4245.png) Red <br /> ![c](https://placehold.co/15x15/95A5A6/95A5A6.png) Grey <br /> ![c](https://placehold.co/15x15/34495E/34495E.png) Navy <br /> ![c](https://placehold.co/15x15/11806A/11806A.png) DarkAqua <br /> ![c](https://placehold.co/15x15/1F8B4C/1F8B4C.png) DarkGreen <br /> ![c](https://placehold.co/15x15/206694/206694.png) DarkBlue <br /> ![c](https://placehold.co/15x15/71368A/71368A.png) DarkPurple <br /> ![c](https://placehold.co/15x15/AD1457/AD1457.png) DarkVividPink <br /> ![c](https://placehold.co/15x15/C27C0E/C27C0E.png) DarkGold <br /> ![c](https://placehold.co/15x15/A84300/A84300.png) DarkOrange <br /> ![c](https://placehold.co/15x15/992D22/992D22.png) DarkRed <br /> ![c](https://placehold.co/15x15/979C9F/979C9F.png) DarkGrey <br /> ![c](https://placehold.co/15x15/7F8C8D/7F8C8D.png) DarkerGrey <br /> ![c](https://placehold.co/15x15/BCC0C0/BCC0C0.png) LightGrey <br /> ![c](https://placehold.co/15x15/2C3E50/2C3E50.png) DarkNavy <br /> ![c](https://placehold.co/15x15/5865F2/5865F2.png) Blurple <br /> ![c](https://placehold.co/15x15/99AAB5/99AAB5.png) Greyple <br /> ![c](https://placehold.co/15x15/2C2F33/2C2F33.png) DarkButNotBlack <br /> ![c](https://placehold.co/15x15/23272A/23272A.png) NotQuiteBlack <br /> ![c](https://placehold.co/15x15/000000/000000.png) Random

</details>

## مثال

This will return a red embed:

```javascript
bot.command({
    name: 'color',
    code: `
  $description[What a nice color!]
  $color[Red]
  `
});
```

```javascript
bot.command({
    name: 'color',
    code: `
  $description[What a nice color!]
  $color[ED4245]
  `
});
```
