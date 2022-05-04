import React from 'react'
import { RegisterBg } from '../../assets'
import { Link } from '../../components'
import './detailBlog.scss'

const DetailBlog = () => {
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={RegisterBg} alt="article thumb" />
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author</p>
      <p className='blog-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consectetur distinctio adipisci a dicta dolore, dolor neque eveniet qui enim ratione architecto totam voluptatum at perspiciatis deserunt cumque. Porro accusamus odit voluptas sed nobis, blanditiis cupiditate ratione. Consectetur, possimus impedit consequuntur sit debitis ipsa est corporis consequatur architecto corrupti optio pariatur officia deleniti mollitia numquam tempora. Earum, inventore quidem cum ea voluptate animi porro sit assumenda minus obcaecati repellendus a perferendis suscipit fuga enim tempora possimus tempore molestias iste laudantium! Assumenda culpa veniam amet porro sapiente consequuntur iure, maxime pariatur cum voluptatibus in rem architecto quia vero ratione aut ipsam.</p>
      <Link to="/" title="Kembali ke Halaman utama" />
    </div>
  )
}

export default DetailBlog