import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export default function Showcase() {
  const [selectedTags, setSelectedTags] = useState([]);
  const items = [
    {
      title: "Author Only Button",
      description: `
    Author button is a way to allow the person who executed the command to be the only one able to interact with buttons rather than everyone. This is useful to prevent interrupting with other people who're using your bot commands, for example, such as a blackjack game, help command, etc.
    
    <h2> Requirements <h2 />
    * Aoi.parser installed (for ephemeral messages) otherwise ephemeral won't work except for the rest of the code
    * Must have the event \`onInteractionCreate\` for this to work (if it wasn't obvious)
    
    # Example author button code
    \`\`\`js
    module.exports = [{
      name: "authorButton",
      info: {
        description: "Shows an example of an Author Button"
      },
      code: \`
        $title[Author Button]
        $description[Press the Button!]
        $color[Random]
        $addButton[1;Example;primary;customID_$authorID;false]
      \`
    }, {
      type: "interaction",
      prototype: "button",
      code: \`
        $interactionReply[;{newEmbed:{title:Author Button}{description:First Page.}{color:Random}}]
    
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]
      \`
    }]
    \`\`\`
    `,
      tags: ["v6"],
      path: "wikis/posts/166181471369953280",
    },
    {
      title: "File Names Custom Function",
      description: "Description of item 2",
      tags: ["v6"],
      path: "wikis/posts/166181471369953280",
    },
    {
      title: "Random Car Image",
      description: "idk what to put here",
      tags: ["v7"],
      path: "wikis/posts/166181471369953280",
    },
    {
      title: "Random Country",
      description: "idk what to put here",
      tags: ["other"],
      path: "wikis/posts/166181471369953280",
    },
    // Add more items as needed
  ];

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
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
      : items.filter((item) =>
          selectedTags.some((tag) => item.tags.includes(tag))
        );

  const handleButtonRedirect = (url) => {
    window.location.href = url;
  };

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
            "pills__item--active": selectedTags.includes("v7"),
          })}
          onClick={() => handleTagClick("v7")}
        >
          v6
        </li>
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("v6"),
          })}
          onClick={() => handleTagClick("v6")}
        >
          v7
        </li>
        <li
          className={clsx("pills__item", {
            "pills__item--active": selectedTags.includes("other"),
          })}
          onClick={() => handleTagClick("other")}
        >
          Other
        </li>
      </ul>

      <div className="card-demo">
        {filteredItems.map((item, index) => (
          <div className={clsx("card", "card-wrapper")} key={index}>
            <div className={clsx("card__header", "my-card-header")}>
              <h3>{item.title}</h3>
            </div>
            <div className={clsx("card__body", "my-card-body")}>
              <p>{item.description}</p>
            </div>
            <div className={clsx("card__footer", "my-card-footer")}>
              <Link
                className={clsx("button", "button--secondary", "button--block")}
                to={item.path}
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

// clsx and styles remain the same
const styles = `
.card {
  /* Styles for the card component */
}

.card-wrapper {
  margin-bottom: 20px; /* Adjust the margin as per your requirements */
}

.my-card-header {
  /* Styles for the card header */
}

.my-card-body {
  /* Styles for the card body */
}

.my-card-footer {
  /* Styles for the card footer */
}

.pills {
    /* Styles for the pills container */
    list-style-type: none;
    padding: 0;
    display: flex;
    margin-bottom: 10px;
  }
  
  .pills__item {
    /* Styles for the pill items */
    background-color: #e9e9e9;
    padding: 8px 16px;
    border-radius: 20px;
    margin-right: 8px;
    cursor: pointer;
    color: #555; /* Set the default text color to black/greyish */
  }
  
  .pills__item--active {
    /* Styles for the active pill item */
    background-color: #0d6efd;
    color: #fff; /* Set the active text color to white */
  }
  
`;

// Inject the CSS styles into the head of the document
const styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);
