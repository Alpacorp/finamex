export const rollbarConfig = {
  accessToken: "2c94a14ff2444b56944d7fc3494a4652",
  environment: "testenv",
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: "1.0.0",
        source_map_enabled: true,
      },
    },
  },
};
