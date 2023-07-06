---
title: "Some thread functions"
description: "This wiki is about 3 custom functions for threads: lock, unlock and rename."
authors:
  name: "@p4olo."
  title: Member - 713132410153205802
  userid: "713132410153205802"
  url: https://discord.com/users/713132410153205802
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png
tags: ["v6","aoi.js","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

### FUNCTIONS:
- $lockThread[threadID]
- $unlockThread[threadID]
- $renameThread[threadID;newName]

### CODE:
Put this code in you main file:
```js
bot.functionManager.createFunction(
    {
      name: "$lockThread",
      type: "djs",
      code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [threadId] = data.inside.splits;
  
        const thread = await d.message.client.channels.fetch(threadId);
  
        try {
          await thread.setLocked(true);

          return {
            code: d.util.setCode(data),
          };
        } catch (error) {
          console.error(error);
          return d.aoiError.fnError(d, 'custom', {}, 'Failed to lock thread');
        }
      },
    },
    {
      name: "$unlockThread",
      type: "djs",
      code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [threadId] = data.inside.splits;
  
        const thread = await d.message.client.channels.fetch(threadId);
  
        try {
          await thread.setLocked(false);

          return {
            code: d.util.setCode(data),
          };
        } catch (error) {
          console.error(error);
          return d.aoiError.fnError(d, 'custom', {}, 'Failed to unlock thread');
        }
      },
    },
    {
      name: "$renameThread",
      type: "djs",
      code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [threadId, newName] = data.inside.splits;
  
        try {
          const thread = await d.message.client.channels.fetch(threadId);
  
          await thread.setName(newName);

          return {
            code: d.util.setCode(data),
          };
          
        } catch (error) {
          console.error(error);
          return d.aoiError.fnError(d, 'custom', {}, 'Failed to rename thread');
        }
      },
    });
```
