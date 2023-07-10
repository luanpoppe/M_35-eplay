import { ButtonContainer } from './style'
import { ButtonLink } from './style'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonLink
        to={to as string}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonLink>
    )
  }

  return <ButtonContainer title={title}>{children}</ButtonContainer>
}

export default Button
