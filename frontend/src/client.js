import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'


export const client = createClient({
  projectId: 'vyqhv9hg',   
  dataset: 'production',          
  apiVersion: '2024-01-01',       
  useCdn: true,                   
  token: process.env.SANITY_TOKEN 
})


const builder = createImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)