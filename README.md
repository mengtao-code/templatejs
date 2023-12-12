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
cp templatejs ${ProjectName} -r
```

### 2. Initiate your project

Now your new project's location is in "/tmp/myapp". You need to change project name at package.json

### 3. Build and run

```shell
cd /tmp/myapp
npm install
npm run serve
```

#### 4. Access your new project at "http://localhost:9000"

## Upgrade

Please use [upgrade](./upgrade.md) document.

## Fonts and Icons

We use fontsource. Check [documents](https://fontsource.org/docs/getting-started/introduction) for details.

## Environment Variables

### MODE

Default Value: development

Allowed Value: production

### PUBLIC_PATH

Default Value: /

## Don't modify files from templatejs

There are continuing updates on this project, so you can't modify file contents except that:

* README.md, modify this document for new project
* src/App.tsx, it's the entry of new project
* dependencies in package.json
* project name in package.json
* project version in package.json
* project description in package.json
* project author in package.json
* src/myapp/**, all new files should be in there
* jest.setup.js