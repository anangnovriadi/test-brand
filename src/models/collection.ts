import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface CollectionAttributes {
    id: string;
    brandId: number;
    name: string;
    description: string;
};

interface CollectionCreationAttributes extends Optional<CollectionAttributes, 'id'> {}

interface CollectionInstance extends Model<CollectionAttributes, CollectionCreationAttributes>, CollectionAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Collection = sequelize.define<CollectionInstance>('Collection', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    brandId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'brand_id'
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

export default Collection;
