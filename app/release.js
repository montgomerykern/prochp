// ===================================================
// FOR PRODUCTION
// ProFinder Charts - framework for Node.js platform
// https://www.ProFinderCharts.com
// https://www.prochipusa.com
// ===================================================

const options = {};

// options.ip = '127.0.0.1';
   options.port = process.env.PORT || 80;
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
// require('total.js').cluster.http(5, 'release', options);