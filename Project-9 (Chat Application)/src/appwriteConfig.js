import { Client } from 'appwrite';
import { Databases } from 'appwrite';

export const DATABSE_ID='66191735d2f452679518'
export const PROJECT_ID='66191564498e24874473'
export const COLLECTION_ID_MESSAGES='6619173f2cb10696942d'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66191564498e24874473');

export const databases = new Databases(client);

export default client
