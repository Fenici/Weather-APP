import Axios from "axios";

//create a functional component and fetch data from apixu 


const getData= (data)=>{
    Axios.get("https://api.apixu.com/v1/current.json", {
        params: {
            key: "5d052e4b4a62413091d90527191601",
            q: "Paris"
        }
    }).then(
        console.log(data)
        
    )
}