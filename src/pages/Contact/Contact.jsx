import React from "react";
import call from '../../assets/telephone-cercle.png'
import msg from '../../assets/commentaires.png'
import './Contact.scss'
import { useEffect,useState } from "react";
import CallButton from "../../bloc/WhatsappTools/CallWha";
import MessageButton from "../../bloc/WhatsappTools/sendMsgeWha";
function Contact() {
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
      return <div className='bg-contact'>
                    <div className="backSup">
                        <h1>Contact Us</h1>
                        <p>Une page pour nous contacter</p>
                    </div>
                    <div className="submitContact">
            <div className="form">
                <form action="" className="formCorrespondant">
                    <h3>Pour tous soucis contacter moi</h3>
                    <p>Je suis près a vous sercvir</p>
                    <div className="controw">
                        <div className="form-group">
                            <label htmlFor="nameCorespondant">Nom</label>
                            <input type="text" name="nameCorrespondant" id="nameCorespondant" placeholder="e.g Nzita" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenameCorespondant">Prenom</label>
                            <input type="text" name="prenameCorrespondant" id="prenameCorespondant" placeholder="e.g Dash" required/>
                        </div>
                    </div>
                    <div className="controw">
                        <div className="form-group">
                            <label htmlFor="emailCorespondant">Email</label>
                            <input type="email" name="emailCorrespondant" id="emailCorrespondant" placeholder="e.g nzita@yahoo.com" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="numnerCorespondant">Numero</label>
                            <input type="number" name="numnerCorrespondant" id="numnerCorrespondant" placeholder="e.g +243896654456" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea name="messageCorrespondant" id="messageCorrespondant" cols="30" rows="10" placeholder="Votre message"></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <div >
            </div>
        </div>
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
    }
    
    export default Contact
    