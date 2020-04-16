const fetch = require('isomorphic-unfetch')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  async exportPathMap(defaultMap) {
    const dynamicPages = {}
    const idsRes = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const idsToExport = await idsRes.json()
    for (const id of idsToExport) {
      dynamicPages[`/p/${id}`] = { page: '/p/[id]' }
    }
    return {
      ...defaultMap,
      ...dynamicPages
    }
  },
  assetPrefix: isProd ? 'https://basic-nextjs.kodeinaja.com' : '',
}