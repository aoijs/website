const CommitStats = () => {
    const buildTime = import.meta.env.PUBLIC_BUILD_TIME;
    const commit = import.meta.env.PUBLIC_COMMIT;

    return (
        <div>
            <p style={{ fontSize: '10px', fontFamily: 'monospace' }}>Build Time: {buildTime}</p>
            <p style={{ fontSize: '10px', fontFamily: 'monospace' }}>Commit: {commit}</p>
        </div>
    );
};

export default CommitStats;