import { ImageResponse } from "@vercel/og";
import fetch from 'node-fetch';

export const config = {
  runtime: "edge",
};

async function getFontBase64(fontUrl) {
  const response = await fetch(fontUrl);
  const fontBuffer = await response.buffer();
  const fontBase64 = fontBuffer.toString('base64');
  return fontBase64;
}

const poppinsUrl = 'https://cdn.jsdelivr.net/npm/@fontsource/poppins/files/poppins-latin-400-normal.woff2';
const poppinsBoldUrl = 'https://cdn.jsdelivr.net/npm/@fontsource/poppins/files/poppins-latin-600-normal.woff2';

export default async function (req) {
  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "aoi.js Documentation";

  // ?description=<description>
  const hasDescription = searchParams.has("description");
  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 200)
    : "Create powerful Discord Bots fast, easy.";

  // ?gradient=<color>
  const hasGradient = searchParams.has("gradient");
  let gradient;
  switch (searchParams.get("gradient")) {
    case "green":
      gradient = "linear-gradient(90deg, rgb(0, 200, 0), rgb(150, 200, 0))";
      break;
    case "red":
      gradient = "linear-gradient(90deg, rgb(200, 0, 0), rgb(200, 100, 0))";
      break;
    case "yellow":
      gradient = "linear-gradient(90deg, rgb(200, 200, 0), rgb(200, 200, 150))";
      break;
    default:
      gradient = "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))";
      break;
  }

  // ?logo=<boolean>
  const hasLogo = searchParams.has("logo");
  const logo = hasLogo ? searchParams.get("logo") == "true" : true;

  const poppins = await getFontBase64(poppinsUrl);
  const poppinsBold = await getFontBase64(poppinsBoldUrl);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "#000000",
            backgroundImage: "radial-gradient(circle at 25px 25px, #242424 2%, transparent 0%), radial-gradient(circle at 75px 75px, #242424 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontStyle: "normal",
              padding: "0px 15px",
              borderRadius: "10px",
              color: "white",
              marginTop: -25,
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              backgroundImage: gradient,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontStyle: "normal",
              color: "lightgray",
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
            }}
          >
            {description}
          </div>
        </div>
        {logo && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              bottom: "7px",
              left: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
                opacity: 0.4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "4px",
                  marginTop: "8px",
                  marginBottom: "12.5px",
                  fontStyle: "normal",
                  color: "lightgray",
                }}
              >
                <p style={{ margin: "3px 0", lineHeight: "1" }}>Akarui</p>
                <p style={{ margin: "3px 0", lineHeight: "1" }}>Development</p>
              </div>
            </div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "poppins",
          data: `data:font/woff2;base64,${poppins}`,
          style: "normal",
        },
        {
          name: "poppinsBold",
          data: `data:font/woff2;base64,${poppinsBold}`,
          style: "bold",
        },
      ],
      text: [
        {
          text: title,
          font: "poppinsBold",
          fontSize: 60,
          color: "#000",
          x: 100,
          y: 200,
        },
        {
          text: description,
          font: "poppins",
          fontSize: 40,
          color: "#000",
          x: 100,
          y: 300,
        },
      ],
    }
  );
}
