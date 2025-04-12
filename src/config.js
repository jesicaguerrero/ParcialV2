import { config } from 'dotenv';

config();

console.log('HOST:', process.env.HOST);
console.log('DATABASE:', process.env.DATABASE);
console.log('USER:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD);

export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
};


