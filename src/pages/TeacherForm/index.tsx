import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
        return true;
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que legal que você quer dar aulas."
                description="O primeiro passo é preencher o formulário de inscrição."
            >
                <main>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome completo" />
                        <Input name="avatar" label="Avatar" />
                        <Input name="whatsapp" label="Whatsapp" />
                        <Textarea name="bio" label="BIografia" />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Literatura', label: 'Literaturas' },
                                { value: 'História', label: 'História' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' }
                            ]}
                        />
                        <Input name="cost" label="Custo da sua aula por hora." />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>

                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="subject"
                                        label="Dia da Semana"
                                        options={[
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                            { value: '0', label: 'Domingo' }]}
                                    />
                                    <Input name="from" label="Das" type="time"></Input>
                                    <Input name="to" label="Até" type="time"></Input>

                                </div>

                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="button">
                            Salvar cadastro
                        </button>
                    </footer>
                </main>
            </PageHeader>
        </div >
    )
}

export default TeacherForm;