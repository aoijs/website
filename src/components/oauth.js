import React, { useContext } from "react";
import { AuthContext } from "@docusaurus/core/lib/client/exports";

function DiscordOAuthButton() {
  const { isAuthed } = useContext(AuthContext);

  const handleClick = () => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1000517138802552952&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify";
  };

  if (isAuthed) {
    return <p>You're authenticated</p>;
  }

  return (
    <button onClick={handleClick}>
      Login with Discord
    </button>
  );
}

export default DiscordOAuthButton;
