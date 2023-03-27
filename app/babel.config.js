module.exports = {
  presets: [
<<<<<<< HEAD
    '@vue/cli-plugin-babel/preset'
=======
    '@vue/cli-plugin-babel/preset',
    ["@babel/env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
>>>>>>> 8abbc2d (hh)
  ]
}
