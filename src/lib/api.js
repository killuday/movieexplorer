export default class TheMovieDBApi{
    apiBaseUrl="https://api.themoviedb.org/3";
    apiKey="";

    constructor(apiKey){
        this.apiKey=apiKey;

    }

    searchMovies=async(query)=>{
        const resp=await fetch(

            `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
        )

        return resp.json();
    }
    getGernres=async()=>{
        const resp=await fetch(

            `${this.apiBaseUrl}/get/movie?api_key=${this.apiKey}`
        )

        return resp.json();
    }
}