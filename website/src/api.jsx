
async function getData(index) {
	try {
		const response = await fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=DEMO_KEY");
		
		const json = await response.json();
		
		const img_object = json[index];
		
		return img_object.hdurl;
	}
		
	catch(e) {
		throw new Error("could not get img");
	}
}

export default getData