export default async function fetchData (){
    const url = 'https://free-epic-games.p.rapidapi.com/free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6e40a7d72mshe6ee73f60d9654dp1c3898jsn130adf24166b',
		'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options)
  .then(res=> res.json())
  console.log(response)
	return response.current
	
} catch (error) {
	console.error(error);
}
  }