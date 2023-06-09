---
title: $oldApplicationCmd
description: $oldApplicationCmd gets the data from application Callbacks (update and delete one)
id: oldApplicationCmd
---

`$oldApplicationCmd` gets the data from application Callbacks (update and delete one)

## Usage

```php
$oldApplicationCmd[option]
```

## Parameters

| Field  | Type   | Description         | Required |
| ------ | ------ | ------------------- | :------: |
| option | string | Option to retrieve. |   true   |

### Options

| Field              |   Type              | Description                                                 |
| ------------------ | ------------------- | ----------------------------------------------------------- |
| name               | string              | Name of slash commnad.                                      |
| id                 | integer             | ID of slash commnad.                                        |
| description        | string              | Description of slash commnad.                               |
| version            | integer             | Version of slash command.                                   |
| options            | string              | Options of slash command.                                   |
| guildID            | integer             | Guild ID of slash command.                                  |
| applicationID      | integer             | Returns application ID.                                     |
| defaultPermission  | string              | Returns Default Permissions of slash command.               |
| timestamp          | string              | Returns timestamp of the creation of slash command (in ms). |
| createdAt          | string              | Returns the date of creation of slash command.              |