---
title: $oldChannel
description: $oldChannel holds data of the channel before it was updated, used in channel update event, or else any data will be empty
id: oldChannel
---

`$oldChannel` holds data of the channel before it was updated, used in channel update event, or else any data will be
empty

## Usage

```php
$oldChannel[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

### Options

| Field                      | Type                                                                                              | Description                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| name                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns channel name.                                                    |
| id                         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns channel ID.                                                      |
| createdAt                  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns date of when was channel created.                                |
| createdTimestamp           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the timestamp of when was channel created.                       |
| defaultAutoArchiveDuration | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns Default Archive Duration.                                        |
| deleteable                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is deleteable.                           |
| deleted                    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel was deleted.                             |
| guildID                    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns guild ID of current guild.                                       |
| lastMessageContent         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns content of last message sent in channel.                         |
| lastMessageID              | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns ID of last message sent in channel.                              |
| lastPinAt                  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns date of last pinned message.                                     |
| lastPinTimestamp           | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the timestamp of last pinned message.                            |
| manageable                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is managable.                            |
| nsfw                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is NSFW.                                 |
| parentName                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns Category Name.                                                   |
| parentID                   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns Category ID.                                                     |
| position                   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns channel position.                                                |
| slowmode                   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns channel slowmode. (if there are any)                             |
| topic                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns channel topic.                                                   |
| type                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns channel type.                                                    |
| viewable                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is viewable.                             |
| permsAllowed               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns allowed permissions for current channel.                         |
| permsDenied                | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns denied permissions for current channel.                          |
| perms                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns permissions for current channel.                                 |
| joinable                   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns true / false if channel is joinable (only if its voice channel). |
| userLimit                  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns user limit for current (voice) channel.                          |
| messageCount               | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns message count of messages sent in current channel.               |

## Example(s)

```js
client.channelCreateCommand({
  channel: "channelid",
  code: `
    New channel has been created!
- Name: $newChannel[name]
- ID: $newChannel[id]
- <#$newChannel[id]>`
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
- ID: $oldChannel[id]`
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
 - Old name: $oldChannel[name]`
});
```

- This code will execute when **channel is updated**.

---
