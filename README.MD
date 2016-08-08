### Recommended tools for this guide
IDE:
  [Atom]()
Software versioning:
  [git]()


### Required dependencies
- Node.js

### Required global modules
```sh
npm install -g bower
```

### Step-by-step guide

#### Starting point
0. Setup a new project with **npm**
> TODO "what does this command do?"

npm init

1. Create a **".gitignore"** file for the application
> TODO "what its a .gitignore file?"

```sh
touch .gitignore

echo "node_modules/" >> .gitignore
```

2. Setup bower, our package manager
> TODO "what is bower, why use it?"


```sh
bower init
touch .bowerrc
```
> TODO "what does this command did?"


Add the following content to the **".bowerrc" file**:
> There a lot of configuration options. We will use the minimal as possible, telling
to bower where it should install its dependencies when running "bower install"

```json
{
  "directory": "app/bower_components/"
}
```

Tell git to ignore the directory where our "bower_components" are going to be installed
```sh
echo "app/bower_components/" >> .gitignore
```

3. Add **bootstrap** and **jQuery** with bower
```sh
bower install bootstrap --save
bower install jquery --save
```

> TODO What is this "--save" flag?
NOTE bower will create both folders "app" and "app/bower_components" for us

Let's commit, push it and go the next session.
```sh
git add .
git commit -m "Repo init: set up bower and the starting point for the application."
git push
```

#### Set up Gulp.js
> TODO: what is gulp.js
https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Make sure you are at the root of the project folder
```sh
cd
cd workspace/bootstrap3-fundamentals # this is where I cloned the project. Replace it for yours
```

Install it globally
```sh
npm install --global gulp-cli
```

Save it as a dependencie on package.json
```sh
npm install --save-dev gulp
```

Create a "gulpfile.js" file
```sh
touch gulpfile.js
```
Fill it with
```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

Make sure its working by runnning
```sh
gulp
```
> The "default" task will run and do nothing.

We expect some output like:
```
[21:50:46] Starting 'default'...
[21:50:46] Finished 'default' after 133 μs
```

Good, let's write some recipes for gulp.

#### Writing our first "browserSync" task for gulp
> Recipes can be found at: https://github.com/gulpjs/gulp/tree/master/docs/recipes
> This recipe can be found at: https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md

**NOTE:** Make sure you are at the root of the project folder

Install the browser-sync module  
```sh
npm install --save-dev browser-sync
```

Open the "gulpfile.js" and fill it entirely with this:
```js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
  // place code for your default task here
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});
```

Now running the "serve" task on the terminal, every change on the "index.html" file will be automatically reflected on the browser
```sh
grunt serve
```
> To test it, open the "index.html" and type anything on the "<body></body>" tag! :)

#### Writing

#### The first html page
Create a "styles" and "scripts" folder under "app/" folder
```sh
mkdir app/styles
mkdir app/scripts
```

Create the first html page on the "app/" folder
```sh
touch app/index.html
```

Add the following boilerplate content to it:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```
> ***ATOM-TIP***: When using Atom, type "html"(without quotation marks) and press tab
