export function numberWithCommas(x) {
  return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api/v1/"
    : "https://freedom-torch-api.appspot.com/api/v1/";

const dataUrl = API_URL + "senators";

export const fetchSenators = callback => {
  console.log("fetching data from dataUrl ", dataUrl);
  fetch(dataUrl)
    .then(res => res.json())
    .then(
      result => {
        console.log("result", result);
        callback(result);
      },
      error => {
        console.log(error);
      }
    );
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
