export default {
  baseURL: `${process.env.BASE_URL}/api`,
  headers: {
    common: {
      API_KEY: process.env.API_KEY
    }
  }
}
