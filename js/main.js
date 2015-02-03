// This program loads the configuration file called "visConfig.json".
require(["d3", "lodash"], function (d3, _) {
  d3.json("visConfig.json", function (config) {
    console.log(config);
  });
});
