const cpr = require("child_process")
const cmd = "wget http://faucet.ropsten.be:3001/donate/0xc73bA89c340a5839473b2486fbf3af479Aa8e620"
const interval = 1000 * 60 * 60 * 24;

setInterval(() => {
	const askLog = cpr.execSync(cmd).toString();
	console.log("[askLog]", askLog);
}, interval)