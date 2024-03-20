import type { FC } from "react";

const CommitStats: FC = () => {
    const buildTime = import.meta.env?.PUBLIC_BUILD_TIME as string;
    const commit = import.meta.env?.PUBLIC_COMMIT as string;
    const env = import.meta.env?.PUBLIC_ENV as string;

    return (
        <div>
            <p style={{ fontSize: "10px", fontFamily: "'JetBrainsMono', monospace" }}>Build Time: {buildTime}</p>
            <p style={{ fontSize: "10px", fontFamily: "'JetBrainsMono', monospace" }}>Commit: {commit}</p>
            {(env === "dev" || !env) && (
                <p style={{ 
                    backgroundColor: "rgba(0, 0, 255, 0.4)",
                    borderRadius: "4px",
                    padding: "3px 4px",
                    fontSize: "6px",
                    fontFamily: "'JetBrainsMono', monospace"
                }}>
                    When you see this, that means you forgot to add your PUBLIC_ENV to Astro's environment variables. ;)
                </p>
            )}
        </div>
    );
};

export default CommitStats;