---
title: '$fileSize'
description: '$fileSize will return the size of a given file.'
id: fileSize
---

`$fileSize` will return the size of a given file.

## Використання

```php
$fileSize[path;unit?]
```

## Параметри

| Поле  | Тип   | Опис                                                                                                                                                                                                                                                                                                                     | Обов'язковий |
| ----- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| path  | рядок | File path.                                                                                                                                                                                                                                                                                                               |     так      |
| unit? | рядок | In which unit the size will be returned in. <br /> 1. **B** (byte / default) <br /> 2. **KB** (kiloByte) <br />  3. **MB** (megaByte) <br /> 4. **GB** (gigaByte) <br /> 5. **b** (bit) <br /> 6. **kb** (kiloBit) <br /> 7. **mb** (megaBit) <br /> 8. **GB** (gigaBit) |      ні      |

## Приклад(и)

This will return the size of your `index.js` in `GB`:

```javascript
bot.command({
    name: "fileSize",
    code: `
  $fileSize[./index.js;GB]
  `
});
```