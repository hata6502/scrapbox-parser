"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageNodeParser = void 0;
const creator_1 = require("./creator");
const srcFirstStrongImageRegExp = /\[https?:\/\/[^\s\]]+\.(?:png|jpe?g|gif|svg)(?:\?[^\]\s]+)?(?:\s+https?:\/\/[^\s\]]+)?\]/i;
const linkFirstStrongImageRegExp = /\[https?:\/\/[^\s\]]+\s+https?:\/\/[^\s\]]+\.(?:png|jpe?g|gif|svg)(?:\?[^\]\s]+)?\]/i;
const srcFirstStrongGyazoImageRegExp = /\[https?:\/\/(?:[0-9a-z-]+\.)?gyazo\.com\/[0-9a-f]{32}(?:\/raw)?(?:\s+https?:\/\/[^\s\]]+)?\]/;
const linkFirstStrongGyazoImageRegExp = /\[https?:\/\/[^\s\]]+\s+https?:\/\/(?:[0-9a-z-]+\.)?gyazo\.com\/[0-9a-f]{32}(?:\/raw)?\]/;
const isImageUrl = (text) => /^https?:\/\/[^\s\]]+\.(png|jpe?g|gif|svg)(\?[^\]\s]+)?$/i.test(text) ||
    isGyazoImageUrl(text);
const isGyazoImageUrl = (text) => /^https?:\/\/([0-9a-z-]\.)?gyazo\.com\/[0-9a-f]{32}(\/raw)?$/.test(text);
const createImageNode = (raw) => {
    const index = raw.search(/\s/);
    const first = index !== -1 ? raw.substring(1, index) : raw.substring(1, raw.length - 1);
    const second = index !== -1 ? raw.substring(index, raw.length - 1).trimLeft() : "";
    const [src, link] = isImageUrl(second) ? [second, first] : [first, second];
    return {
        type: "image",
        raw,
        src: /^https?:\/\/([0-9a-z-]\.)?gyazo\.com\/[0-9a-f]{32}$/.test(src)
            ? `${src}/thumb/1000`
            : src,
        link,
    };
};
exports.ImageNodeParser = (0, creator_1.createNodeParser)(createImageNode, {
    parseOnNested: true,
    parseOnQuoted: true,
    patterns: [
        srcFirstStrongImageRegExp,
        linkFirstStrongImageRegExp,
        srcFirstStrongGyazoImageRegExp,
        linkFirstStrongGyazoImageRegExp,
    ],
});
//# sourceMappingURL=ImageNode.js.map