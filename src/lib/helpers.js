export function numberWithCommas(x) {
  return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// api url
const API_URL = process.env.REACT_APP_API_URL;
const dataUrl = API_URL + "senators";

// api fetch
export const fetchSenators = callback => {
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
