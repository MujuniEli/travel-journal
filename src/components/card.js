
import icon from "../images/pin.png"

export default function Card(props) {
    return (
                <div className="card">
                    <img src={props.item.imageUrl} alt="iconic loc" />
                    <section className="card-content">
                        <div className="sm-title">
                            <img src={icon} alt="location pin icon" />
                            <p className="country">{props.item.location}</p>
                            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                        </div>
                        <h2 className="landmark">{props.item.title}</h2>
                        <h4>{props.item.startDate} - {props.item.endDate}</h4>
                        <p>{props.item.description}</p>
                    </section>
                </div>
    )
}