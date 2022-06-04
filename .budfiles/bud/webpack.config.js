module.exports = {
  "entry": {
    "app": {
      "import": [
        "@roots/bud-server/client/index.js?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr",
        "index.js",
        "index.css"
      ]
    }
  },
  "bail": false,
  "cache": {
    "name": "bud.development",
    "type": "filesystem",
    "version": "y6k80niep3isvsvqr1elphvfqum_",
    "cacheDirectory": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/package.json",
        "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/bud.config.development.js",
        "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/bud.config.json",
        "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/bud.config.production.js",
        "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/bug.config.js"
      ]
    }
  },
  "context": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme",
  "infrastructureLogging": {
    "console": {
      "Console": {}
    },
    "level": "none"
  },
  "mode": "development",
  "module": {
    "noParse": {},
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "use": []
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "use": [
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "use": [
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/style-loader/dist/cjs.js"
              },
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "svg/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme"
            ],
            "exclude": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme"
            ],
            "exclude": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/js-yaml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme"
            ],
            "exclude": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme"
            ],
            "exclude": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme"
            ],
            "exclude": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme"
            ],
            "exclude": [
              "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/node_modules"
            ],
            "type": "json",
            "parser": {}
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "[name].[contenthash:6].js",
    "filename": "[name].[contenthash:6].js",
    "path": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/dist",
    "pathinfo": false,
    "publicPath": "/"
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": false,
    "minimizer": [
      "..."
    ]
  },
  "parallelism": 110,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "plugins": [
    {
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "/",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/src",
      "@dist": "/Users/ametthey/Local Sites/bud/app/public/wp-content/themes/bud_theme/dist"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml"
    ],
    "modules": [
      "src",
      "node_modules"
    ]
  }
}