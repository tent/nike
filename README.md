Nike
====

Project management that isn't awful

Powered by [Tent](https://tent.io)

**NOTE:** This app is still in the early stages of development.

## Getting started

### Runnning locally

```
bundle
bundle exec puma
```

This will start a server on [localhost:9292](http://localhost:9292), changes to any javascripts and stylesheets will be picked up automatically. Updating any of the ruby files requires restarting the server.

### Building for production

```
bundle
bundle exec rake compile
cd build
mv nike.html index.html
python -m SimpleHTTPServer
```

This will compile the app and start a server on [localhost:8000](http://localhost:8000). Any changes require running the build step again.

### Deploying to heroku

```
heroku create
git push heroku master
```

## Contributing

File an [issue](https://github.com/cupcake/nike/issues) if you find anything isn't working as expected.

Pull requests are always welcome, but you should open an issue before working on a new feature (both to ensure it's within the scope of this project and that it's not already being worked on).

All contributions should be run through [JSXHint](https://github.com/STRML/JSXHint) before creating a pull request.
