module.exports = async () => {
    return {
        verbose: true,
        transform: {
                "^.+\\.[t|j]sx?$": "babel-jest"
        },
        runner: "jest-runner-mocha",
    };
};