---
title: "Transcript Custom Function"
description: "$transcript custom function which saves messages of a channel and formats them to a .html file."
authors:
  name: "@faf4a"
  title: Member - 428188716641812481
  userid: "428188716641812481"
  url: https://discord.com/users/428188716641812481
  image_url: https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png
tags: ["aoi.js","Other","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

## Usage

`$transcript[channel?;loggingChannel?]`
- channel ( optional ) -> the channel the transcript will be created of
- loggingChannel ( optional ) -> the channel the transcript will be sent to

You need to install a separate package, called `discord-html-transcripts`.

Simple execute in your shell/console:
```php
npm i discord-html-transcripts@latest
```

---

You would put the following code in your main file, or in most cases your `index.js`:
```js
bot.functionManager.createFunction({
  name: "$transcript",
  type: "djs",
  code: async d => {
    const discordTranscripts = require("discord-html-transcripts");
    const data = d.util.aoiFunc(d);
    const [channel = d.message.channel.id, logchannel = d.message.channel.id] = data.inside.splits;
    let channelid = await d.util.getChannel(d, channel);
    let loggingid = await d.util.getChannel(d, logchannel);
    const attachment = await discordTranscripts.createTranscript(channelid, {
      filename: "transcript.html",
      saveImages: true,
      poweredBy: false,
    });

    const f = await loggingid.send({
      files: [attachment],
    });

    data.result = f;
    return {
      code: d.util.setCode(data),
    };
  }
});
```

After that execute the function and let the magic happen! (can take longer in large channels / many messages)