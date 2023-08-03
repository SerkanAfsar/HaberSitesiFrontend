module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./app", "./Components", "./Containers"],
      prependData: `@import "~@styles/_custom.scss";`,
    };
  }
  return defaultConfig;
};
