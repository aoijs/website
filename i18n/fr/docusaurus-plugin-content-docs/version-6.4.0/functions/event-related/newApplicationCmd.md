---
title: '$newApplicationCmd'
description: '$newApplicationCmd gets the data from application Callbacks (update and create one).'
id: newApplicationCmd
---

`$newApplicationCmd` gets the data from application Callbacks (update and create one).

## Usage

```php
$newApplicationCmd[name]
```

## Parameters

| Field  | Type   | Description         | Required |
| ------ | ------ | ------------------- |:--------:|
| option | string | Option to retrieve. |   true   |

### Options

| Field             | Type    | Description                                                 |
| ----------------- | ------- | ----------------------------------------------------------- |
| name              | string  | Name of slash commnad.                                      |
| id                | integer | ID of slash commnad.                                        |
| description       | string  | Description of slash commnad.                               |
| version           | integer | Version of slash command.                                   |
| options           | string  | Options of slash command.                                   |
| guildID           | integer | Guild ID of slash command.                                  |
| applicationID     | integer | Returns application ID.                                     |
| defaultPermission | string  | Returns Default Permissions of slash command.               |
| timestamp         | string  | Returns timestamp of the creation of slash command (in ms). |
| createdAt         | string  | Returns the date of creation of slash command.              |

## Example(s)

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