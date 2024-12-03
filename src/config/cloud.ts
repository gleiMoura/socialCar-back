import { Storage } from '@google-cloud/storage';

const storage = new Storage({
    keyFilename: '/home/ubuntuglei/socialCar-back/src/credentials.json', // Caminho para o arquivo de credenciais
    projectId: 'socialcar-442819', // Substitua pelo ID do seu projeto
});


// Referência ao bucket
const bucketName = 'socialcar'; // Substitua pelo nome do seu bucket
const bucket = storage.bucket(bucketName);

export {
    bucketName,
    bucket
};