---
title: $commandsCount
description: $commandsCount will return the amount of commands.
id: commandsCount
---

`$commandsCount` will return the amount of commands.

## Usage

```php
$commandsCount[type?]
```

## Parameters

| Field | Type                                                                                              | Description       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| type? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The command type. |   true   |

|          Command Types          |
| :-----------------------------: |
|              loop               |
|              pulse              |
|              join               |
|              leave              |
|              ready              |
|          autoModCreate          |
|          autoModDelete          |
|          autoModUpdate          |
|     autoModActionExecution      |
|             awaited             |
|             banAdd              |
|            banRemove            |
|          channelCreate          |
|          channelDelete          |
|        channelPinsUpdate        |
|          channelUpdate          |
|           emojiCreate           |
|           emojiDelete           |
|           emojiUpdate           |
|          functionError          |
|            guildJoin            |
|           guildLeave            |
|        guildUnavailable         |
|           guildUpdate           |
|           interaction           |
|          inviteCreate           |
|          inviteDelete           |
|         memberAvailable         |
|          memberUpdate           |
|          membersChunk           |
|          messageDelete          |
|        messageDeleteBulk        |
|          messageUpdate          |
|              modal              |
|         presenceUpdate          |
|            rateLimit            |
|           reactionAdd           |
|         reactionRemove          |
|        reactionRemoveAll        |
|       reactionRemoveEmoji       |
|           roleCreate            |
|           roleDelete            |
|           roleUpdate            |
|         shardDisconnect         |
|           shardError            |
|           shardReady            |
|        shardReconnecting        |
|           shardResume           |
|       stageInstanceCreate       |
|       stageInstanceDelete       |
|       stageInstanceUpdate       |
|          stickerCreate          |
|          stickerDelete          |
|          stickerUpdate          |
|          threadCreate           |
|          threadDelete           |
|         threadListSync          |
|       threadMemberUpdate        |
|       threadMembersUpdate       |
|          threadUpdate           |
|             timeout             |
|           typingStart           |
|           userUpdate            |
|         variableCreate          |
|         variableDelete          |
|         variableUpdate          |
|        voiceStateUpdate         |
|         webhooksUpdate          |
|      applicationCmdCreate       |
|      applicationCmdDelete       |
| applicationCmdPermissionsUpdate |
|      applicationCmdUpdate       |
|           selectMenu            |
|              slash              |
|             default             |

## Example(s)

This will return the the amount of your commands:

```javascript
client.command({
  name: "commandsCount",
  code: `
  $commandsCount
  `
});
```
