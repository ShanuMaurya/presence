const DiscordRPC = require("discord-rpc");

const ClientId = 'ree';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `test`,
    state: 'test',
    // largeImageKey: 'test',
    // largeImageText: 'test',
    // smallImageKey: 'test',
    // smallImageText: 'test',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);