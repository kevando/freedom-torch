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
        callback(result.senators);
      },
      error => {
        console.log(error);
      }
    );
};

export const fetchData = async endpoint => {
  const dataUrl = API_URL + endpoint;
  console.log('dataUrl',dataUrl)

  try {
    const data = await fetch(dataUrl).then(res => res.json());
    console.log('data',data)
    return data;
  } catch (error) {
    console.log("ERROR!!!",dataUrl)
    console.log(error);
    throw new Error(error)
  }
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
