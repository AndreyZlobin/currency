export const swaggerOptions = (PREFIX: string) => {
  return {
    info: {
      version: "0.1.0",
      title: "Donate",
      description: "Donate service api",
    },
    security: {
      BasicAuth: {
        type: "http",
        scheme: "basic",
      },
    },
    baseDir: __dirname,
    filesPattern: "../**/*.ts",
    swaggerUIPath: `${PREFIX}/docs`,
    exposeSwaggerUI: true,
    exposeApiDocs: true,
    apiDocsPath: `${PREFIX}/docs.json`,
    notRequiredAsNullable: false,
    multiple: true,
  };
};
