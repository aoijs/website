---
title: '$getMessage'
description: '$getMessage will return properties about a given message.'
id: getMessage
---

`$getMessage` will return properties about a given message.

## Використання

```php
$getMessage[channelID;messageID;option?]
```

## Параметри

| Поле      | Тип     | Опис                                               | Обов'язковий |
| --------- | ------- | -------------------------------------------------- |:------------:|
| channelID | integer | ID of the channel where the message is located in. |     так      |
| messageID | integer | The ID of the message.                             |     так      |
| option?   | рядок   | Which option to fetch.                             |      ні      |

<details open>
  <summary><h3> Options </h3></summary>

| Тип      | Опис                    |
| -------- | ----------------------- |
| content  | Content of the message. |
| userID   | Author User ID.         |
| usertag  | Author Discriminator.   |
| username | Author Username.        |

</details>

## Приклад(и)

This will return the content of your sent message:

```javascript
bot.command({
    name: 'getMessage',
    code: `
$getMessage[$channelID;$messageID;content]
  `
});
```