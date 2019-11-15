const showdown = require('showdown')

export const createMarkup = content => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(content).replace(/(?:\r\n|\r|\n)/g, '<br >');
  return { __html: html }
}

export const nullImage = articleObject => {
  if (articleObject.featuredImage === true) {
    const imageLink = articleObject.featuredImage.url
    return imageLink
  }
  return ' '
}

export const urlLink = slug => {
  return `https://amherststudent.com/article/${slug}`
}
