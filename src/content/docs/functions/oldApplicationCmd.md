---
title: $oldApplicationCmd
description: $oldApplicationCmd gets the data from application Callbacks (update and delete one)
id: oldApplicationCmd
---

`$oldApplicationCmd` gets the data from application Callbacks (update and delete one)

## Usage

```aoi
$oldApplicationCmd[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

### Options

| Field             | Type                                                                                              | Description                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| name              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of slash commnad.                                      |
| id                | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of slash commnad.                                        |
| description       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Description of slash commnad.                               |
| version           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Version of slash command.                                   |
| options           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Options of slash command.                                   |
| guildID           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID of slash command.                                  |
| applicationID     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns application ID.                                     |
| defaultPermission | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns Default Permissions of slash command.               |
| timestamp         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns timestamp of the creation of slash command (in ms). |
| createdAt         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns the date of creation of slash command.              |

## Example(s)

```js
client.applicationCmdUpdateCommand({
    channel: "channelid",
    code: `
    Slash command was updated!
- New Name: $newApplicationCmd[name]
 - Old Name: $oldApplicationCmd[name]
- New Description: $newApplicationCmd[description]
 - Old Description: $oldApplicationCmd[description]`
});
```

-   This code will execute when **slash command is updated** (Modified)
