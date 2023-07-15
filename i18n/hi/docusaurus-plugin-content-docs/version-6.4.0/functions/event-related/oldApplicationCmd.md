---
title: '$oldApplicationCmd'
description: '$oldApplicationCmd gets the data from application Callbacks (update and delete one)'
id: oldApplicationCmd
---

`$oldApplicationCmd` gets the data from application Callbacks (update and delete one)

## प्रोयोग

```php
$oldApplicationCmd[option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन        | चाहिए |
| ------ | -------- | ------------------- |:-----:|
| option | स्ट्रिंग | Option to retrieve. | true  |

### Options

| फील्ड             | टाइप     | डिस्क्रिप्शन                                                |
| ----------------- | -------- | ----------------------------------------------------------- |
| name              | स्ट्रिंग | Name of slash commnad.                                      |
| id                | integer  | ID of slash commnad.                                        |
| डिस्क्रिप्शन      | स्ट्रिंग | Description of slash commnad.                               |
| version           | integer  | Version of slash command.                                   |
| options           | स्ट्रिंग | Options of slash command.                                   |
| guildID           | integer  | Guild ID of slash command.                                  |
| applicationID     | integer  | Returns application ID.                                     |
| defaultPermission | स्ट्रिंग | Returns Default Permissions of slash command.               |
| timestamp         | स्ट्रिंग | Returns timestamp of the creation of slash command (in ms). |
| createdAt         | स्ट्रिंग | Returns the date of creation of slash command.              |

## ट्रू (हा)

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