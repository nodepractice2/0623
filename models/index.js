const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Team = require('./team');
const Eotrmf = require('./eotrmf');
const Wdb = require('./wdb');
const Cp = require('./cp');
const Gc = require('./gc');




const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Team = Team;
db.Eotrmf = Eotrmf;
db.Wdb = Wdb;
db.Cp = Cp;
db.Gc = Gc;

User.init(sequelize);
Post.init(sequelize);
Team.init(sequelize);
Eotrmf.init(sequelize);
Wdb.init(sequelize);
Cp.init(sequelize);
Gc.init(sequelize);
//User.associate(db);
//Post.associate(db);
//Team.associate(db);
Eotrmf.associate(db);


module.exports = db;
