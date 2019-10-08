module.exports = {
  dialect: 'postgres',
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
