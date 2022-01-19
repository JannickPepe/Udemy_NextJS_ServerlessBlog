import sanityClient from '@sanity/client';

// for access the env 
const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
  // useCdn === true, gives you fast response, it will get you cached data
  // useCdn === false, give you little bit slower response, but latest data
};


// Take all data from options, set boolean and set the property token into the right string
// The token is in the .env.local file
export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

export default sanityClient(options);