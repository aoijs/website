---
title: $color
description: $color will change the color of an embed.
id: color
---

`$color` will change the color of an embed

## Usage

```php
$color[index?;hex]
```

## Parameters

| Field  | Type                                                                                              | Description                                               | Required |
| ------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | :------: |
| index? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The embed index.                                          |  false   |
| hex    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The hex color or color name (supported colornames below). |   true   |

<div class="details">
  <details>
    <summary><h3>Embed Colors</h3></summary>
  </details>
  <div class="content">
    <img src="https://placehold.co/15x15/000000/000000.png" alt="c"> Default <br />
    <img src="https://placehold.co/15x15/FFFFFF/FFFFFF.png" alt="c"> White <br />
    <img src="https://placehold.co/15x15/1ABC9C/1ABC9C.png" alt="c"> Aqua <br />
    <img src="https://placehold.co/15x15/57F287/57F287.png" alt="c"> Green <br />
    <img src="https://placehold.co/15x15/3498DB/3498DB.png" alt="c"> Blue <br />
    <img src="https://placehold.co/15x15/FFFF00/FFFF00.png" alt="c"> Yellow <br />
    <img src="https://placehold.co/15x15/9B59B6/9B59B6.png" alt="c"> Purple <br />
    <img src="https://placehold.co/15x15/E91E63/E91E63.png" alt="c"> LuminousVividPink <br />
    <img src="https://placehold.co/15x15/EB459E/EB459E.png" alt="c"> Fuchsia <br />
    <img src="https://placehold.co/15x15/F1C40F/F1C40F.png" alt="c"> Gold <br />
    <img src="https://placehold.co/15x15/E67E22/E67E22.png" alt="c"> Orange <br />
    <img src="https://placehold.co/15x15/ED4245/ED4245.png" alt="c"> Red <br />
    <img src="https://placehold.co/15x15/95A5A6/95A5A6.png" alt="c"> Grey <br />
    <img src="https://placehold.co/15x15/34495E/34495E.png" alt="c"> Navy <br />
    <img src="https://placehold.co/15x15/11806A/11806A.png" alt="c"> DarkAqua <br />
    <img src="https://placehold.co/15x15/1F8B4C/1F8B4C.png" alt="c"> DarkGreen <br />
    <img src="https://placehold.co/15x15/206694/206694.png" alt="c"> DarkBlue <br />
    <img src="https://placehold.co/15x15/71368A/71368A.png" alt="c"> DarkPurple <br />
    <img src="https://placehold.co/15x15/AD1457/AD1457.png" alt="c"> DarkVividPink <br />
    <img src="https://placehold.co/15x15/C27C0E/C27C0E.png" alt="c"> DarkGold <br />
    <img src="https://placehold.co/15x15/A84300/A84300.png" alt="c"> DarkOrange <br />
    <img src="https://placehold.co/15x15/992D22/992D22.png" alt="c"> DarkRed <br />
    <img src="https://placehold.co/15x15/979C9F/979C9F.png" alt="c"> DarkGrey <br />
    <img src="https://placehold.co/15x15/7F8C8D/7F8C8D.png" alt="c"> DarkerGrey <br />
    <img src="https://placehold.co/15x15/BCC0C0/BCC0C0.png" alt="c"> LightGrey <br />
    <img src="https://placehold.co/15x15/2C3E50/2C3E50.png" alt="c"> DarkNavy <br />
    <img src="https://placehold.co/15x15/5865F2/5865F2.png" alt="c"> Blurple <br />
    <img src="https://placehold.co/15x15/99AAB5/99AAB5.png" alt="c"> Greyple <br />
    <img src="https://placehold.co/15x15/2C2F33/2C2F33.png" alt="c"> DarkButNotBlack <br />
    <img src="https://placehold.co/15x15/23272A/23272A.png" alt="c"> NotQuiteBlack <br />
    <img src="https://placehold.co/15x15/000000/000000.png" alt="c"> Random
  </div>
</div>

## Example(s)

This will return a red embed:

```javascript
client.command({
  name: "color",
  code: `
  $description[What a nice color!]
  $color[Red]
  `
});
```

```javascript
client.command({
  name: "color",
  code: `
  $description[What a nice color!]
  $color[ED4245]
  `
});
```
