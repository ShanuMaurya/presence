const DiscordRPC = require("discord-rpc");

const ClientId = '460797950793220108';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `D3D`,
    state: 'Playing',
    largeImageKey: 'hr2',
    largeImageText: 'Modification of Petrol ',
    smallImageKey: 'hr',
    smallImageText: 'not done yet',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
