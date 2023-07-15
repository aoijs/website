import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Callback() {
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");

      const dataToSend = new URLSearchParams({
        client_id: "1000517138802552952",
        client_secret: "wZCZm47MP0JBM8tRWiLO8BIKhOoKdbsq",
        redirect_uri: "http://localhost:3000/callback",
        grant_type: "authorization_code",
        code: code.toString(),
      });

      try {
        const response = await fetch("https://discord.com/api/oauth2/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: dataToSend.toString(),
        });

        console.log(dataToSend.toString());
        if (response.ok) {
          const response = await response.json();
          let fetchstuff = await fetch("https://discord.com/api/v10/users/@me", {
            method: "GET",
            headers: { Authorization: `Bearer ${response.access_token}` },
          });
          await fetchstuff.json();
          console.log(fetchstuff);
        } else {
          console.error("Failed to fetch token:", response.status);
        }
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    fetchData();
  }, [location]);

  return null;
}

export default Callback;
