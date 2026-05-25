const { Client, LocalAuth } = require('whatsapp-web.js');

const MON_NUMERO = "237681716051";

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', async (qr) => {
    console.log("Demande de connexion détectée...");
    try {
        const pairingCode = await client.requestPairingCode(MON_NUMERO);
        console.log("==================================================");
        console.log("VOTRE CODE D'ASSOCIATION WHATSAPP EST :", pairingCode);
        console.log("Allez dans WhatsApp > Appareils connectés > Lier avec un numéro de téléphone");
        console.log("==================================================");
    } catch (error) {
        console.error("Erreur lors de la génération du code :", error);
    }
});

client.on('ready', () => {
    console.log('Bot connecté avec succès et prêt !');
});

client.initialize();
