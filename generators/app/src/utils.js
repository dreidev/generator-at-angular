'use strict';
const _ = require("lodash");

module.exports = {
    isHasPackage: function (obj) {
        return _.isObject(obj) && obj.package && obj.import !== false;
    },
    stripPackageName: function (pkgName) {
        let regexp = /(.*?)@/;
        let match = pkgName.match(regexp);
        if (match) {
            return match[1];
        }
        return pkgName;
    }
}
