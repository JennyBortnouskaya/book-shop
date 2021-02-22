module.exports = {
  useTabs: false,
  endOfLine: "auto",
  tabWidth: 4,
  printWidth: 200,
  overrides: [
    {
      files: "*.component.html",
      options: {
        parser: "angular",
      },
    },
    {
      files: "*.ts",
      options: {
        singleQuote: true,
        trailingComma: "all",
      },
    },
  ],
};
