import axios from 'axios'
import { saveImg } from './home/action'

export default class BookstoreAPI {
    static addBooktoAPI = function (book: any) {
        return async function (dispatch: Function) {
            // const { id, url } = book
            // await axios.post(url, id)
            dispatch(saveImg(book))
        }
    }
}
