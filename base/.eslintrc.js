module.exports = {
    extends: ["plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "no-console": "error",
        "prettier/prettier": "error",
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts"],
                moduleDirectory: ["node_modules", "./src"],
            },
        },
    },
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    ignorePatterns: ["*.js"],
};
