const config = require('./');

module.exports = {
    entry: {
        script: [`${config.assetsPath}js/script.js`],
        vendor: [`${config.assetsPath}js/vendor.js`],
    },
    dest: `${config.buildPath}assets/js/`,
};
