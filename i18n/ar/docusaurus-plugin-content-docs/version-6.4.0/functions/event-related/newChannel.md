---
title: '$newChannel'
description: '$newChannel holds data of the updated channel, used in channel update, delete and create events, or else any data will be empty.'
id: newChannel
---

`$newChannel` holds data of the updated channel, used in channel update, delete and create events, or else any data will be empty.

## الاستخدام

```php
$newChannel[option]
```

## البارامترات

| Field  | النوع  | الديسكبربشين        | مطلوب |
| ------ | ------ | ------------------- |:-----:|
| option | string | Option to retrieve. | true  |


### Options

| Field                      | النوع   | الديسكبربشين                                                             |
| -------------------------- | ------- | ------------------------------------------------------------------------ |
| name                       | string  | Returns channel name.                                                    |
| id                         | Integer | Returns channel ID.                                                      |
| createdAt                  | Integer | Returns date of when was channel created.                                |
| createdTimestamp           | Integer | Returns the timestamp of when was channel created.                       |
| defaultAutoArchiveDuration | Integer | Returns Default Archive Duration.                                        |
| deleteable                 | string  | Returns true / false if channel is deleteable.                           |
| deleted                    | string  | Returns true / false if channel was deleted.                             |
| guildID                    | Integer | Returns guild ID of current guild.                                       |
| lastMessageContent         | string  | Returns content of last message sent in channel.                         |
| lastMessageID              | Integer | Returns ID of last message sent in channel.                              |
| lastPinAt                  | Integer | Returns date of last pinned message.                                     |
| lastPinTimestamp           | Integer | Returns the timestamp of last pinned message.                            |
| manageable                 | string  | Returns true / false if channel is managable.                            |
| nsfw                       | string  | Returns true / false if channel is NSFW.                                 |
| parentName                 | string  | Returns Category Name.                                                   |
| parentID                   | Integer | Returns Category ID.                                                     |
| position                   | Integer | Returns channel position.                                                |
| slowmode                   | Integer | Returns channel slowmode. (if there are any)                             |
| topic                      | string  | Returns channel topic.                                                   |
| type                       | string  | Returns channel type.                                                    |
| viewable                   | string  | Returns true / false if channel is viewable.                             |
| permsAllowed               | string  | Returns allowed permissions for current channel.                         |
| permsDenied                | string  | Returns denied permissions for current channel.                          |
| perms                      | string  | Returns permissions for current channel.                                 |
| joinable                   | string  | Returns true / false if channel is joinable (only if its voice channel). |
| userLimit                  | Integer | Returns user limit for current (voice) channel.                          |
| messageCount               | Integer | Returns message count of messages sent in current channel.               |

## مثال
```js
bot.channelCreateCommand({
    channel: "channelid",
    code: `
    New channel has been created!
- Name: $newChannel[name]
- ID: $newChannel[id]
- <#$newChannel[id]>`
})
```
- This code will execute when __channel is created__.
---
```js
bot.channelDeleteCommand({
    channel: "channelid",
    code: `
    Channel has been deleted!
- Name: $oldChannel[name]
- ID: $oldChannel[id]`
})
```
- This code will execute when __channel is deleted__.
---
```js
bot.channelUpdateCommand({
    channel: "channelid",
    code: `
    Channel has been updated!
- New name: $newChannel[name]
 - Old name: $oldChannel[name]`
})
```
- This code will execute when __channel is updated__.
---