import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'cpctpkj0',
    dataset: 'production',
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: 'v2021-10-21',
})

export default client