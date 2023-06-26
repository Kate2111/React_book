import  axios from 'axios';

export default  class BookServise {
    static async getAll(){
        try{
            const response = await  axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA9knLZoLZlpSkvNQR6BSW6xOLzlHzkqYM');
            return response.data.items;
        } catch(e) {
            console.log(e)
        }
    }
}


/* 
export default  class BookServise {
    static async getAll(limit = 10, page = 1){
        try{
            const response = await  axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA9knLZoLZlpSkvNQR6BSW6xOLzlHzkqYM', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            return response;
        } catch(e) {
            console.log(e)
        }
    }
} */