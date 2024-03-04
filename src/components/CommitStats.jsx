const CommitStats = () => {
    const buildTime = import.meta.env.PUBLIC_BUILD_TIME;
    const commit = import.meta.env.PUBLIC_COMMIT;
    const env = import.meta.env.PUBLIC_ENV;

    return (
        <div>
            <p style={{ fontSize: '10px', fontFamily: 'monospace' }}>Build Time: {buildTime}</p>
            <p style={{ fontSize: '10px', fontFamily: 'monospace' }}>Commit: {commit}</p>
            {env === "dev" && (<p style={{ fontSize: '10px', fontFamily: 'monospace' }}>Simulated for DEV</p>)}
        </div>
    );
};

export default CommitStats;