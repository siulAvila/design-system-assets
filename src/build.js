const fs = require("fs");
const { svgToJS } = require("./utils/svg-to-js");
const assetsModuleFolder = ["icons"];

assetsModuleFolder.forEach((asset) => {
  const options = {
    inputDir: `src/assets/${asset}`,
    outputDir: `dist/assets/${asset}`,
  };
  svgToJS(options);
});
