import { NotFoundContainer } from './styles'

import { Link } from 'react-router-dom'

interface ComponentNotFoundProps {
  image: string;
  description: string;
}

export function ComponentNotFound({ image, description }: ComponentNotFoundProps) {
  return (
    <NotFoundContainer>
      <img src={image} alt={description} />
      <p>{description}</p>
      <Link to={"/"}>Escolher um café</Link>
    </NotFoundContainer>
  )
}