const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#ff832a",
							"@border-radius-base": "0.3rem",
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
