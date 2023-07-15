---
title: '$oldApplicationCmd'
description: '$oldApplicationCmd gets the data from application Callbacks (update and delete one)'
id: oldApplicationCmd
---

`$oldApplicationCmd` gets the data from application Callbacks (update and delete one)

## الاستخدام

```php
$oldApplicationCmd[option]
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
- New Name: $newApplicationCmd[name]
 - Old Name: $oldApplicationCmd[name]
- New Description: $newApplicationCmd[description]
 - Old Description: $oldApplicationCmd[description]`
})
```
- This code will execute when __slash command is updated__ (Modified)