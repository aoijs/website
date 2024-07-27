import type { FC } from "react";

const CommitStats: FC = () => {
  const buildTime = import.meta.env?.PUBLIC_BUILD_TIME as string;
  const commit = import.meta.env?.PUBLIC_COMMIT as string;

  return (
    <div>
      <p style={{ fontSize: "8px" }}>
        Build Time: {buildTime}
      </p>
      <p style={{ fontSize: "8px" }}>
        Commit: {commit}
      </p>
    </div>
  );
};

export default CommitStats;
