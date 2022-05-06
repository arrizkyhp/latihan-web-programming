import axios from "axios"

export const setDataBlog = () => (dispatch) => {
    axios.get('http://localhost:4000/v1/blog/posts?page=1&perPage=4')
    .then(result => {
      const responseAPI = result.data
      
      // setDataBlog(responseAPI.data)

      // Merubah State Global 
      dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
      // console.log(responseAPI.data)
    })
    .catch(err => {
      console.log(err)
    })
}