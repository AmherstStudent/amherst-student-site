// next.config.js
const withProgressBar = require('next-progressbar')

module.exports = withProgressBar({
  progressBar: {
    profile: true,
  },
  // rest of your next config
})
