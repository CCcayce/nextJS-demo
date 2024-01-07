import { useRouter } from 'next/router'
import postsCss from  '../../style/posts.module.scss'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  return <p>Post: <span style={{color: postsCss.primaryColor}}> {pid}</span></p>
}

export default Post