import './card.css';
export default (props) => (
    <div className="card" width={props.width} height={props.height}>
        <div className="container">
            <h4>
                <b>{props.place}</b>
            </h4>
            <h4>
                <b>22 &deg;</b>
            </h4>
            <p>Light Rain</p>
        </div>
    </div>
);
