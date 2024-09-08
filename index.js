const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    // ตรวจสอบว่าเป็นคำสั่ง '!play'
    if (message.content.startsWith('!play')) {
        const args = message.content.split(' ');

        if (!args[1]) {
            return message.reply('กรุณาใส่ลิงก์ YouTube สำหรับเล่นเพลง!');
        }

        if (!message.member.voice.channel) {
            return message.reply('คุณต้องอยู่ในห้องเสียงเพื่อเล่นเพลง!');
        }

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        const stream = ytdl(args[1], { filter: 'audioonly' });
        const resource = createAudioResource(stream);
        const player = createAudioPlayer();

        player.play(resource);
        connection.subscribe(player);

        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
        });

        await message.reply(`กำลังเล่นเพลง: ${args[1]}`);
    }
});

client.login("DISCORD_TOKEN"); 
