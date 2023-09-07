
export const getGiftsAsync = async (category) => {
    const apiKey = 'wRCPsYuXxiN5k6ihXP41dTVpn38l3Hig';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}`);
    const { data } = await response.json();

    const gifts = data.map(img => ({
       id: img.id,
       title: img.title,
       url: img.url,
    }));

    console.log(gifts);

  return gifts;
}