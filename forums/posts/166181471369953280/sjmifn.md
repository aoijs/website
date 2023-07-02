---
title: "Google Search"
description: "Inspired on $search of Fafa, but this is on google!"
authors:
  name: "@jollyjolli"
  title: Member - 166181471369953280
  userid: "166181471369953280"
  url: https://discord.com/users/166181471369953280
  image_url: https://cdn.discordapp.com/avatars/166181471369953280/2f4fe56628287be868c2de9bca3373d6.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

# REQUIEREMENTS

> install this NPM: googleapis

## For the apiKey's

**[Link 1](https://developers.google.com/custom-search/v1/overview?hl=es-419)** *
*[Link 2](https://programmablesearchengine.google.com/controlpanel/create)**

# CODE:

```js
const { google } = require("googleapis");

async function googleCustomSearch(query, limit) {
  const customsearch = google.customsearch("v1");

  try {
    const response = await customsearch.cse.list({
      q: query,
      cx: "YOUR_SEARCH_ENGINE_ID",
      auth: "YOUR_API_KEY",
      num: limit
    });

    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

bot.functionManager.createFunction({
  name: "$netSearch",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [query, format = "{title} - {link}", limit = 5] = data.inside.splits;

    const searchResults = await googleCustomSearch(query, limit);

    if (searchResults.error) {
      data.result = `An error occurred while performing the search: ${searchResults.error}`;
      return {
        code: d.util.setCode(data)
      };
    }

    if (searchResults.items.length === 0) {
      data.result = "No results found for the given query!";
      return {
        code: d.util.setCode(data)
      };
    }

    const formattedResults = searchResults.items.map((item) => {
      let formattedResult = format;

      const placeholders = {
        "{title}": item.title,
        "{link}": item.link,
        "{snippet}": item.snippet
      };

      for (const placeholder in placeholders) {
        formattedResult = formattedResult.replace(
          new RegExp(placeholder, "g"),
          placeholders[placeholder]
        );
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

# EXAMPLE:

**`$netSearch[query;format;limit]`**

### Vars:

- {title}: Represents the title of each search result.

- {link}: Represents the URL or link of each search result.

- {snippet}: Represents a brief snippet or description of each search result.

#### EXAMPLES OF VARS:

- Display only the titles:
  $netSearch[$message;{title};5]

- Display the titles and URLs:
  $netSearch[$message;{title} - {link};5]

- Display the titles, URLs, and snippets:
  $netSearch[$message;{title} - {link}\n{snippet};5]