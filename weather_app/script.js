
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b364d2d642msh18d80a80025e22ep11335ajsn839029bd9ca3',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


	 fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
     .then(Response => Response.json())
     .then(Response => console.log(Response))
     .catch(err => console.log(err));
	
    