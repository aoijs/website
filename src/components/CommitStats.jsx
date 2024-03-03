const CommitStats = () => {
    const buildTime = process.env.PUBLIC_BUILD_TIME;
    const commit = process.env.PUBLIC_COMMIT;

    return (
        <div>
            <p>Build Time: {buildTime}</p>
            <p>Commit: {commit}</p>
        </div>
    );
};

export default CommitStats;