---
title: "Ticketing system"
description: "This is a ticketing system whose most of the codes are aoi.js while some, like the transcript is made with discord.js. I thought of making this wiki as many people are having doubts or want to make a ticketing system.
"
authors:
  name: "@nanotechpikachu"
  title: Member - 949588732498018324
  userid: "949588732498018324"
  url: https://discord.com/users/949588732498018324
  image_url: https://cdn.discordapp.com/avatars/949588732498018324/e8daecdc63c0c4faa5e11c8b1967acc9.png
tags: [ "aoi.js","v6" ]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

This is a ticketing system whose most of the codes are aoi.js while some, like the transcript is made with discord.js. I
thought of making this wiki as many people are having doubts or want to make a ticketing system.

## Getting started

I will start with some prerequisites which if you have would be splendid!

- Knowledge about aoi js and how it works. (A stage between beginning - intermediate would be good even if you aren't,
  it's ok.)
- Discord.js Knowledge (not necessary)

I will also include my version for which I have tried the code and it worked perfectly fine.

- Aoi Version: 6.2.6
- NodeJS Version: 18.16.0

So in this wiki, I will give you the ticketing system code with functions like transcript (html), auto transcript etc.
This is primarily made with Aoi while some of them like transcript uses discord.js codes.

## Installations needed

The following libraries/modules are needed:

- `npm i aoi.js` (AOI)
- `npm i @akarui/aoi.parser` (AOI Parser)
- `npm i discord.js` (Discord.js)
- `npm i discord-html-transcripts` (Transcript)

## Variables folder

Please put the following vars in your `variables.js` file.

```js
tick_e: "false",
    tick_r
:
"",
    tick
:
"false",
    tick_c
:
"0",
    transcript_channel
:
"$channelID",
    tick_describe
:
"Hey, this is your ticket. Support will arrive shortly.",
    panel_title
:
"Open a ticket",
    ticket_title
:
"Ticket",
    panel_desc
:
"Click the button to open a ticket!",
    button_name
:
"Open ticket",
    ch_name
:
"tick",
    auto_tran
:
"false"
```

## Notes and References

You can refer the aoi docs for information regarding the functions and how to use them also the support server for help.

This code is made with reference to the **old Discord Username** like `NanotechPikachu#6406` and hence, `$userTag` is
used. With the outbreak of the **new Username** like `@nanotechpikachu`, the `$userTag` function will
show `nanotechpikachu#0` so, you can use `$username` in places where I have used `$userTag`.

Also, you can edit the `close` button to not delete the channel but, revoke the access of the ticket owner. Much more by
using your imagination can be done.

**Note:** *When I was copying my code from my host, there is a chance that some errors might be there in the github gist
link I attached. If you encounter any errors which affects it's functionality, please do say so that I can rectify
them.*

## Code

I won't waste time and will share the code. Since the code is too long, I will attach my GitHub gist link.

Code: https://gist.github.com/NanotechPikachu/1e3f8254ec4643ed279a478490896020

**Note:** The images are for reference purposes only and the title, description, etc will *vary as per the value of
vars!*

## Credits

The code's credit majorly belongs to me but still, I have to give credits to some people and they are:

- The person(s) whom I took inspiration to create this code. As I don't know their name, I won't comment.
- Fafa (for helping me with transcript code.)
- The wonderful staff and support team of Aoi support server who helped me with the bugs of my code.
- Last but no the least, to my fellow coders.

## Contact me

If you encounter any problems or have any doubt, feel free to contact me and ask it out. I will reply and try to clear
your doubts as soon as I can. You can reply to this wiki or Discord me.
Discord(new username) - @nanotechpikachu

Thanks for reading and have a wonderful coding journey ahead!