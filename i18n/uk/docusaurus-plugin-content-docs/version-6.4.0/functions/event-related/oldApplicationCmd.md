---
title: '$oldApplicationCmd'
description: '$oldApplicationCmd gets the data from application Callbacks (update and delete one)'
id: oldApplicationCmd
---

`$oldApplicationCmd` gets the data from application Callbacks (update and delete one)

## Використання

```php
$oldApplicationCmd[option]
```

## Параметри

| Поле   | Тип   | Опис                | Обов'язковий |
| ------ | ----- | ------------------- |:------------:|
| option | рядок | Option to retrieve. |     так      |

### Options

| Поле              | Тип     | Опис                                                        |
| ----------------- | ------- | ----------------------------------------------------------- |
| назва             | рядок   | Name of slash commnad.                                      |
| id                | integer | ID of slash commnad.                                        |
| опис              | рядок   | Description of slash commnad.                               |
| version           | integer | Version of slash command.                                   |
| options           | рядок   | Options of slash command.                                   |
| guildID           | integer | Guild ID of slash command.                                  |
| applicationID     | integer | Returns application ID.                                     |
| defaultPermission | рядок   | Returns Default Permissions of slash command.               |
| timestamp         | рядок   | Returns timestamp of the creation of slash command (in ms). |
| createdAt         | рядок   | Returns the date of creation of slash command.              |

## Приклад(и)

```js
bot.applicationCmdUpdateCommand({
    channel: "channelid",
    code: `
    Slash command was updated!
- New Name: $newApplicationCmd[name]
 - Old Name: $oldApplicationCmd[name]
- New Description: $newApplicationCmd[description]
 - Old Description: $oldApplicationCmd[description]`
})
```
- This code will execute when __slash command is updated__ (Modified)