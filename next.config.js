module.exports = {
  trailingSlash: true, //assim ele colocará um '/' no final de toda rota
  async redirects() {
    return [
      {
        source: '/perguntas', //issp quer dizer que sempre que eu acessar o '/perguntas'
        destination: '/faq/', //o destino sera '/faq/' 
        permanent: true,
      },
    ]
  },
}