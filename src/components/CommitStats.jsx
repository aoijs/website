const CommitStats = () => {
    const buildTime = import.meta.env?.PUBLIC_BUILD_TIME;
    const commit = import.meta.env?.PUBLIC_COMMIT;
    const env = import.meta.env?.PUBLIC_ENV;

    return (
        <div>
            <p style={{ fontSize: '10px', fontFamily: 'JetBrainsMono, monospace' }}>Build Time: {buildTime}</p>
            <p style={{ fontSize: '10px', fontFamily: 'JetBrainsMono, monospace' }}>Commit: {commit}</p>
            {(env === "dev" || !env) && (
                <p style={{ 
                    backgroundColor: "rgba(0, 0, 255, 0.4)",
                    borderRadius: "4px",
                    padding: "3px 4px",
                    fontSize: '10px', 
                    fontFamily: 'JetBrainsMono, monospace' 
                }}>
                    Simulated for better Developer Experience
                </p>
            )}
        </div>
    );
};

export default CommitStats;