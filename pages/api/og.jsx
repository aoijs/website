import { ImageResponse } from "@vercel/og";
export const config = {
  runtime: "edge",
};

export default async function (req) {
  const inter = await font;

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
              color: "white",
              marginTop: -25,
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              backgroundImage:
                "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontStyle: "normal",
              color: "lightgray",
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
            }}
          >
            {description}
          </div>
        </div>
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
            <img
              src="https://cdn.discordapp.com/attachments/1058843428831629443/1194650171749974118/image-removebg-preview_1.png"
              style={{
                opacity: 0.3,
                width: "50px",
                height: "50px",
                marginBottom: "10px",
              }}
            />
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
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
