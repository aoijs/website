---
title: Message Formatting
description: This page is covering all about message formatting.
id: message-formatting
og_image: https://raw.githubusercontent.com/aoijs/website/main/images/og/16.png
---

| TYPE                    | STRUCTURE               | EXAMPLE                              |                                                      PREVIEW                                                       |
| ----------------------- | ----------------------- | ------------------------------------ | :----------------------------------------------------------------------------------------------------------------: |
| User                    | \<@USER_ID\>            | \<\@608358453580136499\>             |  ![preview](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/user.png)   |
| User (deprecated)       | \<@!USER_ID\>           | \<@!608358453580136499\>             |  ![preview](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/user.png)   |
| Channel                 | \<#CHANNEL_ID\>         | \<#832704676096245800\>              | ![preview](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/channel.png) |
| Role                    | \<@&ROLE_ID\>           | \<@&774059181820870696\>             |  ![preview](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/role.png)   |
| Slash Command           | \</NAME\:COMMAND_ID\>   | \</help\:1061818977933873282\>       |  ![preview](https://raw.githubusercontent.com/aoijs/website/docu/assets/images/previews/msg-formatting/slash.png)  |
| Standard Emoji          | Unicode Characters      | ❤️                                    |                                                                                                                    |
| Custom Emoji            | \<\:NAME\:ID\>          | \<\:lerefblob\:1010320053687832586\> |                                                                                                                    |
| Custom Emoji (Animated) | \<a\:NAME\:ID\>         | \<a\:lerefblob\:392938283556143104\> |                                                                                                                    |
| Unix Timestamp          | \<t\:TIMESTAMP\>        | \<t\:1619757519\>                    |                                                                                                                    |
| Unix Timestamp (Styled) | \<t\:TIMESTAMP\:STYLE\> | \<t\:1619757519\:d\>                 |                                                                                                                    |

### Markdown

| TYPE           | STRUCTURE                | EXAMPLE                        |
| -------------- | ------------------------ | ------------------------------ |
| Big Header     | \# Text                  | \# Hello World                 |
| Medium Header  | \#\# Text                | \#\# Hello World               |
| Small Header   | \#\#\# Text              | \#\#\# Hello World             |
| Numbered Lists | 1\. Item <br /> 2\. Item | 1\. Potato <br /> 2\. Milk     |
| Bullet Lists   | \* Item <br /> \* Item   | \* Discord <br /> \* Twitter   |
| Masked Links   | \[Alt Text\](link)       | \[aoi.js\](https://aoi.js.org) |

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
