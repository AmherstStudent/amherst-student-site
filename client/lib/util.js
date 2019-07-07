
var showdown  = require('showdown');

export const createMarkup = (content) => {
  var converter = new showdown.Converter();
  var html = converter.makeHtml(content).replace(/(?:\r\n|\r|\n)/g, '<br >');
  return { __html: html };
}




