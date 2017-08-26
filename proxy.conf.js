const PROXY_CONFIG = [
	{
		context: [
			"/"
		],
		target: "http://localhost:8088",
		secure: false,
		logLevel: "debug"
	}
]

module.exports = PROXY_CONFIG;
