# templatejs

A simple start-up project like create-react-app.

## Why

I dislike nextjs because I lose control of my project, so I create templatejs for my own projects.

## Install

### 1. Prepare required files

```shell
cd /tmp
git clone https://github.com/mengtao-code/templatejs/
mkdir myapp
cp templatejs myapp -r
```

### 2. Update files if myapp is library

```shell
cd /tmp/myapp
cp library-file/.eslintignore.library .eslintignore
cp library-file/.npmignore.library .npmignore
cp library-file/.npmrc.library .npmignore
cp library-file/.prettierignore.library .prettierignore
cp library-file/babel.config.js.library babel.config.js
cp library-file/package.json.library package.json
cp library-file/tsconfig.json.library tsconfig.json
```

### 3. Build and run

```shell
cd /tmp/myapp
npm install
npm run serve
```

#### 4. Access new project at "http://localhost:9000"

## Upgrade

Please use [upgrade](./upgrade.md) document.

## Fonts and Icons

We use fontsource. Check [documents](https://fontsource.org/docs/getting-started/introduction) for details.

## Environment Variables

### MODE

Type: Enum

Default Value: development

Allowed Value: development, production

### PUBLIC_PATH

Type: String

Default Value: /

### PATTERN

Type: Enum

Default Value: web

Allowed Value: web, library

### PROJECT_NAME

Type: String

Default Value: myapp

If PATTERN is library, this variable is required.

## Don't modify files from templatejs except ...

There are continuing updates on this project, so you can't modify file contents except that:

* README.md, modify this document for new project
* src/App.tsx, it's the entry of new project
* dependencies in package.json
* project base information (name, version, description, author) in package.json
* src/myapp/**, all new files should be in there
* test/jest.setup.js