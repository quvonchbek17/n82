import { Link } from "react-router-dom"
import "./index.scss"

const index = ({data}) => {

  return (
    <div className=" product-card">
       <img className="card-img" height={240} src={data.imgLinks[3]} alt="rasm" />
       <div className=" d-flex align-items-center justify-content-between">
        <p>{data.name}</p>
        <p className=" price">{data.price} so'm</p>
       </div>
       <p>⭐ {data.raiting}</p>

       <Link to={`/moreinfo/${data.id}`} className=" btn btn-primary w-100">Batafsil</Link>
    </div>
  )
}


export default index