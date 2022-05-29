import axios from 'axios';
import getData from 'odev1/app';

const realData(async (number,getData) => {
    const user_id = await number;
    console.log(getData+ user_id)
})();
const getPost= (user_id)=>{
    await axios('https://jsonplaceholder.typicode.com/posts'+user_id) 
};

const converter = (getPost,realData) =>{
    return getPost+realData
};

converter()


