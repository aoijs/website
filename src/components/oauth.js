
import React from "react";

function DiscordOAuthButton() {

  const handleClick = () => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1000517138802552952&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify";
  };


  return (
    <button onClick={handleClick}>
      Login with Discord
    </button>
  );
}

export default DiscordOAuthButton;


// https://discord.com/api/oauth2/authorize?client_id=1000517138802552952&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify