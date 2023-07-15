---
title: $getClientInvite
description: $getClientInvite will return your bot's invite with specified permissions.
id: getClientInvite
---

`$getClientInvite` will return your bot's invite with specified permissions.

## Usage

```php
$getClientInvite[...perms?]
```

## Parameters

| Field  | Type   | Description                                        | Required |
| ------ | ------ | -------------------------------------------------- | :------: |
| perms? | string | Permissions you want to be included in the invite. |  false   |

<details>
  <summary><h3> Discord API Permissions </h3></summary>

| Permission              |                                                                 |
| ----------------------- | --------------------------------------------------------------- |
| createinvite            | Permission to create guild invites                              |
| kickmembers             | Permission to kick guild members                                |
| banmembers              | Permission to ban guild members                                 |
| administrator           | Administrator Permissions                                       |
| managechannel           | Permission to manage guild channels                             |
| manageserver            | Permissions to modify server settings                           |
| addreactions            | Permissions to add reactions                                    |
| viewauditlog            | Permission to view the guild's audit log                        |
| priorityspeaker         | Priority Speaker                                                |
| stream                  | Permission to stream in voice channels                          |
| viewchannel             | Permission to view a certain channel                            |
| sendmessages            | Permission to send messages in a certain channel                |
| sendttsmessages         | Permission to send Text-To-Speech messages                      |
| managemessages          | Permission to manage messages                                   |
| embedlinks              | Permission to embed links                                       |
| attachfiles             | Permission to attach files                                      |
| readmessagehistory      | Permission to read the message history within a certain channel |
| mentioneveryone         | Permission to mention `@everyone`/`@here` and all roles         |
| externalemojis          | Permission to use external emojis                               |
| viewguildinsights       | Permission to view guild insights                               |
| connect                 | Permission to connect to voice channels and stages              |
| mutemembers             | Permission to mute members in voice channels                    |
| deafenmembers           | Permission to deafen members in voice channels                  |
| movemembers             | Permission to move members between voice channels               |
| usevad                  | Permission to use voice-activity-detection                      |
| changenickname          | Permission to change your own nickname                          |
| managenicknames         | Permission to manage other members nicknames                    |
| manageroles             | Permission to manage roles                                      |
| managewebhooks          | Permission to manage webhooks                                   |
| manageemojisandstickers | Permission to manage emojis and stickers                        |
| useappcmds              | Permission to use application commands                          |
| requesttospeak          | Permission to use request-to-speak in stages                    |
| manageevents            | Permission to manage events                                     |
| managethreads           | Permission to manage threads                                    |
| createpublicthreads     | Permission to use public threads                                |
| createprivatethreads    | Permission to use private threads                               |
| createpublicthreads     | Permission to create public threads                             |
| createprivatethreads    | Permission to create private threads                            |
| externalstickers        | Permission to use extrernal stickers                            |
| sendmessageinthreads    | Permission to send messages in threads                          |
| startembeddedactivities | Permission to start activities within voice channels            |
| moderatemembers         | Permission to timeout and remove timeouts from guild members    |

</details>

## Example(s)

This will return your bot's invite with administrator privileges:

```javascript
bot.command({
    name: 'getClientInvite',
    code: `
  Invite me here: $getClientInvite[administrator]
  `
});
```