import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers : {
        Authorization: "Client-ID nsoKoMS04G7pxzHbbLls_eY5ioztDBpA8KcxbfGtt8E"
    }
})