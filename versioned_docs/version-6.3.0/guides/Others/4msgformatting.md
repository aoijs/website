---
title: Message Formatting
description: This page is covering all about message formatting.
id: msgformatting
---

**This page is all about message formatting.**

---

| TYPE                    | STRUCTURE           | EXAMPLE                          |                                                              PREVIEW                                                               |
| ----------------------- | ------------------- | -------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------: |
| User                    | <@USER_ID>          | <@608358453580136499>            |       ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087794022237622423/lMb3KvEpmwAAAABJRU5ErkJggg.png)        |
| User                    | <@!USER_ID>         | <@!608358453580136499>           |       ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087794022237622423/lMb3KvEpmwAAAABJRU5ErkJggg.png)        |
| Channel                 | <#CHANNEL_ID>       | <#832704676096245800>            |      ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087794841330647111/gvgxIOTS20YwAAAABJRU5ErkJggg.png)       |
| Role                    | <@&ROLE_ID>         | <@&774059181820870696>           |      ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087795311663132723/AEXcn7FBOmjVAAAAAElFTkSuQmCC.png)       |
| Slash Command           | </NAME:COMMAND_ID>  | </help:1061818977933873282>      | ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087795649048752238/J4pwZZqgNLwAjtUrisMMRCcAAAAASUVORK5CYII.png) |
| Standard Emoji          | Unicode Characters  | ❤️                                |                                                                                                                                    |
| Custom Emoji            | <:NAME:ID>          | <:lerefblob:1010320053687832586> |                                                                                                                                    |
| Custom Emoji (Animated) | <a:NAME:ID>         | <a:b1nzy:392938283556143104>     |                                                                                                                                    |
| Unix Timestamp          | <t:TIMESTAMP>       | <t:1619757519>                   |      ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087796841053171833/wX6f10lPbNKAgAAAAASUVORK5CYII.png)      |
| Unix Timestamp (Styled) | <t:TIMESTAMP:STYLE> | <t:1619757519:d>                 |      ![img](https://cdn.discordapp.com/attachments/1082168708866244648/1087797013472612383/8fZajSBpMWcIIAAAAASUVORK5CYII.png)      |

### Unix Timestamp Formatting

| STYLE | EXAMPLE OUTPUT               | DESCRIPTION     |
| :---: | ---------------------------- | --------------- |
|   t   | 23:20                        | Short Time      |
|   T   | 23:20:30                     | Long Time       |
|   d   | 20/04/2021                   | Short Date      |
|   D   | 20 April 2021                | Long Date       |
|   f   | 20 April 2021 23:20          | Short Date/Time |
|   F   | Tuesday, 20 April 2021 23:20 | Long Date/Time  |
|   R   | 2 years ago                  | Relative Time   |
