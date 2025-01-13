import S from "./Style.module.scss";
import linkedin from "../assets/logoLinkedin.png";
import facebook from "../assets/logoFacebook.png";
import insta from "../assets/logoInstagram.png";

export default function Footer() {
    return(
        <footer>
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
        </footer>
    )
}