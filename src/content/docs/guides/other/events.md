---
title: Discord Events
description: This page contains all the events available in aoi.js.
type: guide
author: "Fafa"
author_url: "https://raw.githubusercontent.com/aoijs/website/main/src/images/contributors/fafa.png"
id: events
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/15.png
---

<!-- omit from toc -->

### Table of Contents

-   [Types of Events](#types-of-events)
    -   [Message Based-Events](#message-based-events)
    -   [Guild Based-Events](#guild-based-events)
    -   [Guild Members Based-Events](#guild-members-based-events)
    -   [User Based-Events](#user-based-events)
    -   [Custom Events](#custom-events)
-   [Usage of Events](#usage-of-events)
    -   [Example Usage of Events without Handler](#example-usage-of-events-without-handler)
    -   [Example Usage of Events in Handler](#example-usage-of-events-in-handler)

---

**aoi.js** offers various event listeners, also known as "events," which cover most of the events provided by the Discord API.

Each event serves a specific purpose and requires a particular command type to execute designated tasks, such as logging activities.

The events are not mandatory, except for `onMessage`, which is essential for the bot to read and send messages. If you wish to use other events, you must include them in your main file so your bot can listen to these events. This step is necessary to utilize various command types.

It's important to note that activating your intents on the Discord Developer Portal is required to utilize certain events.

## Types of Events

### Message Based-Events

-   **onMessage** &rarr; Emitted whenever a message is sent. (requires **[message content intent](https://discord.com/developers/docs/topics/gateway#caveats)**)
-   **onMessageDelete** &rarr; Emitted whenever a message is deleted.
    -   `messageDelete` &rarr; Command Handler type.
-   **onMessageUpdate** &rarr; Emitted whenever a message is updated (for example, embed or content change).
    -   `messageUpdate` &rarr; Command Handler type.
    -   `$oldMessage` &rarr; Retrieves the old message from the client's cache. (if any)
    -   `$message` &rarr; Retrieves the new message. (if any)
-   **onMessageDeleteBulk** &rarr; Emitted whenever messages are deleted in bulk.
    -   `messageDeleteBulk` &rarr; Command Handler type.
-   **onReactionAdd** &rarr; Emitted whenever a reaction is added to a message.
    -   `reactionAdd` &rarr; Command Handler type.
-   **onReactionRemove** &rarr; Emitted whenever a reaction is removed from a message.
    -   `reactionRemove` &rarr; Command Handler type.
-   **onReactionRemoveAll** &rarr; Emitted whenever all reactions are removed from a message.
    -   `reactionRemoveAll` &rarr; Command Handler type.

### Guild Based-Events

-   **onInviteCreate** &rarr; Emitted whenever a guild invite is created.
    -   `inviteCreate` &rarr; Command Handler type.
-   **onInviteDelete** &rarr; Emitted whenever a guild invite is deleted.
    -   `inviteDelete` &rarr; Command Handler type.
-   **onGuildJoin** &rarr; Emitted whenever the client joins a guild.
    -   `guildJoin` &rarr; Command Handler type.
-   **onGuildLeave** &rarr; Emitted whenever the client leaves a guild.
    -   `guildLeave` &rarr; Command Handler type.
-   **onGuildUpdate** &rarr; Emitted whenever a guild gets updated (for example, name change).
    -   `guildUpdate` &rarr; Command Handler type.
    *   `$oldGuild[option?]` &rarr; Retrieves data of the old guild. (if any)
    *   `$newGuild[option?]` &rarr; Retrieves data of the new/updated guild. (if any)
-   **onGuildUnavailable** &rarr; Emitted whenever a guild becomes unavailable, likely due to a server outage.
    -   `guildUnavailable` &rarr; Command Handler type.
-   **onRoleCreate** &rarr; Emitted whenever a role is created.
    -   `roleCreate` &rarr; Command Handler type.
-   **onRoleUpdate** &rarr; Emitted whenever a role gets updated (for example, color change).
    -   `roleUpdate` &rarr; Command Handler type.
    *   `$oldRole[option?]` &rarr; Retrieves data of the old role. (if any)
    *   `$newRole[option?]` &rarr; Retrieves data of the new/updated role. (if any)
-   **onRoleDelete** &rarr; Emitted whenever a role is deleted.
    -   `roleDelete` &rarr; Command Handler type.
-   **onChannelCreate** &rarr; Emitted whenever a channel is created.
    -   `channelCreate` &rarr; Command Handler type.
-   **onChannelUpdate** &rarr; Emitted whenever a channel gets updated. (for example, topic change).
    -   `channelUpdate` &rarr; Command Handler type.
    *   `$oldChannel[option?]` &rarr; Retrieves data of the old channel. (if any)
    *   `$newChannel[option?]` &rarr; Retrieves data of the new/updated channel. (if any)
-   **onChannelDelete** &rarr; Emitted whenever a channel is deleted.
    -   `channelDelete` &rarr; Command Handler type.
-   **onChannelPinsUpdate** &rarr; Emitted whenever the pins of a channel are updated.
    -   `channelPinsUpdate` &rarr; Command Handler type.
-   **onStageInstanceCreate** &rarr; Emitted whenever a stage instance is created.
    -   `stageInstanceCreate` &rarr; Command Handler type.
-   **onStageInstanceUpdate** &rarr; Emitted whenever a stage instance gets updated.
    -   `stageInstanceUpdate` &rarr; Command Handler type.
-   **onStageInstanceDelete** &rarr; Emitted whenever a stage instance is deleted.
    -   `stageInstanceDelete` &rarr; Command Handler type.
-   **onThreadCreate** &rarr; Emitted whenever a thread is created.
    -   `threadCreate` &rarr; Command Handler type.
-   **onThreadUpdate** &rarr; Emitted whenever a thread gets updated.
    -   `threadUpdate` &rarr; Command Handler type.
-   **onThreadDelete** &rarr; Emitted whenever a thread is deleted.
    -   `threadDelete` &rarr; Command Handler type.
-   **onThreadListSync** &rarr; Emitted whenever the client user gains access to a text or news channel that contains threads.
    -   `threadListSync` &rarr; Command Handler type.
-   **onThreadMemberUpdate** &rarr; Emitted whenever the client user's thread member is updated. (requires **[guild members intent](https://discord.com/developers/docs/topics/gateway#caveats)**)
    -   `threadMemberUpdate` &rarr; Command Handler type.
-   **onThreadMembersUpdate** &rarr; Emitted whenever members are added or removed from a thread. (requires **[guild members intent](https://discord.com/developers/docs/topics/gateway#caveats)**)
    -   `threadMembersUpdate` &rarr; Command Handler type.
-   **onEmojiCreate** &rarr; Emitted whenever a custom emoji is created in a guild.
    -   `emojiCreate` &rarr; Command Handler type.
-   **onEmojiDelete** &rarr; Emitted whenever a custom emoji is deleted in a guild.
    -   `emojiDelete` &rarr; Command Handler type.
-   **onEmojiUpdate** &rarr; Emitted whenever a custom guild emoji is updated.
    -   `emojiUpdate` &rarr; Command Handler type.
    *   `$oldEmoji[option?]` &rarr; Retrieves data of the old emoji. (if any)
    *   `$newEmoji[option?]` &rarr; Retrieves data of the new emoji. (if any)
-   **onStickerCreate** &rarr; Emitted whenever a custom sticker is created in a guild.
    -   `stickerCreate` &rarr; Command Handler type.
-   **onStickerDelete** &rarr; Emitted whenever a custom sticker gets deleted in a guild.
    -   `stickerDelete` &rarr; Command Handler type.
-   **onStickerUpdate** &rarr; Emitted whenever a custom sticker is updated in a guild.
    -   `stickerUpdate` &rarr; Command Handler type.
    *   `$oldEmoji[option?]` &rarr; Retrieves data of the old sticker. (if any)
    *   `$newEmoji[option?]` &rarr; Retrieves data of the new sticker. (if any)
-   **onBanAdd** &rarr; Emitted whenever a member is banned from a guild.
    -   `banAdd` &rarr; Command Handler type.
-   **onBanRemove** &rarr; Emitted whenever a member is unbanned from a guild.
    -   `banRemove` &rarr; Command Handler type.
-   **onVoiceStateUpdate** &rarr; Emitted whenever a user changes voice state (for example, joins/leaves a channel, mutes/unmutes).
    -   `voiceStateUpdate` &rarr; Command Handler type.
    *   `$oldState[option?]` &rarr; Retrieves data of the old voice state. (if any)
    *   `$newState[option?]` &rarr; Retrieves data of the new voice state. (if any)
-   **onWebhooksUpdate** &rarr; Emitted whenever a channel has its webhooks changed.
    -   `webhooksUpdate` &rarr; Command Handler type.

### Guild Members Based-Events

-   **onJoin** &rarr; Emitted whenever a user joins a guild.
    -   `join` &rarr; Command Handler type.
-   **onLeave** &rarr; Emitted whenever a member leaves a guild, or is kicked.
    -   `leave` &rarr; Command Handler type.
-   **onMemberUpdate** &rarr; Emitted whenever a guild member changes (for example, new role, removed role, nickname). (requires **[guild members intent](https://discord.com/developers/docs/topics/gateway#caveats)**)
    -   `memberUpdate` &rarr; Command Handler type.
    *   `$oldMember[option?]` &rarr; Retrieves data of the old member. (if any)
    *   `$newMember[option?]` &rarr; Retrieves data of the new/updated member. (if any)
-   **onMemberAvailable** &rarr; Emitted whenever a member becomes available in a large guild. (requires **[guild members intent](https://discord.com/developers/docs/topics/gateway#caveats)**)
    -   `memberAvailable` &rarr; Command Handler type.
-   **onMembersChunk** &rarr; Emitted whenever a chunk of guild members is received (all members come from the same guild). (requires **[guild members intent](https://discord.com/developers/docs/topics/gateway#caveats)**)
    -   `membersChunk` &rarr; Command Handler type.

### User Based-Events

-   **onPresenceUpdate** &rarr; Emitted whenever a guild member's presence changes, or they change one of their details.
    -   `presenceUpdate` &rarr; Command Handler type.
    *   `$oldPresence[option]` &rarr; Retrieves data of the old presence. (if any)
    *   `$newPresence[option]` &rarr; Retrieves data of the new presence. (if any)
-   **onTypingStart** &rarr; Emitted whenever a user starts typing in a channel.
    -   `typingStart` &rarr; Command Handler type.
-   **onUserUpdate** &rarr; Emitted whenever a user's details (for example, username) are changed.
    -   `userUpdate` &rarr; Command Handler type.
    *   `$oldUser[option]` &rarr; Retrieves data of the old user. (if any)
    *   `$newUser[option]` &rarr; Retrieves data of the updated/new user. (if any)

### Custom Events

-   **onInteractionCreate** &rarr; Emitted whenever an Interaction is created.
-   **onFunctionError** &rarr; Emitted whenever a command or function returns an error message.
-   **onApplicationCommandPermissionsUpdate** &rarr; Emitted whenever an Application Command gets updated (for example, name).
    -   `$oldApplicationCmd[option?]` &rarr; Retrieves data of the old application command.
    -   `$newApplicationCmd[option?]` &rarr; Retrieves data of the updated application command.
-   **onVariableCreate** &rarr; Emitted whenever a variable is created.
-   **onVariableDelete** &rarr; Emitted whenever a variable gets deleted.
-   **onVariableUpdate** &rarr; Emitted whenever a variable gets updated.
    -   `$oldVariable[opt;separator?]` &rarr; Retrieves the old data of the variable. (if any)
    -   `$newVariable[opt;separator?]` &rarr; Retrieves the new/updated data of the variable. (if any)
-   **onShardDisconnect** &rarr; Emitted whenever the client's shard disconnects.
-   **onShardError** &rarr; Emitted whenever a shard of the client returns an error.
-   **onShardReady** &rarr; Emitted whenever a shard of the client is ready.
-   **onShardReconnecting** &rarr; Emitted whenever a shard of the client is currently reconnecting.
-   **onShardResume** &rarr; Emitted whenever the shard resumed operations.

## Usage of Events

```js
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onJoin", "onLeave", "onBanAdd", "onBanRemove"]
    /* ... */
});
```

#### Example Usage of Events without Handler

```javascript
client.<eventName>Command({ // Exclude "on" of the event's name. For example, "onTypingStart" becomes "typingStartCommand"
  name?: string, // name of the event
  channel: number,
  code: ...
});
```

#### Example Usage of Events in Handler

```javascript
module.exports = [{
  name?: string, // name of the event
  type: string, // the event type
  channel: number,
  code: ...
}]
```
