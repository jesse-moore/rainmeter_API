import { DataTypes } from 'sequelize';
import { sequelize } from '../index';

export const Status = sequelize.define('Status', {
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
    },
    status: DataTypes.STRING,
    name: DataTypes.STRING,
    launchTime: DataTypes.DATE
}, {
    // Other model options go here
});