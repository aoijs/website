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
} from "@skyra/discord-components-react";
import lerefAvatar from "../../images/contributors/leref.png";

interface DiscordComponentsProps {
  user?: string;
  bot: string;
  embeds?: Embed[];
  buttons?: Button[];
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
  customId: string;
  emoji?: string;
  "emoji-name"?: string;
  url?: string;
  row: number;
}

function DiscordMessagesDark({
  user,
  bot,
  embeds,
  buttons,
}: DiscordComponentsProps) {
  const [isLightTheme, setIsLightTheme] = useState(
    document.documentElement.getAttribute("data-theme") === "light"
  );

  return (
    <div className="not-content">
      <DiscordMessages>
        {user && (
          <DiscordMessage
            author="Leref"
            avatar={lerefAvatar.src}
          >
            {user}
          </DiscordMessage>
        )}
        <DiscordMessage
          author="Akarui Helper"
          avatar="https://cdn.discordapp.com/avatars/1138204326402203691/a_b8d941eebad1a41cf177148834f84bb8.gif?size=4096"
          bot
          verified={true}
        >
          {bot}
          {embeds &&
            embeds.map((embed, embedIndex) => (
              <DiscordMessage key={embedIndex}>
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
              </DiscordMessage>
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

function DiscordMessagesLight({
  user,
  bot,
  embeds,
  buttons,
}: DiscordComponentsProps) {
  const [isLightTheme, setIsLightTheme] = useState(
    document.documentElement.getAttribute("data-theme") === "light"
  );

  return (
    <div className="not-content">
      <DiscordMessages lightTheme>
        {user && (
          <DiscordMessage
            author="Leref"
            avatar={lerefAvatar.src}
          >
            {user}
          </DiscordMessage>
        )}
        <DiscordMessage
          author="Akarui Helper"
          avatar="https://cdn.discordapp.com/avatars/1138204326402203691/a_b8d941eebad1a41cf177148834f84bb8.gif?size=4096"
          bot
          verified={true}
        >
          {bot}
          {embeds &&
            embeds.map((embed, embedIndex) => (
              <DiscordMessage key={embedIndex}>
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
              </DiscordMessage>
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
