import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkExternal } from './styles'

interface ILinkGithubProps {
  value: string
  url: string
}

export function LinkGithub({ value, url }: ILinkGithubProps) {
  return (
    <LinkExternal href={url}>
      {value}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkExternal>
  )
}
