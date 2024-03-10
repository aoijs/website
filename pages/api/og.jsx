import { ImageResponse } from "@vercel/og";
import { listenerCount } from "events";
export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../assets/Poppins-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fontbold = fetch(
  new URL("../../assets/Poppins-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const calculateFontSize = (description) => {
  const baseSize = 32;
  const characterLimit = 50;
  const reductionPerCharacter = 0.1;

  if (description.length > characterLimit) {
    return (
      baseSize - (description.length - characterLimit) * reductionPerCharacter
    );
  } else {
    return baseSize;
  }
};

export default async function (req) {
  const inter = await font;
  const interbold = await fontbold;

  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "aoi.js Documentation";

  // ?description=<description>
  const hasDescription = searchParams.has("description");
  let description = hasDescription
    ? searchParams.get("description")?.slice(0, 200)
    : "Create powerful Discord Bots fast, easy.";

  // ?replace=<boolean>
  const hasReplace = searchParams.has("replace");
  const replace = hasReplace ? searchParams.get("replace") == "true" : true;

  description = hasDescription
    ? searchParams.get("description")?.slice(0, 200)
    : "Create powerful Discord Bots fast, easy.";

  if (replace) {
    const words = description.split(" ");
    if (words.length > 2 && words[1] === "will") {
      words[2] = words[2][0].toUpperCase() + words[2].slice(1) + "s";
      description = words.join(" ");
    }
  }

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
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #242424 2%, transparent 0%), radial-gradient(circle at 75px 75px, #242424 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontStyle: "normal",
              padding: "0px 15px",
              borderRadius: "10px",
              fontFamily: "'interbold'",
              color: "white",
              marginBottom: 20,
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
              backgroundImage: gradient,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: calculateFontSize(description),
              fontStyle: "normal",
              fontFamily: "'inter'",
              color: "lightgray",
              lineHeight: 1.3,
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
          name: "inter",
          data: inter,
          style: "normal",
        },
        {
          name: "interbold",
          data: interbold,
          style: "bold",
        },
      ],
    }
  );
}
