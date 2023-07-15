---
title: '$newApplicationCmd'
description: '$newApplicationCmd gets the data from application Callbacks (update and create one).'
id: newApplicationCmd
---

`$newApplicationCmd` gets the data from application Callbacks (update and create one).

## الاستخدام

```php
$newApplicationCmd[name]
```

## البارامترات

| Field  | النوع  | الديسكبربشين        | مطلوب |
| ------ | ------ | ------------------- |:-----:|
| option | string | Option to retrieve. | true  |

### Options

| Field             | النوع   | الديسكبربشين                                                |
| ----------------- | ------- | ----------------------------------------------------------- |
| name              | string  | Name of slash commnad.                                      |
| id                | Integer | ID of slash commnad.                                        |
| الديسكبربشين      | string  | Description of slash commnad.                               |
| version           | Integer | Version of slash command.                                   |
| options           | string  | Options of slash command.                                   |
| guildID           | Integer | Guild ID of slash command.                                  |
| applicationID     | Integer | Returns application ID.                                     |
| defaultPermission | string  | Returns Default Permissions of slash command.               |
| timestamp         | string  | Returns timestamp of the creation of slash command (in ms). |
| createdAt         | string  | Returns the date of creation of slash command.              |

## مثال

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