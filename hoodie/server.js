module.exports.register = register
module.exports.register.attributes = {
  name: 'hoodie-plugin-hello-world'
}

function register (server, options, next) {
  var defaults = options.app.helloWorld || {}

  if (!defaults.greeting) {
    defaults.greeting = 'Hello'
  }

  if (!defaults.name) {
    defaults.name = 'world'
  }

  server.route({
    method: 'POST',
    path: '/api',
    handler: function (request, reply) {
      var options = request.payload

      var greeting = options.greeting || defaults.greeting
      var name = options.name || defaults.name

      reply(greeting + ', ' + name + '!').code(201)
    }
  })

  next()
}
