"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTagNodeParser = void 0;
const creator_1 = require("./creator");
const hashTagRegExp = /(?:^|\s)#\S+/;
const createHashTagNode = (raw) => {
    if (raw.startsWith("#")) {
        return {
            type: "hashTag",
            raw,
            href: raw.substring(1),
        };
    }
    const space = raw.substring(0, 1);
    const tag = raw.substring(1);
    return [
        {
            type: "plain",
            raw: space,
            text: space,
        },
        {
            type: "hashTag",
            raw: tag,
            href: tag.substring(1),
        },
    ];
};
exports.HashTagNodeParser = (0, creator_1.createNodeParser)(createHashTagNode, {
    parseOnNested: true,
    parseOnQuoted: true,
    patterns: [hashTagRegExp],
});
//# sourceMappingURL=HashTagNode.js.map