// config/plugins.js
module.exports = ({ env }) => ({
    graphql: {
      config: {
        // Endpoint padrão para GraphQL. Você pode alterá-lo se necessário.
        endpoint: '/graphql',
  
        // Habilita ou desabilita o CRUD sombra (shadowCRUD), que gera resolvers automaticamente para os content types.
        shadowCRUD: true,
  
        // Habilita o Playground sempre em desenvolvimento (útil para testar queries).
        playgroundAlways: env('NODE_ENV') === 'development',
  
        // Limite de profundidade da query (para evitar queries muito aninhadas).
        depthLimit: 7,
  
        // Limite de quantidade de registros retornados.
        amountLimit: 100,
  
        // Outras configurações do Apollo Server podem ser adicionadas aqui.
        apolloServer: {
          tracing: false,
          // Você pode adicionar mais configurações se necessário.
        },
      },
    },
  });
  