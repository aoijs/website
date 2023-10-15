---
title: $newChannel
description: $newChannel holds data of the updated channel, used in channel update, delete and create events, or else any data will be empty.
id: newChannel
---

`$newChannel` holds data of the updated channel, used in channel update, delete and create events, or else any data
will be empty.

## Usage

```php
$newChannel[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

### Options

| Field                      | Type                                                                                              | Description                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| name                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns channel name.                                                    |
| id                         | integer                                                                                           | Returns channel ID.                                                      |
| createdAt                  | integer                                                                                           | Returns date of when was channel created.                                |
| createdTimestamp           | integer                                                                                           | Returns the timestamp of when was channel created.                       |
| defaultAutoArchiveDuration | integer                                                                                           | Returns Default Archive Duration.                                        |
| deleteable                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is deleteable.                           |
| deleted                    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel was deleted.                             |
| guildID                    | integer                                                                                           | Returns guild ID of current guild.                                       |
| lastMessageContent         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns content of last message sent in channel.                         |
| lastMessageID              | integer                                                                                           | Returns ID of last message sent in channel.                              |
| lastPinAt                  | integer                                                                                           | Returns date of last pinned message.                                     |
| lastPinTimestamp           | integer                                                                                           | Returns the timestamp of last pinned message.                            |
| manageable                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is managable.                            |
| nsfw                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is NSFW.                                 |
| parentName                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns Category Name.                                                   |
| parentID                   | integer                                                                                           | Returns Category ID.                                                     |
| position                   | integer                                                                                           | Returns channel position.                                                |
| slowmode                   | integer                                                                                           | Returns channel slowmode. (if there are any)                             |
| topic                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns channel topic.                                                   |
| type                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns channel type.                                                    |
| viewable                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is viewable.                             |
| permsAllowed               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns allowed permissions for current channel.                         |
| permsDenied                | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns denied permissions for current channel.                          |
| perms                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns permissions for current channel.                                 |
| joinable                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is joinable (only if its voice channel). |
| userLimit                  | integer                                                                                           | Returns user limit for current (voice) channel.                          |
| messageCount               | integer                                                                                           | Returns message count of messages sent in current channel.               |

## Example(s)

```js
client.channelCreateCommand({
  channel: "channelid",
  code: `
    New channel has been created!
- Name: $newChannel[name]
- ID: $newChannel[id]
- <#$newChannel[id]>`,
});
```

- This code will execute when **channel is created**.

---

```js
client.channelDeleteCommand({
  channel: "channelid",
  code: `
    Channel has been deleted!
- Name: $oldChannel[name]
- ID: $oldChannel[id]`,
});
```

- This code will execute when **channel is deleted**.

---

```js
client.channelUpdateCommand({
  channel: "channelid",
  code: `
    Channel has been updated!
- New name: $newChannel[name]
 - Old name: $oldChannel[name]`,
});
```

- This code will execute when **channel is updated**.

---
