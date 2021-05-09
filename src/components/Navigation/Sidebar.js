import logo from '../../assets/imgs/logo.png'
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {GiNothingToSay} from 'react-icons/gi'
import {ImFilesEmpty} from 'react-icons/im'
import {GrConfigure} from 'react-icons/gr'
import {IoExitOutline} from 'react-icons/io5'

const Sidebar = ({show}) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <img src={logo} alt='logo' className='logo'/>
      <ul>
        <li><Link to='/' ><FaHome/>Inicio</Link></li>
        <li><Link to='/materiales'><GiNothingToSay/>Multimedia</Link></li>
        <li><Link to='/temas'><ImFilesEmpty/>Temas</Link></li>
        <li><Link to='/config'><GrConfigure/>Configuración</Link></li>
        <li><a href='/login'><IoExitOutline/>Salir</a></li>
      </ul>
    </div>
  )
}
export default Sidebar