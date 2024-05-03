import type { FC } from "react";

const CommitStats: FC = () => {
  const buildTime = import.meta.env?.PUBLIC_BUILD_TIME as string;
  const commit = import.meta.env?.PUBLIC_COMMIT as string;
  const env = import.meta.env?.PUBLIC_ENV as string;

  return (
    <div>
      <p style={{ fontSize: "10px", fontFamily: "'JetBrainsMono', monospace" }}>
        Build Time: {buildTime}
      </p>
      <p style={{ fontSize: "10px", fontFamily: "'JetBrainsMono', monospace" }}>
        Commit: {commit}
      </p>
      {(env === "dev" || !env) && (
        <>
          <br />
          <p
            style={{
              backgroundColor: "var(--sl-color-red-low)",
              borderRadius: "4px",
              color: "var(--sl-color-text)",
              padding: "3px 4px",
              fontSize: "12px",
            }}
          >
            When you see this message during production, please open an{" "}
            <a href="https://github.com/aoijs/website/issues">issue</a> on
            Github.
          </p>
        </>
      )}
    </div>
  );
};

export default CommitStats;
