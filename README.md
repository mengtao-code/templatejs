# templatejs

as a temporary start-up project like create-react-app.

## how can you use templatejs?

1. prepare required files

```shell
ProjectName='hello-world'

cd /tmp
git clone https://github.com/mengtao-code/templatejs/
mkdir ${ProjectName}
cp templatejs ${ProjectName} -r

```

2. initiate your project

Now your new project's location is in "/tmp/hello-world". You need to change project name at package.json

3. build and run

```shell
cd /tmp/hello-world
npm install
npm run serve
```

4. Use your new project at "http://localhost:9000"