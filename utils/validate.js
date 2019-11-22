module.exports = {
    IsMobile(value) {
        var exp = /^1\d{10}$/;
        return exp.test(value);
    },
}