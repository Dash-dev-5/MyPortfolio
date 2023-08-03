import './Home.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import facebook_logo from '../../assets/logos_facebook.svg'
import instagram_logo from '../../assets/skill-icons_instagram.svg'
import linkedin_logo from '../../assets/skill-icons_linkedin.svg'
import twetter_logo from '../../assets/skill-icons_twitter.svg'
import image_me from '../../assets/IMAGE.svg'
import fleche from '../../assets/fleche bleu.svg'
function Home() {
const presentation ="<Jordache Nzita/>"
  return <div className='bg-home'>
        <div className="bg-home__content">
            <div className="content__presentation">
                <div className="presentation__legende">
                    <div className="legende__motivation">
                        <p>Percer</p>
                        <p>La confiance en soit</p>
                    </div>
                    <h1>Hey je suis <span>{presentation}</span></h1>
                    <div className="legende__commente">
                        <p>Je suis un developpeur Junior Front-end et Ingenieur en technique de maintenance. je suis passionné de le nouvelle technologie et de la numerique en generale</p>
                    </div>
                    <div className="legende__hire-me">
                        <NavLink to='' className='link'>Engager Moi</NavLink>
                        <img src={fleche} alt="" />
                    </div>
                </div>
                <div className="presentation__language">
                    <div className="logiciel">
                        <p>Logiciel</p>
                        <div className="content__log">
                            <span className='lang-h'>HTML</span>
                            <span className='lang-c'>CSS</span>
                            <span className='lang-s'>SASS</span>
                            <span className='lang-j'>JavaScript</span>
                            <span className='lang-r'>React</span>
                            <span className='lang-p'>PHP</span>
                            <span className='lang-d'>Pascal/Delphi</span>
                        </div>
                    </div>
                    <div className="sysEmbarque">
                        <p>Systeme Embarqué</p>
                        <div className="content__sys">
                            <span className='sys-m'>MikroPascal</span>
                            <span className='sys-a'>Arduino</span>
                        </div>
                    </div>
                </div>
                <div className="presentation__link-reseau">
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
            </div>
            <div className="content__image">
                <img src={image_me} className='image_image' alt="" />    
            </div>
        </div>

        </div>
}

export default Home
