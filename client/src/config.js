const forceProd = false;

let apiURL = "https://api.maakyo.com";
if (window.location.href.indexOf("localhost") !== -1 || window.location.href.indexOf("127.0.0.1") !== -1) {
  apiURL = "http://localhost:8080";
}

const S3PREFIX = "https://datadvise.s3.eu-west-3.amazonaws.com/app";
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || "17555297-46a99d3dc7abf78679ec9e640";

export { apiURL, PIXABAY_API_KEY, S3PREFIX };
