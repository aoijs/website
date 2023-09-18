---
title: Client Intents
description: This page provides an overview of the Client Intents required for various functionalities.
id: intents
---

<!-- omit from toc -->

## MessageContent

- **Description**: Required to read message content.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#message-content)
- **Verification Details**: Verification is needed upon reaching more than 75 guilds.

## Guilds

- **Description**: Required to retrieve information about guilds.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guilds)

## GuildMessages

- **Description**: Required to read guild messages.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-messages)

## GuildMembers

- **Description**: Required to retrieve information about guild members.
- **Verification**: Verification is needed upon reaching more than 75 guilds.

## GuildBans

- **Description**: Required to retrieve information about guild bans.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-bans)

## GuildEmojisAndStickers

- **Description**: Required to retrieve information about guild emojis and/or stickers.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-emojis-and-stickers)

## GuildIntegrations

- **Description**: Required to retrieve information about guild integrations.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-integrations)

## GuildWebhooks

- **Description**: Required to retrieve information about guild webhooks.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-webhooks)

## GuildInvites

- **Description**: Required to retrieve information about guild invites.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-invites)

## GuildVoiceStates

- **Description**: Required to retrieve information about guild voice states.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-voice-states)

## GuildPresences

- **Description**: Required to retrieve information about guild member presences.
- **Verification**: Verification is needed upon reaching more than 75 guilds.

## GuildMessageReactions

- **Description**: Required to retrieve information about guild message reactions.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#guild-message-reactions)

## GuildMessageTyping

- **Description**: Required when interacting with any typing related events.

## DirectMessages

- **Description**: Required to interact with direct messages.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#direct-messages)

## DirectMessageReactions

- **Description**: Required to interact with direct message reactions.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#direct-message-reactions)

## DirectMessageTyping

- **Description**: Required to interact with direct message typing.
- [Discord API Documentation](https://discord.com/developers/docs/topics/gateway#direct-message-typing)

---

## Example Usage of Intents

To use intents simply add them to your `AoiClient` in your main file, commonly known as `index.js`.

```javascript
//index.js
const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    events: [],
    intents: ["onMessage", "onInteractionCreate"]
});
```

In the shown `intents: []` array you would then add the needed intents, the more intents the more resources your bot may need. The intents which require verification must be enabled beforehand on the Discord Developer Portal, where you [created your Discord Bot](https://discord.com/developers/applications). After reached 75 guilds, this will need verification from Discord, getting any of these intents is although maybe necessary, not guarantied. You should start using [Application Commands](/guides/application-cmds) instead, to avoid the hassle.
