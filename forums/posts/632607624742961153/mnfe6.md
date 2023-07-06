---
title: "Author button"
description: "A tutorial on how to setup author button with explanation on how it works!"
authors:
  name: "@dodogames"
  title: Member - 632607624742961153
  userid: "632607624742961153"
  url: https://discord.com/users/632607624742961153
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png
tags: ["v6","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

# Author button

Author button is a way to allow the person who executed the command to be the only one able to interact with buttons
rather than everyone. This is useful to prevent interrupting with other people who're using your bot commands, for
example such as blackjack game, help command, etc.

# Requirements

* Aoi.parser installed (for ephemeral messages) otherwise ephemeral won't work except for the rest of the code
* Must have the event `onInteractionCreate` for this to work (if it wasn't obvious)

# Example author button code

```js
module.exports = [{
    name: "authorButton",
    info: {
        description: "Shows an example of a Author Button"
      },
    code: `
    $title[Author Button]
    $description[Press the Button!]
    $color[Random]
    $addButton[1;Example;primary;customID_$authorID;false]`
    }, {
      type: "interaction",
      prototype: "button",
      code:`
    $interactionReply[;{newEmbed:{title:Author Button}{description:First Page.}{color:Random}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]`
    }]
```

# Explanation

We start by adding the button using the function `$addButton`.

We then make sure that it has `_$authorID` within the custom id like `customID_$authorID` but then we start to create an
author interaction using `$interactionData[customId]` which allows us to return the custom id name of the button we have
just created below.

As a result, we remove the property `name:` from the button command and we start separating the custom id and the author
id using `$advancedTextSplit` as we have `_` in our custom id which makes it easy to do that!

Finally, we then add our first `$onlyIf` at the bottom of our interaction code to check if the button has been clicked
by returning it's custom id name and second `$onlyif` to check if the user is the same person who just ran the command
to prevent other users from interacting with the author who ran the command.

Obviously, we respond to the button using `$interactionReply` and we're done after that! Our author button should work
now!