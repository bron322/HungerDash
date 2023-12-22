import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: '0u6ce08q',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
})

const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;