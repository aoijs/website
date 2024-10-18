import { useEffect, useState } from "react";
import {
  DiscordActionRow,
  DiscordAttachments,
  DiscordButton,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedField,
  DiscordEmbedFooter,
  DiscordEmbedFields,
  DiscordStringSelectMenu,
  DiscordStringSelectMenuOption,
} from "@skyra/discord-components-react";
import lerefAvatar from "../../images/contributors/leref.png";

interface DiscordComponentsProps {
  user?: string;
  bot: string;
  embeds?: Embed[];
  buttons?: Button[];
  selectMenus?: SelectMenu[];
}

interface Embed {
  color: string;
  image?: string;
  title: string;
  description?: string;
  footer?: string;
  fields?: EmbedField[];
}

interface EmbedField {
  title: string;
  value: string;
  inline: boolean;
}

interface Button {
  label: string;
  type: string;
  customId?: string;
  emoji?: string;
  "emoji-name"?: string;
  url?: string;
  row: number;
}

interface SelectMenu {
  label: string;
  description: string;
  disabled?: string;
  placeholder?: string;
  emoji?: string;
  options: SelectMenuOption[];
}

interface SelectMenuOption {
  label: string;
  description?: string;
  emoji?: string;
}

function DiscordMessagesDark({
  user,
  bot,
  embeds,
  buttons,
  selectMenus,
}: DiscordComponentsProps) {
  console.log(selectMenus);
  return (
    <div className="not-content discord-component-frame">
      <DiscordMessages>
        {user && (
          <DiscordMessage
            author="Leref"
            roleColor="#f04747"
            avatar={lerefAvatar.src}
          >
            {user}
          </DiscordMessage>
        )}
        <DiscordMessage
          author="aoi.js docs"
          roleColor="#f04747"
          avatar="https://i.imgur.com/vU34KOa.png"
          bot
          verified={true}
        >
          {bot}
          {embeds &&
            embeds.map((embed, embedIndex) => (
              <div key={embedIndex}>
                {embed.fields && (
                  <DiscordEmbed
                    slot="embeds"
                    color={embed.color}
                    image={embed.image}
                    embed-title={embed.title}
                  >
                    {embed.description && (
                      <DiscordEmbedDescription slot="description">
                        {embed.description}
                      </DiscordEmbedDescription>
                    )}
                    {embed.footer && (
                      <DiscordEmbedFooter slot="footer">
                        {embed.footer}
                      </DiscordEmbedFooter>
                    )}
                    <DiscordEmbedFields slot="fields">
                      {embed.fields.map((field, fieldIndex) => (
                        <DiscordEmbedField
                          key={fieldIndex}
                          fieldTitle={field.title}
                          inline={field.inline}
                        >
                          {field.value}
                        </DiscordEmbedField>
                      ))}
                    </DiscordEmbedFields>
                  </DiscordEmbed>
                )}
              </div>
            ))}
          {(buttons || selectMenus) && (
            <DiscordAttachments slot="components">
              {buttons &&
                Array.from(
                  {
                    length:
                      Math.max(...buttons.map((button) => button.row)) + 1,
                  },
                  (_, rowIndex) => (
                    <DiscordActionRow key={rowIndex}>
                      {buttons
                        .filter((button) => button.row === rowIndex)
                        .map((button, index) => {
                          const buttonProps = {
                            type: button.type as
                              | "primary"
                              | "secondary"
                              | "success"
                              | "destructive",
                            ...(button.url && { url: button.url }),
                            ...(button.emoji && { emoji: button.emoji }),
                            ...(button["emoji-name"] && {
                              "emoji-name": button["emoji-name"],
                            }),
                          };

                          return (
                            <DiscordButton {...buttonProps} key={index}>
                              {button.label}
                            </DiscordButton>
                          );
                        })}
                    </DiscordActionRow>
                  )
                )}
              {selectMenus && (
                <>
                  {selectMenus.map((selectMenu, index) => (
                    <DiscordStringSelectMenu
                      key={index}
                      disabled={selectMenu.disabled ? true : false}
                      placeholder={
                        selectMenu.placeholder || selectMenu.options[0].label
                      }
                    >
                      {selectMenu.options.map((option, optionIndex) => (
                        <DiscordStringSelectMenuOption
                          key={optionIndex}
                          label={option.label}
                          description={option.description}
                          emoji={option.emoji}
                        ></DiscordStringSelectMenuOption>
                      ))}
                    </DiscordStringSelectMenu>
                  ))}
                </>
              )}
            </DiscordAttachments>
          )}
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}

function DiscordMessagesLight({
  user,
  bot,
  embeds,
  buttons,
}: DiscordComponentsProps) {
  return (
    <div className="not-content discord-component-frame">
      <DiscordMessages lightTheme>
        {user && (
          <DiscordMessage
            author="Leref"
            roleColor="#f04747"
            avatar={lerefAvatar.src}
          >
            {user}
          </DiscordMessage>
        )}
        <DiscordMessage
          author="aoi.js docs"
          roleColor="#f04747"
          avatar="https://i.imgur.com/vU34KOa.png"
          bot
          verified={true}
        >
          {bot}
          {embeds &&
            embeds.map((embed, embedIndex) => (
              <div key={embedIndex}>
                {embed.fields && (
                  <DiscordEmbed
                    slot="embeds"
                    color={embed.color}
                    image={embed.image}
                    embed-title={embed.title}
                  >
                    {embed.description && (
                      <DiscordEmbedDescription slot="description">
                        {embed.description}
                      </DiscordEmbedDescription>
                    )}
                    {embed.footer && (
                      <DiscordEmbedFooter slot="footer">
                        {embed.footer}
                      </DiscordEmbedFooter>
                    )}
                    <DiscordEmbedFields slot="fields">
                      {embed.fields.map((field, fieldIndex) => (
                        <DiscordEmbedField
                          key={fieldIndex}
                          fieldTitle={field.title}
                          inline={field.inline}
                        >
                          {field.value}
                        </DiscordEmbedField>
                      ))}
                    </DiscordEmbedFields>
                  </DiscordEmbed>
                )}
              </div>
            ))}
          {buttons && (
            <DiscordAttachments slot="components">
              {Array.from(
                {
                  length: Math.max(...buttons.map((button) => button.row)) + 1,
                },
                (_, rowIndex) => (
                  <DiscordActionRow key={rowIndex}>
                    {buttons
                      .filter((button) => button.row === rowIndex)
                      .map((button, index) => {
                        const buttonProps = {
                          type: button.type as
                            | "primary"
                            | "secondary"
                            | "success"
                            | "destructive",
                          ...(button.url && { url: button.url }),
                          ...(button.emoji && { emoji: button.emoji }),
                          ...(button["emoji-name"] && {
                            "emoji-name": button["emoji-name"],
                          }),
                        };

                        return (
                          <DiscordButton {...buttonProps} key={index}>
                            {button.label}
                          </DiscordButton>
                        );
                      })}
                  </DiscordActionRow>
                )
              )}
            </DiscordAttachments>
          )}
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}

function DiscordComponents(props: DiscordComponentsProps) {
  const [isLightTheme, setIsLightTheme] = useState(
    document.documentElement.getAttribute("data-theme") === "light"
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          setIsLightTheme(
            document.documentElement.getAttribute("data-theme") === "light"
          );
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isLightTheme ? (
    <DiscordMessagesLight {...props} />
  ) : (
    <DiscordMessagesDark {...props} />
  );
}

export default DiscordComponents;
