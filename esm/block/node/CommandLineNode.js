import { createNodeParser } from "./creator";
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
export const CommandLineNodeParser = createNodeParser(createCommandLineNode, {
    parseOnNested: false,
    parseOnQuoted: false,
    patterns: [commandLineRegExp],
});
//# sourceMappingURL=CommandLineNode.js.map