export const sponsorsQuery = `
  *[_type == "sponsor" && active == true] | order(rank asc) {
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
    "logoUrl": logo.asset->url
  }
`