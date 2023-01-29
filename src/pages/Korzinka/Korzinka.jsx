import React from 'react'
import KorzinkaCard from '../../UI/KorzinkaCard/KorzinkaCard'
import "./Korzinka.scss"
 const Korzinka = () => {
  return <div className="container d-flex flex-column gap-3">
        <KorzinkaCard />
        <KorzinkaCard />
  </div>
}

export default Korzinka
