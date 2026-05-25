# WhatsApp Bot

Bot WhatsApp automatisé utilisant [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).

## Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- Un compte WhatsApp actif

## Installation

```bash
git clone https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
cd VOTRE_REPO
npm install
```

## Configuration

Ouvrez `index.js` et remplacez le numéro par le vôtre (format international, sans `+` ni zéros) :

```js
const MON_NUMERO = "237681716051"; // Exemple pour le Cameroun
```

## Lancement

```bash
node index.js
```

Au premier lancement, un **code d'association** s'affichera dans la console.

### Étapes de connexion :
1. Ouvrez WhatsApp sur votre téléphone
2. Allez dans **Appareils connectés**
3. Appuyez sur **Lier un appareil**
4. Choisissez **Lier avec un numéro de téléphone**
5. Entrez le code affiché dans la console

Une fois connecté, le message `Bot connecté avec succès et prêt !` s'affiche.

## Notes

- Le dossier `.wwebjs_auth/` contient votre session WhatsApp (ne pas partager ni committer)
- Le bot tourne en arrière-plan tant que le processus Node.js est actif
- Pour le faire tourner en permanence sur un serveur, utilisez [pm2](https://pm2.keymetrics.io/) :

```bash
npm install -g pm2
pm2 start index.js --name whatsapp-bot
pm2 save
```

## Dépendances

- [whatsapp-web.js](https://www.npmjs.com/package/whatsapp-web.js)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
