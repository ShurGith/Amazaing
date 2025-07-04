import HeaderComponent from "../components/HeaderComponent";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <HeaderComponent />
            <section id="error-page">
                <h1>ERROR</h1>
                <h2>No puedes entrar ahí</h2>
                <Link to="/">Ir a Home</Link>
            </section>
        </>
    )
}

export default ErrorPage;