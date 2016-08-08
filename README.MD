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

echo ".node_modules/" >> .gitignore
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
```
