import { bucket, bucketName } from "../config/cloud.js";

export const generateProfileLink = async (file) => {
    try {
        const filePath = file.path;
        const fileName = file.originalname;
        const destination = bucket.file(fileName);

        // Enviando o arquivo para o Google Cloud Storage
        await bucket.upload(filePath, {
            destination: fileName,
        });

        // Tornando o arquivo público
        await destination.makePublic();

        const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
        return publicUrl;
    } catch (error) {
        console.error('Erro no upload:', error);
    }
};
