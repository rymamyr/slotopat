import {groq} from 'next-sanity'
export const sponsorsQuery = groq`
  *[_type == "sponsor" && active == true] | order(featured desc, rank asc){
    _id,
    name,
    bonus,
    tag,
    category,
    short,
    featured,
    rank,
    accentFrom,
    accentTo,
    externalUrl,
    "logoUrl": logo.asset->url,
    "slug": slug.current
  }
`
export const sponsorBySlugQuery = groq`
  *[_type == "sponsor" && slug.current == $slug][0]{
    _id,
    name,
    bonus,
    tag,
    category,
    short,
    featured,
    rank,
    accentFrom,
    accentTo,
    externalUrl,
    "logoUrl": logo.asset->url,
    "slug": slug.current
  }
`