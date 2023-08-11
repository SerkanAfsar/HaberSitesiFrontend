module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./app", "./Components", "./Containers"],
      prependData: `@import "~@styles/_custom.scss";`,
    };
  }
  if ("env" in defaultConfig) {
    defaultConfig["env"] = {
      API_URL: process.env.API_URL,
    };
  }

  return defaultConfig;
};
