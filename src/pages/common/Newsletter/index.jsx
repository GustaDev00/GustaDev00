import { NewsletterForms, NewsletterText, LineNewsletter } from "./style";
import React from "react";

const Newsletter = () => {
    return (
        <LineNewsletter>
            <NewsletterText>
                Recebe Nossa Newsletter 
            </NewsletterText>
            <NewsletterForms>
                <input type="text" placeholder="Digite seu e-mail" />
                <button>Enviar</button>
            </NewsletterForms>
        </LineNewsletter>
    )
}
export default Newsletter