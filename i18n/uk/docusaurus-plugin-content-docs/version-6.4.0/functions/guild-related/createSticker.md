---
title: '$createSticker'
description: '$createSticker will create a sticker.'
id: createSticker
---

`$createSticker` will create a sticker.

## Використання

```php
$createSticker[guildID;URL;name;returnSticker?;tags;description;reason]
```

## Параметри

| Поле           | Тип     | Опис                                                                                                | Обов'язковий |
| -------------- | ------- | --------------------------------------------------------------------------------------------------- |:------------:|
| guildID        | integer | Guild ID of where the sticker will be created in.                                                   |     так      |
| URL            | рядок   | Image URL (**png only**).                                                                           |     так      |
| назва          | рядок   | The sticker name.                                                                                   |     так      |
| returnSticker? | boolean | Return the sticker after its creation. <br /> 1. **true** <br /> 2. **false** (default) |      ні      |
| tags?          | рядок   | Sticker tags.                                                                                       |      ні      |
| опис?          | рядок   | The description of the sticker.                                                                     |      ні      |
| reason?        | рядок   | Reason that will be displayed in the guild's audit logs.                                            |      ні      |

## Приклад(и)

This will create a sticker called `Imagine`:

```javascript
bot.command({
    name: 'createSticker',
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```
