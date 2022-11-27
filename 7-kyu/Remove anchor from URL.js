// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

const removeUrlAnchor = url => 
  // takes string of url
  // return url with anything after # removed
  // "www.codewars.com#about" --> "www.codewars.com"
  
  // split '#', return array[0]
  url.split('#')[0]