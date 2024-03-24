import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  DiscordMessages,
  DiscordMessage,
  DiscordMention,
} from "@skyra/discord-components-react";

interface DiscordMentionComponentProps {
  children: ReactNode;
  isLightTheme?: boolean;
}

function DiscordMentionComponent({ children }: DiscordMentionComponentProps) {
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

  return (
    <div>
      <DiscordMessages light-theme={isLightTheme}>
        <DiscordMessage
          author="Akarui Helper"
          avatar="https://cdn.discordapp.com/avatars/1138204326402203691/a_b8d941eebad1a41cf177148834f84bb8.gif?size=4096"
          bot
          verified={true}
        >
          {children}
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}

export { DiscordMentionComponent, DiscordMention };