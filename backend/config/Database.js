// mengkoneksikan server ke database

import { Sequelize } from "sequelize";

const db = new Sequelize('simrs','root','toor',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;