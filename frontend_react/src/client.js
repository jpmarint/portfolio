import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: process.env.REACT_APP_SANITY_SANITY_TOKEN,
    useCdn: true // `false` if you want to ensure fresh data
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


