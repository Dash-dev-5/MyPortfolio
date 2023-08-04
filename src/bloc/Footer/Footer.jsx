import './Footer.scss'
import facebook_logo from '../../assets/logos_facebook.svg'
import instagram_logo from '../../assets/skill-icons_instagram.svg'
import linkedin_logo from '../../assets/skill-icons_linkedin.svg'
import twetter_logo from '../../assets/skill-icons_twitter.svg'
import { NavLink } from 'react-router-dom'
function Footer() {


  return (
        <div className="bg-footer">
            <div className="bg-footer__link-reseau">
                        <NavLink to='' className='link-reseau'>
                            <img src={facebook_logo} alt="" />
                        </NavLink>
                        <NavLink to='' className='link-reseau'>
                            <img src={linkedin_logo} alt="" />
                        </NavLink>
                        <NavLink to='' className='link-reseau'>
                            <img src={twetter_logo} alt="" />
                        </NavLink>
                        <NavLink to='' className='link-reseau'>
                            <img src={instagram_logo} alt="" />
                        </NavLink>
                        
                </div>
                <div className={`bg-footer__nav`}>
                    <NavLink to='/' className='link'>Home</NavLink>
                    <NavLink to='/About' className='link'>About</NavLink>
                    <NavLink to='/Portfolio' className='link'>Portfolio</NavLink>
                    <NavLink to='/Pricing' className='link'>Pricing</NavLink>
                </div>
                <div className="copyright">
                    <p>@2023 Jordache Nzita | All Rights Reserved</p>
                </div>
        </div>
  )
}

export default Footer
