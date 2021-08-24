module.exports = function check(str, bracketsConfig) {
    const bracketsPairs = bracketsConfig.map((e) => e.join(""));
    while (
        bracketsPairs.some((e) => {
            const i = str.indexOf(e);
            if (i != -1) {
                str = str.slice(0, i) + str.slice(i + e.length);
                return true;
            }
            return false;
        })
    );
    return !str;
};
