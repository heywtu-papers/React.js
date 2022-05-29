import axios from "axios";

const getData=()=>{
        await axios('https://jsonplaceholder.typicode.com/users')
};

export{
    getData,
}

