---
title: Permissions & Intents
description: This page is covering all permissions and intents.
id: permissionsandintents
---

### Table of Content

- **[Gateaway Intents][1]**
  - **[Example Usage of Intents](#example-usage-of-intents)**
- **[Permissions][2]**
  - **[Guild Permissions](#guild-permissions)**
  - **[Voice Permissions](#voice-permissions)**

---

## [Gateaway Intents][3]

Discord has designated three intents as privileged\*: **GuildMembers**, **GuildPresences**, and **MessageContent**. These intents are now deactivated by default and require verification once your application reaches 76 guilds.

* **MessageContent**\*
* **Guilds**
* **GuildMessages**
* **GuildMembers**\*
* **GuildBans**
* **GuildEmojisAndStickers**
* **GuildIntegrations**
* **GuildWebhooks**
* **GuildInvites**
* **GuildVoiceStates**
* **GuildPresences**\*
* **GuildMessageReactions**
* **GuildMessageTyping**
* **DirectMessages**
* **DirectMessageReactions**
* **DirectMessageTyping**

#### Example Usage of Intents:
```js title="index.js"
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences"],
    events: ["onMessage"],
    ...
})
```

## [Permissions](https://discord.com/developers/docs/topics/permissions)

### Guild Permissions

* **createinvite** &rarr; Allows creation of instant invites.
* **kickmembers** &rarr; Allows kicking members.
* **banmembers** &rarr; Allows banning members.
* **administrator** &rarr; Allows all permissions and bypasses channel permission overwrites.
* **managechannels** &rarr; Allows management and editing of channels.
* **manageguild** &rarr; Allows management and editing of the guild.
* **addreactions** &rarr; Allows for the addition of reactions to messages.
* **viewauditlog** &rarr; Allows for viewing of audit logs.
* **viewchannel** &rarr; Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels.
* **sendmessages** &rarr; Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in threads).
* **sendttsmessages** &rarr; Allows for sending of `/tts` messages.
* **managemessages** &rarr; Allows for deletion of other users messages.
* **embedlinks** &rarr; Links sent by users with this permission will be auto-embedded.
* **attachfiles** &rarr; Allows for uploading images and files.
* **readmessagehistory** &rarr; Allows for reading of message history.
* **mentioneveryone** &rarr; Allows for using the `@everyone` tag to notify all users in a channel, and the `@here` tag to notify all online users in a channel.
* **useexternalemojis** &rarr; Allows the usage of custom emojis from other servers.
* **viewguildinsights** &rarr; Allows for viewing guild insights.
* **changenickname** &rarr; Allows for modification of own nickname.
* **managenicknames** &rarr; Allows for modification of other users nicknames.
* **manageroles** &rarr; Allows management and editing of roles.
* **managewebhooks** &rarr; Allows management and editing of webhooks. 
* **manageemojisandstickers** &rarr;  Allows management and editing of emojis and stickers.
* **useapplicationcommands** &rarr; Allows members to use application commands, including slash commands and context menu commands.
* **manageevents** &rarr; Allows for creating, editing, and deleting scheduled events.
* **managethreads** &rarr; Allows for deleting and archiving threads, and viewing all private threads.
* **createpublicthreads** &rarr; Allows for creating public and announcement threads.
* **createprivatethreads** &rarr; Allows for creating private threads. 
* **useexternalstickers** &rarr; Allows the usage of custom stickers from other servers.
* **sendmessagesinthreads** &rarr; Allows for sending messages in threads. 
* **moderatemembers** &rarr; Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels

### Voice Permissions

* **priorityspeaker** &rarr; Allows for using priority speaker in a voice channel.
* **stream** &rarr; Allows the user to go live.
* **connect** &rarr; Allows for joining of a voice channel.
* **speak** &rarr; Allows for speaking in a voice channel.
* **mute** &rarr; Allows for muting members in a voice channel.
* **deafen** &rarr; Allows for deafening of members in a voice channel.
* **movemembers** &rarr; Allows for moving of members between voice channels.
* **usevad** &rarr; Allows for using voice-activity-detection in a voice channel.
* **requesttospeak** &rarr; Allows for requesting to speak in stage channels.
* **useembeddedactivities** &rarr; Allows for using Activities in a voice channel.

<!--- links -->

[1]: #discord-gateaway-intents
[2]: #discord-api-permissions
[3]: https://discord.com/developers/docs/topics/gateway#list-of-intents