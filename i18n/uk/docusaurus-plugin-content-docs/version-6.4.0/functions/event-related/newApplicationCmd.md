---
title: '$newApplicationCmd'
description: '$newApplicationCmd gets the data from application Callbacks (update and create one).'
id: newApplicationCmd
---

`$newApplicationCmd` gets the data from application Callbacks (update and create one).

## Використання

```php
$newApplicationCmd[name]
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
- Name: $newApplicationCmd[name]
- ID: $newApplicationCmd[id]
- Application ID: $newApplicationCmd[applicationID]`
})
```
- This code will execute when __slash command is updated__ (Modified)