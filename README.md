# hoodie-plugin-hello-world

> A sample Hoodie plugin

This Hoodie plugin is a great starting point if you want to create an own Hoodie
plugin. It extends the `hoodie` client API, it defines a server route and a UI
which can be accessed at `/hoodie/hello-world`.

## Usage

First, install the plugin as dependency of your Hoodie app

```js
npm install --save @hoodie/plugin-hello-world
```

Then add it the `hoodie.plugins` array in your app’s `package.json` file.
If you like, you can change the default greeting and name in
`hoodie.app.helloWorld.greeting` and `hoodie.app.helloWorld.name`.

```json
{
  "name": "your-hoodie-app",
  ...
  "hoodie": {
    "plugins": ["@hoodie/plugin-hello-world"],
    "app": {
      "helloWorld": {
        "greeting": "Bonjour",
        "name": "le monde"
      }
    }
  }
}
```

You can now start your app with `npm start` and access the hello world form
at [localhost:8080/hoodie/hello-world](http://localhost:8080/hoodie/hello-world).

## Local setup

This plugin has `hoodie` as devDependency. The idea is that plugins can be
started just like apps. Simply `git clone` this repository, run `npm install`
and then `npm start`.

This plugin has no tests yet, but it would be nice to add some soon, so that
plugin authors get a good blueprint which includes tests for their own plugins.
See [#11](https://github.com/hoodiehq/hoodie-plugin-hello-world/issues/11)

## License

[Apache 2.0](LICENSE)
