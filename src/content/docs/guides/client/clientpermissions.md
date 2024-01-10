---
title: Client Permissions
description: This page provides an overview of the Client Permissions required for various functions.
id: permissions
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/8.png
---

## createinvite

- Allows creation of instant invites
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 2

## kickmembers

- Allows kicking members
- Guild
- PermissionsBitField: 3

## banmembers

- Allows banning members
- Guild
- PermissionsBitField: 4

## administrator

- Allows all permissions and bypasses channel permission overwrites
- Guild
- PermissionsBitField: 5
- danger

## managechannels

- Allows management and editing of channels
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 6

## manageguild

- Allows management and editing of the guild
- Guild
- PermissionsBitField: 7

## addreactions

- Allows for the addition of reactions to messages
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 8

## viewauditlog

- Allows for viewing of audit logs
- Guild
- PermissionsBitField: 9

## priorityspeaker

- Allows for using priority speaker in a voice channel
- Guild
- Channel Type: Voice
- PermissionsBitField: 10

## stream

- Allows the user to go live
- Guild
- Channel Type: Voice
- PermissionsBitField: 11

## viewchannel

- Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 12

## sendmessages

- Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in threads)
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 13

## sendttsmessages

- Allows for sending of /tts messages
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 14

## managemessages

- Allows for deletion of other users messages
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 15

## embedlinks

- Links sent by users with this permission will be auto-embedded
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 16

## attachfiles

- Allows for uploading images and files
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 17

## readmessagehistory

- Allows for reading of message history
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 18

## mentioneveryone

- Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 19
- danger

## useexternalemojis

- Allows the usage of custom emojis from other servers
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 20

## viewguildinsights

- Allows for viewing guild insights
- Guild
- PermissionsBitField: 21

## connect

- Allows for joining of a voice channel
- Guild
- Channel Types: V, S
- PermissionsBitField: 22

## speak

- Allows for speaking in a voice channel
- Guild
- Channel Type: Voice
- PermissionsBitField: 23

## mutemembers

- Allows for muting members in a voice channel
- Guild
- Channel Types: V, S
- PermissionsBitField: 24

## deafenmembers

- Allows for deafening of members in a voice channel
- Guild
- Channel Type: Voice
- PermissionsBitField: 25

## movemembers

- Allows for moving of members between voice channels
- Guild
- Channel Types: V, S
- PermissionsBitField: 26

## usevad

- Allows for using voice-activity-detection in a voice channel
- Guild
- Channel Type: Voice
- PermissionsBitField: 27

## changenickname

- Allows for modification of own nickname
- User
- PermissionsBitField: 28

## managenicknames

- Allows for modification of other users nicknames
- Guild
- PermissionsBitField: 29

## manageroles

- Allows management and editing of roles
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 30

## managewebhooks

- Allows management and editing of webhooks
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 31

## manageemojisandstickers

- Allows management and editing of emojis & stickers
- Guild
- deprecated

## manageguildexpressions

- Allows management and editing of emojis, stickers, and soundboard sounds
- Guild
- not implemented

## useapplicationcommands

- Allows members to use application commands, including slash commands and context menu commands.
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 33

## requesttospeak

- Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)
- Guild
- Channel Type: Stage
- NOT FINAL
- PermissionsBitField: 34

## manageevents

- Allows for creating, editing, and deleting scheduled events
- Guild
- Channel Types: V, S
- PermissionsBitField: 35

## managethreads

- Allows for deleting and archiving threads, and viewing all private threads
- Guild
- Channel Type: Text
- PermissionsBitField: 36

## createpublicthreads

- Allows for creating public and announcement threads
- Guild
- Channel Type: Text
- PermissionsBitField: 37

## createprivatethreads

- Allows for creating private threads
- Guild
- Channel Type: Text
- PermissionsBitField: 38

## useexternalstickers

- Allows the usage of custom stickers from other servers
- Guild
- Channel Types: T, V, S
- PermissionsBitField: 39

## sendmessagesinthreads

- Allows for sending messages in threads
- Guild
- Channel Type: Text
- PermissionsBitField: 40

## useembeddedactivities

- Allows for using Activities (applications with the `EMBEDDED` flag) in a voice channel
- Guild
- Channel Type: Voice
- PermissionsBitField: 41

## moderatemembers

- Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels
- User, Guild
- Channel Type: Text, Voice, Stage
- PermissionsBitField: 42

## viewcreatormonetizationanalytics

- Allows for viewing role subscription insights (OWNER ONLY)
- Guild
- PermissionsBitField: 43

## usesoundboard

- Allows for using soundboard in a voice channel
- Voice
- PermissionsBitField: 44

## useexternalsounds

- Allows the usage of custom soundboard sounds from other servers
- User, Guild
- PermissionsBitField: 45

## sendvoicemessages

- Allows sending voice messages
- User, Guild
- PermissionsBitField: 46
