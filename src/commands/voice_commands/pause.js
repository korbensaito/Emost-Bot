const {createCommand} = require('../../util');

module.exports = createCommand(
    'pause',
    'pause the audio playing',
    async (client, guild, args) =>
    {
        console.log('pausing')
        const serverInfo = client.voiceConnections.get(guild.id);
        if (serverInfo.dispatcher === undefined)
        {
            console.log('no dispatcher on this server');
            return;
        }
        serverInfo.dispatcher.pause();
    });