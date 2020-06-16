import Sequelize from 'sequelize';

export const sequelize = new Sequelize (
	'projects',
	'steven',
	'51786214',
	{
		host: 'localhost',
		dialect: 'postgres',
		pool:{
			max: 5,
			min: 0,
			require: 30000,
			idle: 10000
		},

	}
);
