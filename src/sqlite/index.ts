import { Sequelize } from 'sequelize';

const DBPATH = process.env.DBPATH || "database/db.sqlite3"

const sequelize = new Sequelize({ dialect: 'sqlite', storage: DBPATH });

const connect = async (callback: (value: string) => void) => {
    try {
        await sequelize.authenticate();
        callback('Connected to database')
    } catch (error) {
        callback('Unable to connect to the database: ' + error.message)
    }
}

const syncAll = async () => {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
}

export { sequelize }

export default { connect, syncAll }