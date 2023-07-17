---
title: $editTextSplitElement
description: '$editTextSplitElement будет редактировать отдельный элемент текста.'
id: editTextSplitElement
---

`$editTextSplitElement` отредактирует отдельный элемент.

## Использование

```php
$editTextSplitElement[index;text]
```

## Параметры

| Название | Nbg    | Описание                         | Нужно |
| -------- | ------ | -------------------------------- |:-----:|
| индекс   | строка | Индекс дробного элемента текста. |  да   |
| текст    | строка | Новый элемент разделения текста. |  да   |

## Пример(ы)

Это отредактирует элемент разделения 3-го текста и изменит его на "Goodbye":

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```