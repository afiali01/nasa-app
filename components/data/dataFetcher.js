
const dataFetcher = async function(){
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=AiCF4GoXK2qYNtpamacawuDY1syFx0KmNSuq5kKr');
    const data = await res.json();
    console.log(data)

    return data
}

export default dataFetcher;