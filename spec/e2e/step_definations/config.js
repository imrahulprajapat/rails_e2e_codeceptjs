const baseUrls =
  process.env.ENVIRONMENT === 'localdev' ? 'localhost:3000' : 'configure_your domain here'
const httpRedirection =
  process.env.ENVIRONMENT === 'localdev' ? 'no' : 'update_accordingly'

module.exports = {
  baseUrls: baseUrls,
  httpRedirection: httpRedirection
}
