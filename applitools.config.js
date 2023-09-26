module.export = {
  batchName: "Web visual testing",
  apiKey: process.env.APPLITOOLS_API_KEY,
  browser: [
    { name: 'chrome', width: 1024, height: 766 },
    { name: 'safari', width: 1600, height: 1200 },
    { deviceName: 'iPhone X', screenOrientation: 'portrait' }
  ],
}