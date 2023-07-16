---
title: '$channelCategoryID'
description: '$channelCategoryID вернёт родительский элемент определенного канала.'
id: channelCategoryID
---

`$channelCategoryID` вернет родителя определенного канала.

## Использование

```php
$channelCategoryID[channelID?]
```

## Параметры

| Название   | Nbg   | Описание                                               | Нужно |
| ---------- | ----- | ------------------------------------------------------ |:-----:|
| ID канала? | целое | ID канала, из которого вы хотите извлечь его родителя. | ложь  |

## Пример(ы)

Это вернет ID категории текстового канала, в котором вы выполняете команду:

```javascript
bot.command({
    имя: 'channelCategoryID',
    код: `
  $channelCategoryID[$channelID]
  `
});
```