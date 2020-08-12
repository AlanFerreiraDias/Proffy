import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css'


function TeacherForm() {
    const history = useHistory();
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
        return true;
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }//as the object can have only one filed with the same name, it will overwrite the original field
            }
            return scheduleItem;
        })
        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault(); //prevents the standart form behaviour (reload the page)

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso.')
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que legal que você quer dar aulas."
                description="O primeiro passo é preencher o formulário de inscrição."
            >
                <main>
                    <form onSubmit={handleCreateClass}>
                        <fieldset>
                            <legend>Seus dados</legend>
                            <Input
                                name="name"
                                label="Nome completo"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <Input
                                name="avatar"
                                label="Avatar"
                                value={avatar}
                                onChange={(e) => { setAvatar(e.target.value) }}
                            />
                            <Input
                                name="whatsapp"
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={(e) => { setWhatsapp(e.target.value) }}
                            />
                            <Textarea
                                name="bio"
                                label="BIografia"
                                value={bio}
                                onChange={(e) => { setBio(e.target.value) }}
                            />
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
                                value={subject}
                                onChange={(e) => { setSubject(e.target.value) }}
                            />
                            <Input
                                name="cost"
                                label="Custo da sua aula por hora."
                                value={cost}
                                onChange={(e) => { setCost(e.target.value) }}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>
                                Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                    + Novo Horário
                        </button>
                            </legend>

                            {scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select
                                            name="subject"
                                            label="Dia da Semana"
                                            value={scheduleItem.week_day}
                                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                            options={[
                                                { value: '1', label: 'Segunda-feira' },
                                                { value: '2', label: 'Terça-feira' },
                                                { value: '3', label: 'Quarta-feira' },
                                                { value: '4', label: 'Quinta-feira' },
                                                { value: '5', label: 'Sexta-feira' },
                                                { value: '6', label: 'Sábado' },
                                                { value: '0', label: 'Domingo' }]}
                                        />
                                        <Input
                                            name="from"
                                            label="Das"
                                            type="time"
                                            value={scheduleItem.from}
                                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}>
                                        </Input>
                                        <Input
                                            name="to"
                                            label="Até"
                                            type="time"
                                            value={scheduleItem.to}
                                            onChange={e => setScheduleItemValue(index, 'to', e.target.value)}>
                                        </Input>

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
                            <button type="submit">
                                Salvar cadastro
                        </button>
                        </footer>
                    </form>
                </main>
            </PageHeader>
        </div >
    )
}

export default TeacherForm;