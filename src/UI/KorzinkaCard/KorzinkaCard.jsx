import "./KorzinkaCard.scss"

const KorzinkaCard = () => {
  return (
    <div className=" korzinka-card">
        <div className=" d-flex align-items-center">
            <img className=" me-3" width={200} height={200} src="https://myxiaomi.uz/wp-content/uploads/2020/05/note9s-2.jpg" alt="rasm" />
            <div>
                <p>I phone 15</p>
                <p>1200 $</p>
            </div>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center gap-1">
                <button className="circleBtn bg-warning ">-</button>
                <span>2</span>
                <button className="circleBtn bg-warning">+</button>
            </div>

            <p>2700 $</p>
        </div>
    </div>
  )
}

export default KorzinkaCard
