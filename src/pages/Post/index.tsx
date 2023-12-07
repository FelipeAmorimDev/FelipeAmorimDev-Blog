import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { LinkGithub } from '../../components/LinkGithub'
import {
  PostCompleteHeader,
  PostContent,
  PostDetailsContainer,
  PostHeaderContainer,
  PostSectionContainer,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../api/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

interface IPost {
  html_url: string
  title: string
  created_at: string
  comments: string
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<IPost>({} as IPost)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(
        `/repos/felipeamorimdev/github-blog/issues/${params.id}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      setPost(response.data)
    }

    fetchPost()
  }, [params])

  if (post.title) {
    const formattedDate = formatDistanceToNow(new Date(post.created_at), {
      locale: ptBR,
      addSuffix: true,
    })
    return (
      <PostSectionContainer>
        <PostHeaderContainer>
          <PostCompleteHeader>
            <button
              onClick={() => {
                navigate('/')
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </button>
            <LinkGithub value="VER NO GITHUB" url={post.html_url} />
          </PostCompleteHeader>

          <h1>{post.title}</h1>

          <PostDetailsContainer>
            <div>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {post.user.login}
              </span>
            </div>

            <div>
              <span>
                <FontAwesomeIcon icon={faCalendarDay} />
                {formattedDate}
              </span>
            </div>

            <div>
              <span>
                <FontAwesomeIcon icon={faComment} />
                {post.comments} comentários
              </span>
            </div>
          </PostDetailsContainer>
        </PostHeaderContainer>

        <PostContent>
          <Markdown>{post.body}</Markdown>
        </PostContent>
      </PostSectionContainer>
    )
  }
  return null
}
