import './Pricing.scss'
import { Datapring } from './DataPricing'
import { NavLink } from 'react-router-dom'
function Pricing() {


  return (
    <div className="bg-pricing">
        <h2 className='title-pricing'>My Pricing</h2>
        {Datapring.map(data =>
            <div key={data.id} className="pricing">
                <NavLink to={data.link} target='_blank' className='link-pricing'>
                    <div className="img">
                        <img src={data.img} alt="" />
                    </div>
                    <p>Nom : {data.name}</p>
                    <p>Client : {data.proprio}</p>
                    <p>Technologie : {data.technologie}</p>
                </NavLink>
                <span className='spanId'>{data.id}</span>
            </div>
        
        )}
    </div>
  )
}

export default Pricing
