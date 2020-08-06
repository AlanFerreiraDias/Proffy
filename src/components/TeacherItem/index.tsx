import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/12505549?s=460&u=4cd2e26d104ff67f00ca014a618059335cc494c8&v=4" alt="" />
                <div>
                    <strong>Alan Dias</strong>
                    <span>
                        Matemática
                            </span>
                </div>
            </header>
            <p>
                Engenheiro pela UFRGS apaixonado por tecnologia e aprendizado.
                        <br /><br />
                        Bora aprender?
                    </p>
            <footer>
                <p>
                    Preço/hora<strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato.
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;