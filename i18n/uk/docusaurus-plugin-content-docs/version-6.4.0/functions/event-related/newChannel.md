---
title: '$newChannel'
description: '$newChannel holds data of the updated channel, used in channel update, delete and create events, or else any data will be empty.'
id: newChannel
---

`$newChannel` holds data of the updated channel, used in channel update, delete and create events, or else any data will be empty.

## Використання

```php
$newChannel[option]
```

## Параметри

| Поле   | Тип   | Опис                | Обов'язковий |
| ------ | ----- | ------------------- |:------------:|
| option | рядок | Option to retrieve. |     так      |


### Options

| Поле                       | Тип     | Опис                                                                     |
| -------------------------- | ------- | ------------------------------------------------------------------------ |
| назва                      | рядок   | Returns channel name.                                                    |
| id                         | integer | Returns channel ID.                                                      |
| createdAt                  | integer | Returns date of when was channel created.                                |
| createdTimestamp           | integer | Returns the timestamp of when was channel created.                       |
| defaultAutoArchiveDuration | integer | Returns Default Archive Duration.                                        |
| deleteable                 | рядок   | Returns true / false if channel is deleteable.                           |
| deleted                    | рядок   | Returns true / false if channel was deleted.                             |
| guildID                    | integer | Returns guild ID of current guild.                                       |
| lastMessageContent         | рядок   | Returns content of last message sent in channel.                         |
| lastMessageID              | integer | Returns ID of last message sent in channel.                              |
| lastPinAt                  | integer | Returns date of last pinned message.                                     |
| lastPinTimestamp           | integer | Returns the timestamp of last pinned message.                            |
| manageable                 | рядок   | Returns true / false if channel is managable.                            |
| nsfw                       | рядок   | Returns true / false if channel is NSFW.                                 |
| parentName                 | рядок   | Returns Category Name.                                                   |
| parentID                   | integer | Returns Category ID.                                                     |
| position                   | integer | Returns channel position.                                                |
| slowmode                   | integer | Returns channel slowmode. (if there are any)                             |
| topic                      | рядок   | Returns channel topic.                                                   |
| тип                        | рядок   | Returns channel type.                                                    |
| viewable                   | рядок   | Returns true / false if channel is viewable.                             |
| permsAllowed               | рядок   | Returns allowed permissions for current channel.                         |
| permsDenied                | рядок   | Returns denied permissions for current channel.                          |
| perms                      | рядок   | Returns permissions for current channel.                                 |
| joinable                   | рядок   | Returns true / false if channel is joinable (only if its voice channel). |
| userLimit                  | integer | Returns user limit for current (voice) channel.                          |
| messageCount               | integer | Returns message count of messages sent in current channel.               |

## Приклад(и)
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