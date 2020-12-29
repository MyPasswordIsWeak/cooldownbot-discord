
const regex = /I noticed you dropped \d+ f-bombs in this comment/i;
const afmessage = `
Fuck Off CoolDownBot Do you not fucking understand that the fucking world is fucking never going to fucking be a perfect fucking happy place?
Seriously, some people fucking use fucking foul language, is that really fucking so bad?
People fucking use it for emphasis or sometimes fucking to be hateful. It is never fucking going to go away though.
This is fucking just how the fucking world, and the fucking internet is. Oh, and your fucking PSA? Don't get me fucking started.
Don't you fucking realize that fucking people can fucking multitask and fucking focus on multiple fucking things?
People don't fucking want to focus on the fucking important shit 100% of the fucking time.
Sometimes it's nice to just fucking sit back and fucking relax. Try it sometimes, you might fucking enjoy it.
`;


const client = new (require('discord.js').Client)();
client.on('message', (message) => {
	if(regex.test(message.content)) {
		message.channel.send(afmessage);
		console.log('Detected an anti-fucker');
	}
});
client.on('ready', () => console.log('Anti anti fuck on'));

client.login(require('./tokens.json').antiantifuck);
