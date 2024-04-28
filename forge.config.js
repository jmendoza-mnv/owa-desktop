module.exports = {
  packagerConfig: {
    asar: true,
    protocols: [
      {
        protocol: "mailto",
        name: "mailto",
        schemes: "mailto",
      },
    ],
    executableName: "owa-desktop",
    icon: __dirname + "images/Outlook.ico",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconUrl:
          "https://raw.githubusercontent.com/mikepruett3/owa-desktop/main/images/Outlook.ico",
        setupIcon: __dirname + "images/Outlook.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    // {
    //   name: "@electron-forge/maker-rpm",
    //   config: {},
    // },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "mikepruett3",
          name: "owa-desktop",
        },
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
