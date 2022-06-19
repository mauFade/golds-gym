export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "99dd04fc46mshc8d59b36d5f0c3cp1e1951jsn2da9598ec3a6",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "99dd04fc46mshc8d59b36d5f0c3cp1e1951jsn2da9598ec3a6",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};
