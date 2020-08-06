import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';


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
        </div >
    )
}

export default TeacherList;