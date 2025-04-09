export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.391297",
    bl_lng: "25.69812",
    tr_lat: "43.25524",
    tr_lng: "44.69351",
    limit: "300",
    speed: "0,460",
  },
  headers: {
    "x-rapidapi-key": "5ffbf60e59mshe2da6f61db1bbf6p142ba1jsne235f98412e0",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/detail",
  params: { flight: null },
  headers: {
    "x-rapidapi-key": "5ffbf60e59mshe2da6f61db1bbf6p142ba1jsne235f98412e0",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
