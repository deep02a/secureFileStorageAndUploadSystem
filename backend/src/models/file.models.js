import { DataTypes } from 'sequelize';
import {sequelize} from '../db/index.js';

const Files = sequelize.define('files', {
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'email'
        }
    }
},{
    tableName: 'files',
});

const File = sequelize.models.files;
const User = sequelize.models.users;

File.belongsTo(User, { foreignKey: 'email' });
User.hasMany(File);

export default Files;