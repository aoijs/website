import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ReactMarkdown from "react-markdown";

export default function Showcase() {
  const [selectedTags, setSelectedTags] = useState([]);
  const items = [
    {
      "title": "Random memes",
      "description": 'They are funny images of trending memes totally in Spanish.',
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/1029818509364047933/ryko5y"
    },
    {
      "title": "Bot Guild Create Log Command",
      "description": "This command depicts or gets executed when a bot joins a guild, it logs the message with full guild Information in a particular pvt or open channel!",
      "tags": [
        "v6",
        "Other",
        "aoi.js"
      ],
      "path": "/wikis/posts/1034802804964995142/kphbt"
    },
    {
      "title": "Dm or guild help",
      "description": "You can set the call type of the help command: DM or NONE In fact, DM only plays a role, because if the perpenal 'type' does not correspond to DM",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/1060920802503036948/99c6nn"
    },
    {
      "title": "Prefix custom function",
      "description": "Returns the prefix you used to call the command.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/1077733015846932530/iitgox"
    },
    {
      "title": "Translate custom function",
      "description": "Function that will translate something.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/1096717977304453160/8djazp"
    },
    {
      "title": "Simple Welcome Card",
      "description": "just simple welcome card using aoi.canvas",
      "tags": [
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/1096717977304453160/nhjf7f"
    },
    {
      "title": "msgAfter function",
      "description": "This will help people to get arguments ($msgAfter[2] --> arg3 arg4 ...)",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/1096717977304453160/v71q0o"
    },
    {
      "title": "Cat Command",
      "description": "Cat command nothing interesting.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/1096717977304453160/vwxtre"
    },
    {
      "title": "Guess the country game",
      "description": "a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg ",
      "tags": [
        "v6",
        "aoi.js",
        "Other"
      ],
      "path": "/wikis/posts/1121808241974837308/txlnl"
    },
    {
      "title": "Voice Channel Count",
      "description": "¡Hey! With this command you will know in how many Voice Channels is your bot connected to.\n**Variables needed**:  `vcCount: 0`\n¿For what I need this code? I dont know, but the reason why I use it is in case I want to restart the host and I do not want some user that's listening to music stop listening suddenly",
      "tags": [
        "v6",
        "aoi.js",
        "aoi.music"
      ],
      "path": "/wikis/posts/166181471369953280/0ggsc"
    },
    {
      "title": "File Names Custom Function",
      "description": "Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. ",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/166181471369953280/eff65g"
    },
    {
      "title": "Get Weather",
      "description": "A simple custom function for getting the weather of someplace.\nKinda useless :)",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/166181471369953280/i1psxm"
    },
    {
      "title": "Random Car Image",
      "description": "Very simple code",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/166181471369953280/nji73d"
    },
    {
      "title": "Country Information Custom Function",
      "description": "The $country function provides detailed information about a specific country. By specifying the country name and desired format, you can retrieve various details such as the country's name in English or Spanish, continent information, capital city, dialing code, country codes, top-level domain, area measurement, flag in emoji format, and high-resolution flag image.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/166181471369953280/ny063"
    },
    {
      "title": "Random Country",
      "description": "A code for get information about a random code.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/166181471369953280/p2o9s"
    },
    {
      "title": "Google Search",
      "description": "Inspired on $search of Fafa, but this is on google!",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/166181471369953280/sjmifn"
    },
    {
      "title": "8ball command",
      "description": "8ball command",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/405070001356275712/2pf8fb"
    },
    {
      "title": "Serverinfo command",
      "description": "Requires GuildPresences in intents",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/405070001356275712/6bdeo"
    },
    {
      "title": "Botinfo command",
      "description": "simple botinfo command",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/405070001356275712/sr2wtw"
    },
    {
      "title": "fetchInvite function",
      "description": "Easily fetch the information of Invites using custom functions!",
      "tags": [
        "aoi.js",
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/428188716641812481/6ftrh8"
    },
    {
      "title": "RPS game",
      "description": "Simple RPS game.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/428188716641812481/gm5x4"
    },
    {
      "title": "Transcript Custom Function",
      "description": "$transcript custom function which saves messages of a channel and formats them to a .html file.",
      "tags": [
        "aoi.js",
        "Other",
        "v6"
      ],
      "path": "/wikis/posts/428188716641812481/nw36qo"
    },
    {
      "title": "search function",
      "description": "$search custom function for aoi.music which returns search results of either youtube or soundcloud.",
      "tags": [
        "aoi.js",
        "aoi.music",
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/428188716641812481/wvkxjp"
    },
    {
      "title": "callAwaited Custom Function",
      "description": "Calls an awaited command.",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/590267498192961540/0mi2zp"
    },
    {
      "title": "commandExists Custom Function",
      "description": "Check if a command exists through its type and name.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/590267498192961540/jqpcsp"
    },
    {
      "title": "Unicode character unescape",
      "description": "This custom function allows you to unescape unicode characters. For example, if you had this string (which is escaped): `Hey there, wassup?`, then by using this function, you would get `Hey there, wassup?`.",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/591690683509768223/0k0txb"
    },
    {
      "title": "New if in old if commands",
      "description": "This code allows you to use the new `$if` in old `$if` commands",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/591690683509768223/82om08"
    },
    {
      "title": "Is file empty function",
      "description": "This function will return `true` or `false` based on whether the file specified is empty or not.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/591690683509768223/d0m8v5"
    },
    {
      "title": "Download function",
      "description": "This is a custom function for downloading files accessible through https.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/591690683509768223/h3mscp"
    },
    {
      "title": "Yes or no command",
      "description": "Yes or no command",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/632607624742961153/0s8eh9"
    },
    {
      "title": "HowGamer command",
      "description": "Checks how gamer you're for no reason, It's just for fun so.",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/632607624742961153/ic9vu7"
    },
    {
      "title": "Long Serverinfo command",
      "description": "A long serverinfo command just for you. Nothing fancy about it.",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/632607624742961153/iiwq2"
    },
    {
      "title": "Author button",
      "description": "A tutorial on how to setup author button with explanation on how it works!",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/632607624742961153/mnfe6"
    },
    {
      "title": "Kick command",
      "description": "The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command.",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/689364013297041409/3rabq"
    },
    {
      "title": "Clear command",
      "description": "The clear command allows the user (with permission) to delete fewer than 100 messages. It also provides two additional optional options: filter and channel.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/689364013297041409/psfe2c"
    },
    {
      "title": "Reloading the Commands ",
      "description": "Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands.",
      "tags": [
        "v6",
        "aoi.js",
        "Other"
      ],
      "path": "/wikis/posts/693451182617657394/30bbab"
    },
    {
      "title": "Some thread functions",
      "description": "This wiki is about 3 custom functions for threads: lock, unlock and rename.",
      "tags": [
        "v6",
        "aoi.js",
        "Other"
      ],
      "path": "/wikis/posts/713132410153205802/34unj"
    },
    {
      "title": "Progression bar",
      "description": "A function that makes progression bar to save time and help people who can't do basic maths",
      "tags": [
        "v6",
        "aoi.js",
        "Other"
      ],
      "path": "/wikis/posts/713132410153205802/c6h1efa"
    },
    {
      "title": "Member count with image",
      "description": "A custom function to show the data of server members.",
      "tags": [
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/5sg6ej"
    },
    {
      "title": "Slot Command",
      "description": "A simple, easy slot command",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/715852000096419900/7y0d4k"
    },
    {
      "title": "commands list",
      "description": "A djs code to filter and get your commands list",
      "tags": [
        "Other",
        "v6"
      ],
      "path": "/wikis/posts/715852000096419900/aswziy"
    },
    {
      "title": "anti swear command",
      "description": "A djs code to check if any message contains swear words or not.",
      "tags": [
        "v6",
        "Other",
        "aoi.js"
      ],
      "path": "/wikis/posts/715852000096419900/cy1ltq"
    },
    {
      "title": "toToggleCase",
      "description": "A custom d.js function for text modification.",
      "tags": [
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/dmrmlh"
    },
    {
      "title": "Hack command",
      "description": "A advanced hack command… Made for fun check it out.",
      "tags": [
        "aoi.js",
        "Other",
        "v6"
      ],
      "path": "/wikis/posts/715852000096419900/icaljl"
    },
    {
      "title": "Colored and styled console logging",
      "description": "List of codes for colored and styled console logging.",
      "tags": [
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/sof89f"
    },
    {
      "title": "Emoji Progress Bar",
      "description": "A js function to make a progression bar using emojis.",
      "tags": [
        "aoi.js",
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/szskh"
    },
    {
      "title": "Server captcha verification",
      "description": "A command to make a verification system.",
      "tags": [
        "v6",
        "aoi.js",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/vr5jfn"
    },
    {
      "title": "reverseText",
      "description": "A fun command to modify text and reverse them.",
      "tags": [
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/w2htzj"
    },
    {
      "title": "randomText advanced",
      "description": "A custom function to get random/specified number of words.",
      "tags": [
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/715852000096419900/xzyzwx"
    },
    {
      "title": "Currency Command Balance",
      "description": "A Simple Currency Balance Command",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/730782268175679528/c0xpn"
    },
    {
      "title": "Simple Moderations Clear",
      "description": "This is a simple moderations clear command.",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/730782268175679528/j991sn"
    },
    {
      "title": "Simple avatar command",
      "description": "Simple avatar command for aoi.js v6",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/894309600029999104/jh5tdp"
    },
    {
      "title": "Slash Purge Command",
      "description": "This wiki is about a purge command, an efficient tool enabling users to swiftly delete multiple messages with a single command, rather than tediously removing them one by one. The purge command grants users the ability to specify the exact number of messages they wish to erase, streamlining the process of message management and facilitating a cleaner and more organized communication environment. ",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/909238977721139200/brko2n"
    },
    {
      "title": "Ticketing system",
      "description": "This is a ticketing system whose most of the codes are aoi.js while some, like the transcript is made with discord.js. I thought of making this wiki as many people are having doubts or want to make a ticketing system. ",
      "tags": [
        "aoi.js",
        "v6"
      ],
      "path": "/wikis/posts/949588732498018324/r4uv0q"
    },
    {
      "title": "Roblox group info command",
      "description": "Displays info about a roblox group",
      "tags": [
        "v6",
        "aoi.js"
      ],
      "path": "/wikis/posts/964024743172915220/ebigj"
    },
    {
      "title": "Rank bot victier ",
      "description": "Victier rank bot but aoi.js version",
      "tags": [
        "aoi.js",
        "v6",
        "Other"
      ],
      "path": "/wikis/posts/964024743172915220/hiyv8"
    }
  ];

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleClearSelections = () => {
    setSelectedTags([]);
  };

  const filteredItems =
    selectedTags.length === 0
      ? items
      : items.filter((item) => selectedTags.every((tag) => item.tags.includes(tag)));

  return (
    <div>
      <ul className="pills">
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.length === 0,
          })}
          onClick={handleClearSelections}
        >
          All
        </li>
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("v6"),
          })}
          onClick={() => handleTagClick("v6")}
        >
          v6
        </li>
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("Other"),
          })}
          onClick={() => handleTagClick("Other")}
        >
          Other
        </li>
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("aoi.js"),
          })}
          onClick={() => handleTagClick("aoi.js")}
        >
          aoi.js
        </li>
                <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("Template"),
          })}
          onClick={() => handleTagClick("Template")}
        >
          Template
        </li>
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("discord.js"),
          })}
          onClick={() => handleTagClick("discord.js")}
        >
          discord.js
        </li>
      </ul>

      <div className="card-demo">
        {filteredItems.map((item, index) => (
          <div className={clsx("card", "card-wrapper")} key={index}>
            <div className={clsx("card__header", "my-card-header")}>
              <h3>{item.title}</h3>
            </div>
            <div className={clsx("card__body", "my-card-body")}>
              <p><ReactMarkdown>{item.description}</ReactMarkdown></p>
            </div>
            <div className={clsx("card__image", "my-card-image")}>
              <img src="https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true" alt="Image" />
            </div>
            <div className={clsx("card__footer", "my-card-footer")}>
              <Link
                className={clsx("button", "button--secondary", "button--block")}
                href={item.path}
              >
                Go to Wiki
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// clsx styles
const styles = `
.card-wrapper {
  margin-bottom: 20px;
}
.pills {
    list-style-type: none;
    padding: 0;
    display: flex;
    margin-bottom: 10px;
  }
  
  .pills__item {
    background-color: #e9e9e9;
    padding: 8px 16px;
    border-radius: 20px;
    margin-right: 8px;
    cursor: pointer;
    color: #555;
  }
  
  .pills__item--active {
    background-color: #0d6efd;
    color: #fff;
  }
  
`;

// Injecting clsx styles
const styleElement = typeof document !== "undefined" && document.createElement("style");
if (styleElement) {
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);
}
