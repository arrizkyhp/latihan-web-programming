import axios from "axios"

export const setDataBlog = (page) => (dispatch) => {
    axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
    .then(result => {
      const responseAPI = result.data
      
      // setDataBlog(responseAPI.data)

      // Merubah State Global 
      dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
      dispatch({
        type: 'UPDATE_PAGE', 
        payload: {
          currentPage: responseAPI.current_page, 
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
        }
      })
      // console.log(responseAPI.data)
    })
    .catch(err => {
      console.log(err)
    })
}