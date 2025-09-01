const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy para consultores
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://imoveis-sa.onrender.com',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
    })
  );

  // Proxy para imóveis
  app.use(
    '/imoveis',
    createProxyMiddleware({
      target: 'https://imoveis-sa.onrender.com',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/imoveis': '/api/imoveis',
      },
    })
  );

  // Proxy para clientes
  app.use(
    '/clientes',
    createProxyMiddleware({
      target: 'https://imoveis-sa.onrender.com',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/clientes': '/api/clientes',
      },
    })
  );

  // Proxy para consultores (rotas específicas)
  app.use(
    '/consultores',
    createProxyMiddleware({
      target: 'https://imoveis-sa.onrender.com',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/consultores': '/api/consultores',
      },
    })
  );

  // Proxy para visitas
  app.use(
    '/visita',
    createProxyMiddleware({
      target: 'https://imoveis-sa.onrender.com',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/visita': '/api/visita',
      },
    })
  );
};
