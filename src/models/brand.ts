import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface BrandAttributes {
    id: string;
    name: string;
    description: string;
};

interface BrandCreationAttributes extends Optional<BrandAttributes, 'id' | 'description'> {}

interface BrandInstance extends Model<BrandAttributes, BrandCreationAttributes>, BrandAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Brand = sequelize.define<BrandInstance>('Brand', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING,
    }
}, { 
    timestamps: true,
    underscored: true
});

export default Brand;
