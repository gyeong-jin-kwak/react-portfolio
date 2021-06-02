// eslint-disable-next-line
module.export = (sequelize, DataTypes) => {
	const Card = sequelize.define(
		"Card",
		{
			// MySQL cards
			category: {},
			title: {},
			src: {},
			content: {},
			tags: {},
			participants: {},
			period: {},
			pages: {},
			link: {},
			items: {},
		},
		{
			charset: "utf8",
			collate: "utf8_general_ci", // 한글저장
		}
	);

	// eslint-disable-next-line
	Card.associate = (db) => {};
	return Card;
};
