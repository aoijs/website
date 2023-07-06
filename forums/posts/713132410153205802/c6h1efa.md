---
title: "Progression bar"
description: "A function that makes progression bar to save time and help people who can't do basic maths"
authors:
  name: "@p4olo."
  title: Member - 713132410153205802
  userid: "713132410153205802"
  url: https://discord.com/users/713132410153205802
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png
tags: ["v6","aoi.js","Other"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

# Function:
`$progressBar[current:total:style?;main character?;secondary character?;scale?]`

## Options:
- current = current number.
- total = total number.
- style = `split` or `filled` (default value).
- main character = filled character (for filled style, default = ◼) or split character (for split style, default = 📍).
- secondary character = empty character (for filled style, default = ◻) or bar character (for split style, default = ─).
- scale = total number of characters, default is 30.

### Code:
Put this in you main file:
```js
bot.functionManager.createFunction({
  name: '$progressBar',
  type: 'djs',
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [current, total, style = 'filled', mainCharacter = style === 'split' ? '📍' : '◼', secondaryCharacter = style === 'split' ? '─' : '◻', scale = 30] = data.inside.splits;

    if (!current) {
      return d.aoiError.fnError(d, 'custom', {}, 'Current number is missing.');
    }

    if (!total) {
      return d.aoiError.fnError(d, 'custom', {}, 'Total number is missing.');
    }

    if (parseFloat(current) > parseFloat(total)) {
      return d.aoiError.fnError(d, 'custom', {}, 'Current cannot be greater than total.');
    }

    if (isNaN(parseFloat(current)) || isNaN(parseFloat(total))) {
      return d.aoiError.fnError(d, 'custom', {}, 'Current and total values must be numbers.');
    }

    if (style !== 'filled' && style !== 'split') {
      return d.aoiError.fnError(d, 'custom', {}, 'Invalid style. Supported styles are "filled" and "split".');    }

    try {
      const percentage = (parseFloat(current) / parseFloat(total)) * 100;
      const filledCount = Math.round((percentage / 100) * scale);
      const emptyCount = scale - filledCount;

      let progressBar = '';
      if (style === 'filled') {
        progressBar = mainCharacter.repeat(filledCount) + secondaryCharacter.repeat(emptyCount);
      } else if (style === 'split') {
        const markerIndex = Math.round((filledCount / scale) * (scale) - 1);
        for (let i = 0; i < scale; i++) {
          if (i === markerIndex) {
            progressBar += mainCharacter;
          } else {
            progressBar += secondaryCharacter;
          }
        }
      }

      data.result = progressBar;
      return {
        code: d.util.setCode(data),
      };
    } catch (error) {
      return d.aoiError.fnError(d, 'custom', {}, 'An error occurred while generating the progress bar.');
    }
  },
});

```

### Preview:
![image](https://cdn.discordapp.com/attachments/1100434750558175242/1125833267199881236/image.png)
