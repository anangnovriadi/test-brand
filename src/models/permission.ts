import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface PermissionAttributes {
    id: string;
    userId: number;
    brandId: number;
    action: string;
};

interface PermissionCreationAttributes extends Optional<PermissionAttributes, 'id'> {}

interface PermissionInstance extends Model<PermissionAttributes, PermissionCreationAttributes>, PermissionAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Permission = sequelize.define<PermissionInstance>('Permission', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id'
    },
    brandId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'brand_id'
    },
    action: {
        allowNull: false,
        type: DataTypes.STRING,
    },
}, { 
    timestamps: true,
    underscored: true
});

export default Permission;
