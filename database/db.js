const { Sequelize } = require('sequelize');/**importamos  */
const { database } = require('../config');/**importamos */

const sequelize = new Sequelize(/**cramos el objeto sequelize */
    database.database,/*base de datos* */
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql"
    }
);

module.exports = sequelize;