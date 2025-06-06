const url = "https://imdb236.p.rapidapi.com/api/imdb/tt0816692/metascore";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2f3d355a66mshd3e71a4dfb8a824p1ddc76jsnb1ca89fdc00a",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
