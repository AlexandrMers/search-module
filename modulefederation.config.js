const deps = require("./package.json").dependencies;

module.exports = {
    name: "search",
    filename: "search.js",
    exposes: {
        "./search": "./src/App.js",
    },
    shared: {
        ...deps,
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
    },
};