import { PostContext } from '../context/post-context'
import { useContext } from 'react'

const usePosts = () => {
  return useContext(PostContext)
}

export default usePosts
