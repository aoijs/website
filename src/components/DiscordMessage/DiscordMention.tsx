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
    <div className="not-content">
      <DiscordMessages light-theme={isLightTheme}>
        <DiscordMessage
          author="Akarui Helper"
          avatar="https://i.imgur.com/vU34KOa.png"
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