module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
        "browser": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "blockBindings": true,
            "modules": true
        }
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "semi": [
            "error",
            "never"
        ],
        "vars-on-top": "error",
        "no-console": 0
    }
}
