const { countFunc, filterFunc } = require('./utils')

const flag = process.argv.slice(2)[0] ?? '';
'--count' === flag && countFunc();

let [type, value] = flag.split("=");
'--filter' === type && value && filterFunc(value)