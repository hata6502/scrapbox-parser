"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLineNodeParser = void 0;
const creator_1 = require("./creator");
const commandLineRegExp = /^[$%] .+$/;
const createCommandLineNode = (raw) => {
    var _a;
    const symbol = (_a = raw[0]) !== null && _a !== void 0 ? _a : "";
    const text = raw.substring(2);
    return {
        type: "commandLine",
        raw,
        symbol,
        text,
    };
};
exports.CommandLineNodeParser = (0, creator_1.createNodeParser)(createCommandLineNode, {
    parseOnNested: false,
    parseOnQuoted: false,
    patterns: [commandLineRegExp],
});
//# sourceMappingURL=CommandLineNode.js.map