import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface MealPlanAttributes {
  id: number;
  name: string;
  favorite_ids: number[];
}

interface MealPlanCreationAttributes extends Optional<MealPlanAttributes, 'id'> {}

export class MealPlan extends Model<MealPlanAttributes, MealPlanCreationAttributes> implements MealPlanAttributes {
  public id!: number;
  public name!: string;
  public favorite_ids!: number[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function MealPlanFactory(sequelize: Sequelize): typeof MealPlan {
  MealPlan.init(
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
      favorite_ids: {
        type: DataTypes.ARRAY(DataTypes.NUMBER),
        allowNull: false,
        defaultValue: []
      }
    },
    {
      tableName: 'mealplans',
      sequelize
    }
  );

  return MealPlan;
}
