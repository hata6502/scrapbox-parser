import { convertToNodes } from ".";
export const createNodeParser = (nodeCreator, { parseOnNested, parseOnQuoted, patterns }) => {
    return (text, opts, next) => {
        var _a, _b, _c, _d, _e, _f;
        if (!parseOnNested && opts.nested)
            return (_a = next === null || next === void 0 ? void 0 : next()) !== null && _a !== void 0 ? _a : [];
        if (!parseOnQuoted && opts.quoted)
            return (_b = next === null || next === void 0 ? void 0 : next()) !== null && _b !== void 0 ? _b : [];
        for (const pattern of patterns) {
            const match = pattern.exec(text);
            if (match === null)
                continue;
            const left = text.substring(0, match.index);
            const right = text.substring(match.index + ((_d = (_c = match[0]) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0));
            const node = nodeCreator((_e = match[0]) !== null && _e !== void 0 ? _e : "", opts);
            return [
                ...convertToNodes(left, opts),
                ...(Array.isArray(node) ? node : [node]),
                ...convertToNodes(right, opts),
            ];
        }
        return (_f = next === null || next === void 0 ? void 0 : next()) !== null && _f !== void 0 ? _f : [];
    };
};
//# sourceMappingURL=creator.js.map