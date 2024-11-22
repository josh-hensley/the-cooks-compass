import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface RecipeAttributes {
  id: number;
  name: string;
  fetch_link: string;
}

interface RecipeCreationAttributes extends Optional<RecipeAttributes, 'id'> {}

export class Recipe extends Model<RecipeAttributes, RecipeCreationAttributes> implements RecipeAttributes {
  public id!: number;
  public name!: string;
  public fetch_link!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function RecipeFactory(sequelize: Sequelize): typeof Recipe {
  Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fetch_link: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'recipes',
      sequelize
    }
  );

  return Recipe;
}
