const webpack = require("webpack");
const config = require("./webpack.config");
const compiler = webpack(config);
const fs = require("fs");
const path = require("path");
compiler.run((err, stats) => {
  if (err) return console.error(err);
  fs.writeFileSync(
    path.join(__dirname, "./webpack-stats.json"),
    JSON.stringify(
      stats.toJson({
        all: false,
        modules: true,
      })
    )
  );
});
