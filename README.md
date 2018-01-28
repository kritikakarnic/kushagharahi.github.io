# kusha.me

Source code for [kusha.me](https://kusha.me), my static blog and portfolio website built on VueJS and hosted on GitHub pages. 

## Getting Started 

The `dev` branch is for on-going development. `master` is the current compiled site, and `rc` is the code for the current `master` compiled site.

You will need [npm](https://www.npmjs.com/) installed. 
* Restore dependencies: `npm install` 
* Compile without prerendering and JS Obfuscation: `npm run unix-dev-build/win-dev-build`
    * Outputs the compiled site to `/dist`
* Compile with prerendering and JS Obfuscation: `npm run unix-prod-build/win-prod-build` 
    * Outputs the compiled site to `/dist`
* Start a http server with .vue hot-reloading: `npm run unix-start-dev-server/win-start-dev-server` 
    * Launches a [webpack-dev-server](https://github.com/webpack/webpack-dev-server) on `8080`. 

## Deployment

`npm run unix-deploy-prod/win-deploy-prod` commands will build prod (prerender, minify, uglify, etc), clone the `remote/master` git history into `dist/.git`, then commit the `dist` contents to `master`. `master` branch is deployed to [GitHub Pages](https://pages.github.com/).

tl;dr use `npm run unix-deploy-prod/win-deploy-prod` commands to push "revisions" of the compiled site onto another branch (master).

## Built With

* [VueJS](https://vuejs.org/) - Web Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - Build/Bundle Tool

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
