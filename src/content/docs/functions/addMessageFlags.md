---
title: $addMessageFlags
description: $addMessageFlags allows you to add flags to a message.
id: addMessageFlags
---
 
`$addMessageFlags` allows you to add specific flags to a message.
 
 ## Usage
 
 ```aoi
 $addMessageFlags[channelID;messageID;flags...]
 ```
 
 ## Parameters
 
 | Field      | Type                                                                                                     | Description                                        | Required |
 | ---------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
 | channelID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)        | ID of the channel where the message is located.    |   true   |
 | messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)        | The ID of the message to update.                   |   true   |
 | flags...   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)        | The message flags to add.                          |   true   |
 
 ## Message Flags
 
 | Name                                   | ID     | Description                                                                     |
 |----------------------------------------|--------|---------------------------------------------------------------------------------|
 | Crossposted                            | 1      | This message has been published to subscribed channels (via Channel Following). |
 | IsCrosspost                            | 2      | This message originated from another channel (via Channel Following).           |
 | SuppressEmbeds                         | 4      | Do not include any embeds when serializing this message.                        |
 | SourceMessageDeleted                   | 8      | The source message for this crosspost has been deleted.                         |
 | Urgent                                 | 16     | This message came from the urgent message system.                               |
 | HasThread                              | 32     | This message has an associated thread, which shares its ID.                     |
 | Ephemeral                              | 64     | This message is only visible to the user who invoked the interaction.           |
 | Loading                                | 128    | This message is an interaction response and the bot is "thinking".              |
 | FailedToMentionSomeRolesInThread       | 256    | This message failed to mention some roles and add their members to the thread.  |
 | ShouldShowLinkNotDiscordWarning        | 1024   | This message flag is not documented by Discord but has a known value.           |
 | SuppressNotifications                  | 4096   | This message will not trigger push and desktop notifications.                   |
 | IsVoiceMessage                         | 8192   | This message is a voice message.                                                |
 
 ## Example(s)
 
 This will send a message and then suppress its embeds:
 
 ```javascript
 client.command({
     name: "addMessageFlags",
     code: `
       $addMessageFlags[$channelID;$get[msg];SuppressEmbeds]
       $let[msg;$channelSendMessage[$channelID;The documentation preview will not be shown. https://aoi.js.org/ ;true]]
     `});
 ```
 
 ```javascript
 client.command({
     name: "addMessageFlags",
     code: `
       $addMessageFlags[$channelID;$get[msg];4]
       $let[msg;$channelSendMessage[$channelID;The documentation preview will not be shown. https://aoi.js.org/ ;true]]
     `});
 ```
