import logo from "../../assets/logo.svg";
import "./styles.css";
import Button from "../Button";

function Info({heading, text, dontShowButton, buttonHeading }) {
    return(
        <div className="info-wrapper">
            <div className="info-left">
                <h1>{heading ? heading : "No Heading"}</h1> 
                <p>{text}</p>
                {dontShowButton ? (
                    <h1> React Topic </h1>
                 ) : (
                <Button text={buttonHeading} />
                )}
            </div>
            <div className="img">
                <img src={logo} alt="Image" className="logo"/>
            </div>
        </div>
    );
}
 export default Info;