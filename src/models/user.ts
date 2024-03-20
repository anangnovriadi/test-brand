import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface UserAttributes {
    id: string;
    username: string;
    email: string;
    password: string;
};

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes { 
    created_at?: Date;
    updated_at?: Date; 
}

const User = sequelize.define<UserInstance>('User', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
}, { 
    timestamps: true,
    underscored: true
});

export default User;
