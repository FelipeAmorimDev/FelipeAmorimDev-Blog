import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AuthorBlogContainer,
  AuthorNameContainer,
  AuthorDetailsContainer,
  BlogPostsHeader,
  BlogPostsList,
  BlogPostsSection,
  PostHeader,
} from './styles'
import { LinkGithub } from '../../components/LinkGithub'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../api/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface IProfile {
  name: string
  avatar_url: string
  bio: string
  followers: string
  company: string
  login: string
  html_url: string
}

export interface IPost {
  title: string
  body: string
  created_at: string
  number: string
}

export function Home() {
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<IPost[]>([])
  const [totalPosts, setTotalPosts] = useState(0)

  useEffect(() => {
    async function getUsernameProfile() {
      const response = await api.get('/users/felipeamorimdev', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      setProfile(response.data)
    }

    getUsernameProfile()
  }, [])

  const fetchPosts = useCallback(async (texto: string) => {
    const username = 'felipeamorimdev'
    const repo = 'github-blog'

    const response = await api.get(
      `https://api.github.com/search/issues?q=${texto}%20repo:${username}/${repo}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
    setTotalPosts(response.data.total_count)
    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts(query)
  }, [fetchPosts, query])

  function formatText(text: string, limiteLength = 50) {
    if (!text) {
      return text
    }

    const textArr = text.split(' ')
    const newText = textArr
      .map((string, index) => {
        return index < limiteLength ? string : ''
      })
      .filter((string) => string !== undefined)
      .join(' ')
    return newText
  }

  const navigate = useNavigate()

  return (
    <>
      <AuthorBlogContainer>
        <img src={profile.avatar_url} alt="" />
        <div>
          <AuthorNameContainer>
            <h1>{profile.name}</h1>
            <LinkGithub value="GITHUB" url={profile.html_url} />
          </AuthorNameContainer>
          <p>{profile.bio}</p>
          <AuthorDetailsContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profile.company ?? 'Nenhuma'}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profile.followers} seguidores</span>
            </div>
          </AuthorDetailsContainer>
        </div>
      </AuthorBlogContainer>

      <BlogPostsSection>
        <BlogPostsHeader>
          <div>
            <strong>Publicações</strong>
            <span>{totalPosts} publicações</span>
          </div>

          <input
            type="text"
            id="query "
            placeholder="Buscar conteúdo"
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.code === 'NumpadEnter' || e.code === 'Enter') {
                const { target } = e
                setQuery((target as HTMLInputElement).value)
              }
            }}
          />
        </BlogPostsHeader>

        <BlogPostsList>
          {posts.map((post) => {
            const formatedDate = formatDistanceToNow(
              new Date(post.created_at),
              { locale: ptBR, addSuffix: true },
            )
            return (
              <li
                data-id={post.number}
                tabIndex={1}
                key={post.number}
                onClick={() => {
                  navigate(`/post/${post.number}`)
                }}
              >
                <PostHeader>
                  <h2>{post.title}</h2>
                  <span>{formatedDate}</span>
                </PostHeader>

                <p>j{formatText(post.body, 20)}</p>
              </li>
            )
          })}
        </BlogPostsList>
      </BlogPostsSection>
    </>
  )
}
