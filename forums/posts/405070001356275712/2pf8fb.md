---
title: "8ball command"
description: "8ball command"
authors:
  name: "@arkwell"
  title: Member - 405070001356275712
  userid: "405070001356275712"
  url: https://discord.com/users/405070001356275712
  image_url: https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---



```js
module.exports = [{
    name: "8ball",
    code: `$reply
    $randomText[Yes, definitely.;It is certain.;Without a doubt.;Most likely.;Outlook good.;Yes.;Signs point to yes.;Reply hazy, try again.;Ask again later.;Better not tell you now.;Cannot predict now.;Concentrate and ask again.;Don't count on it.;My reply is no.;My sources say no.;Outlook not so good.;Very doubtful.;It is decidedly so.;You may rely on it.;As I see it, yes.;It is known.;All signs point to yes.;The answer is unclear.;It's possible.;The stars say no.;It is not looking good.;It's a toss-up.;I wouldn't bet on it.;Doubtful at best.;Signs are pointing in your favor.;The outcome is uncertain.;Try asking again later.;You're better off not knowing.;Don't get your hopes up.;It's a long shot.;Chances are slim.;It's in the realm of possibility.;The signs are promising.;I'm leaning towards yes.;It's a strong possibility.;Don't rely on it too much.;Keep your expectations low.;It's looking promising.;The odds are in your favor.;You might be pleasantly surprised.;It's worth a try.;Don't be too optimistic.;The future is uncertain.;It's up to you.;The answer lies within you.]
    $onlyIf[$message!=;Ask me a question.]
    `
}];
```