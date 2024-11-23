import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface MealPlanAttributes {
  id: number;
  name: string;
}

interface MealPlanCreationAttributes extends Optional<MealPlanAttributes, 'id'> {}

export class MealPlan extends Model<MealPlanAttributes, MealPlanCreationAttributes> implements MealPlanAttributes {
  public id!: number;
  public name!: string;

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
      }
    },
    {
      tableName: 'mealplans',
      sequelize
    }
  );

  return MealPlan;
}
