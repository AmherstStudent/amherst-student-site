export default {
  title: `The Amherst Student`,
  description: 'The Amherst Student is the student newspaper of Amherst College. Established in 1868, The Student is the oldest weekly college publication in the country, with more than 2,000 copies circulated per issue.',
  defaultImageWidth: 1200,
  defaultImageHeight: 1200,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.amherststudent.com',
    title: 'The Amherst Student',
    description: 'The Amherst Student is the student newspaper of Amherst College. Established in 1868, The Student is the oldest weekly college publication in the country, with more than 2,000 copies circulated per issue.',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: 'https://www.amherststudent.com/static/logo.jpg',
        width: 467,
        height: 40,
        alt: 'the Amherst Student Logo',
      }
    ],
    site_name: 'The Amherst Student',
  },
  twitter: {
    site: '@amherststudent',
    cardType: 'summary_large_image',
  },
};
