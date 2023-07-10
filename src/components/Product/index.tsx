import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
      distinctio, voluptas dicta delectus modi dolore perferendis, est nostrum
      quaerat illo fugit aperiam, iste sit expedita rem! Reiciendis molestiae
      necessitatibus commodi.
    </Descricao>
  </Card>
)

export default Product
