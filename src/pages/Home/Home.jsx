import './Home.scss'
import { useState,useEffect } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import facebook_logo from '../../assets/logos_facebook.svg'
import instagram_logo from '../../assets/skill-icons_instagram.svg'
import linkedin_logo from '../../assets/skill-icons_linkedin.svg'
import twetter_logo from '../../assets/skill-icons_twitter.svg'
import image_me from '../../assets/IMAGE.svg'
import call from '../../assets/telephone-cercle.png'
import msg from '../../assets/commentaires.png'
import fleche from '../../assets/fleche bleu.svg'
import CallButton from '../../bloc/WhatsappTools/CallWha'
import MessageButton from '../../bloc/WhatsappTools/sendMsgeWha'
import Pricing from '../Pricing/Pricing'
function Home() {
const presentation ="<Jordache Nzita/>"
const [githubUser,setGithubUser] = useState()
useEffect(()=>{
    let gitinfo ;
    const url = `https://api.github.com/users/dash-dev-5`;
      fetch(url)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then( (res) => {
            gitinfo=res
            console.log(res)
            setGithubUser(res)    
        })
        .catch((e) => {
            console.error('error fetsh')
        })
  },[])
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
                        <NavLink to='/Contact' className='link'>Engager Moi</NavLink>
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
                        <NavLink to="https://www.facebook.com/Dachenzita?mibextid=LQQJ4d" className='link-reseau'>
                            <img src={facebook_logo} alt="" />
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/dash-nzita-157470263' className='link-reseau'>
                            <img src={linkedin_logo} alt="" />
                        </NavLink>
                        <NavLink to='' className='link-reseau'>
                            <img src={twetter_logo} alt="" />
                        </NavLink>
                        <NavLink to='https://www.instagram.com/p/CiqQ3MtMbAt/?igshid=YmMyMTA2M2Y=' className='link-reseau'>
                            <img src={instagram_logo} alt="" />
                        </NavLink>
                        
                </div>
            </div>
            <div className="content__image">
                <img src={image_me} className='image_image' alt="" /> 
                  
                <div className="whatsapp">
                    <img className='imgAvatar' src={githubUser ?githubUser.avatar_url:''} alt="" />
                    {/* <h3>Jordache Nzita</h3> */}
                    <div className="useGithub">
                    <h3>{githubUser ? githubUser.name : ''}</h3>
                    <p className='ingit'>in Github</p>
                    <div className="useGitbub__content">
                        <div className="repos">
                            <p>Repos</p>
                            <p className='fo'>{githubUser ?githubUser.public_repos:""}</p>
                        </div>
                        <div className="follow">
                            <p>Followers</p>
                            <p className='fo'>{githubUser ?githubUser.followers:""}</p>
                        </div>
                    </div>
                </div> 
                    <div className="whatsapp__button">
                        <CallButton   phoneNumber={'+243892669552'}>
                            <img src={call} alt="" />
                            </CallButton>
                        <MessageButton phoneNumber={'+243892669552'}>
                            <img src={msg} alt="" />
                            </MessageButton>

                    </div>
                </div>
            </div>
        </div>
        <Pricing/>
        </div>
}

export default Home
