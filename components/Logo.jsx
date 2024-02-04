import Image from "next/image";

export function Logo() {
  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/aoijs/website/main/public/favicon.png`}
        alt="aoi.js logo"
        width={30}
        height={30}
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        aoi.js
      </span>
    </div>
  );
}
