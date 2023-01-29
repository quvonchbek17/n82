
import "./index.scss";
import logo from "../../assets/images/QPICK.svg";
import { Link } from "react-router-dom";

const index = () => {
  return <>
      <div className="header container pt-2 pb-2 d-flex align-items-center justify-content-between">
          <a href="#"><img src={logo} alt="" /></a>

          <div className=" btns ">
            <Link to="/" className="btn bg-transparent fs-1">♥</Link>
            <Link to="/korzinka" className="btn bg-transparent fs-3">🛒</Link>
          </div>
      </div>
  </>
}


export default index