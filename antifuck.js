
const regex = /[ꬵﬀꞙꞘꝼꜰ₣ḟᶂᶠբӻʄƒ]+[ṳṵṷṹṻụủứừửữựὐὑὒὓὔὕὖὗὺύῠῡῢΰᶣᶸᶶᶷᶹᵘᵤᵾᵿᵁᴜևսևկմնџцμΰύϋυʋʉʊȕȗɥǔǖǘǚǜưƲùúûüũūŭůűųuvѵѷν]+[ꞔꞓḉҫҁсСϹϾʗƈꞰꝅⱪꝁꝃ₭ḱḳḵᶄᵏᴷᴋқҝҟҡкЌϏʞκǩ]+/i;
const fmessage = `Hello.

I noticed you dropped $FUCKS f-bombs in this comment. This might be necessary, but using nicer language makes the whole world a better place.
Maybe you need to blow off some steam - in which case, go get a drink of water and come back later. This is just the internet and sometimes it can be helpful to cool down for a second.
`;


const fucktector = (sentance) => {
	let count = 0;
	while(regex.exec(sentance)) {
		sentance = sentance.replace(regex, '');
		++count;
	}
	return count;
};

const client = new (require('discord.js').Client)();
client.on('message', (message) => {
	const fucks = fucktector(message.content);
	if(fucks > 0) {
		message.channel.send(fmessage.replace('$FUCKS', fucks));
		console.log(`Detected ${fucks} fucks in a sentence`);
	}
});
client.on('ready', () => console.log('Started up.'));

client.login(require('./tokens.json').antifuck);
