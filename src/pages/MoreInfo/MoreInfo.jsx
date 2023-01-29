import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const MoreInfo = () => {

  const { id } = useParams()
  const [phone, setPhone] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/phones/${id}`)
      .then((res) => res.json())
      .then((data) => setPhone(data));
  }, []);


  return (
    <div className=' container'>
        <div className=' d-flex flex-wrap align-items-center gap-3 justify-content-center'>
            {
             phone.imgLinks && phone.imgLinks.map(rasm => {
                return <img key={crypto.randomUUID()} width={300} height={300} src={rasm} alt="rasm" />
              })
            }

            {
              !phone.imgLinks && <h1>Rasmlar not found</h1>
            }
        </div>
    </div>
  )
}


export default MoreInfo
