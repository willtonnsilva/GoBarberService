module.exports = {
  dialect: 'postgres',
  port: '5432',
  host: '127.0.0.1',
  username: 'postgres',
  password: '123',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
}
