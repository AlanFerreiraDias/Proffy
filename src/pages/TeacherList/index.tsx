import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Dia da Semana</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="subject" />
                    </div>

                </form>
            </PageHeader>

            <main>
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
            </main>



        </div >
    )
}

export default TeacherList;