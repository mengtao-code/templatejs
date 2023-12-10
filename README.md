# templatejs

A simple start-up project like create-react-app.

## How to use it?

#### 1. Prepare required files

```shell
ProjectName='helloworld'

cd /tmp
git clone https://github.com/mengtao-code/templatejs/
mkdir ${ProjectName}
cp templatejs ${ProjectName} -r

```

#### 2. Initiate your project

Now your new project's location is in "/tmp/helloworld". You need to change project name at package.json

#### 3. Build and run

```shell
cd /tmp/HelloWorld
npm install
npm run serve
```

#### 4. Access your new project at "http://localhost:9000"

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
