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