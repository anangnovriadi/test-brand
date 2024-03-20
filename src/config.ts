require('dotenv').config();

import { Sequelize } from 'sequelize';

const host = process.env.DB_HOST as string;
const username = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD as string;
const name = process.env.DB_NAME as string;

const sequelize = new Sequelize(name, username, password, {
    host: host,
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
        useUTC: false,
    },
    timezone: '+07:00',
    // logging: console.log,
});

export { 
    Sequelize,
    sequelize
};
