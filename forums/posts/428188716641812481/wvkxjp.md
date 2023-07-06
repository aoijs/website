---
title: "search function"
description: "$search custom function for aoi.music which returns search results of either youtube or soundcloud."
authors:
  name: "@faf4a"
  title: Member - 428188716641812481
  userid: "428188716641812481"
  url: https://discord.com/users/428188716641812481
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png
tags: ["aoi.js","aoi.music","v6","Other"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

## Usage

- Put the code in your index.js
- Ensure you have aoi.music installed, otherwise it won't work.
- `$search[type;query;format?;list? = 5]` for example `$search[youtube;Hello;{title} by {artist} ({duration});5]`

## Code:

```js
bot.functionManager.createFunction({
  name: "$search",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [type = "youtube", query, format = "{title} by {artist} ({duration})", list = 5] = data.inside.splits;

    const searchType = type.toLowerCase() === "youtube" ? 3 : 0;

    let results;
    if (searchType === 3) {
      results = await bot.voiceManager.search(3, query, list);
    } else if (searchType === 0) {
      results = await bot.voiceManager.search(0, query, list);
    }

    if (results.length === 0) {
      data.result = "No songs found with the given query!";
      return {
        code: d.util.setCode(data)
      };
    };

    const formattedResults = results.map((result) => {
      let formattedResult = format;

      const placeholders = {
        "{title}": result.title,
        "{artist}": searchType === 3 ? result.author.name : result.publisher_metadata?.artist || "Unknown Artist",
        "{duration}": searchType === 3 ? result.duration.seconds * 1000: result.duration,
        "{formattedDuration}": searchType === 3 ? result.duration.text : new Date(result.duration).toISOString().substr(14, 5),
        "{id}": result.id,
        "{url}": searchType === 3 ? "https://www.youtube.com/watch?v=" + result.id : result.permalink_url
      };

      for (const placeholder in placeholders) {
        formattedResult = formattedResult.replace(new RegExp(placeholder, "g"), placeholders[placeholder]);
      }

      return formattedResult;
    });

    data.result = formattedResults.join("\n");

    return {
      code: d.util.setCode(data)
    };
  }
});
```

---

## Preview:

![preview](https://cdn.discordapp.com/attachments/1112002806686154752/1122666839835672738/image.png)