
var showdown  = require('showdown');

export const createMarkup = (content) => {
  var converter = new showdown.Converter();
  var html = converter.makeHtml(content).replace(/(?:\r\n|\r|\n)/g, '<br >');
  return { __html: html };
}

export const nullImage = (articleObject) => {
  if (articleObject.featuredImage === true) {
    let imageLink = articleObject.featuredImage.url
    return imageLink
  }
  return " "
}

export const urlLink = (slug) => {
  return 'amherststudent.com/article/' + slug
}



