---
title: '$fetch'
description: '$fetch will fetch information about a given method using Discord''s API.'
id: fetch
---

`$fetch` will fetch information about a given method using Discord's API.

## Використання

```php
$fetch[method;query;...query]
```

## Параметри

| Поле   | Тип   | Опис                            | Обов'язковий |
| ------ | ----- | ------------------------------- |:------------:|
| method | рядок | Method to fetch (listed below). |     так      |
| запит  | рядок | Input for the used method.      |     так      |

<details>
  <summary><h3> Methods </h3></summary>

| Methods             |
| ------------------- |
| message             |
| channel             |
| user                |
| invite              |
| webhook             |
| application         |
| command             |
| guildPreview        |
| guildTemplate       |
| premiumStickerPacks |
| sticker             |
| guildCommand        |
| default             |

</details>

## Приклад(и)

This will display information about the initial command message using the `fetch` function:

```javascript
bot.command({
    name: 'fetch',
    code: `
  \`\`\`
  $fetch[message;$messageID]
  \`\`\`
  `
});
```
