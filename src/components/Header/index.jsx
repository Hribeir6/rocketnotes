import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header() { 
  return ( 

    <Container> 
      <Profile>

        <img src="https://github.com/Hribeir6.png" alt="Foto do usuário" />
        <div> 
          <span>Bem-vindo,</span>
          <strong>Henrique Ribeiro</strong>
        </div>

      </Profile>
    
    <Logout> 
      <RiShutDownLine />
    </Logout>
      
    </Container>

  )
}