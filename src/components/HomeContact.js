import React, { useState } from 'react'
import { db } from '../firebase/firebase'



const HomeContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [send, setSend] = useState('')
    // const [emailError, setEmailError] = useState ('')



    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            setSend("Wysłane")
            setTimeout(() => {setSend('')},3000)
        })
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                break;
            }
        })
        setName("")
        setEmail("")
        setMessage("")
    }



  
    return (
        <section className="contact">
            <h2>Skontaktuj się z nami</h2>
            <form onSubmit={handleSubmit}>
                <div className="contact__name">
                <p className="info">{send}</p>
                    <div className="contact__name__group">
                        <label>
                            Wpisz swoje imię
                        </label>
                        <input type="text" name="name" placeholder="Imię" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="contact__name__group">
                        <label>
                            Wpisz swój meil
                        </label>
                        <input type="text" name="meil" placeholder="Meil" value={email} onChange={e => setEmail(e.target.value)}  />
                    </div>
                </div>
                <label>
                    Wpisz swoją wiadomość
                </label>
                <textarea placeholder="Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit. Deserunt inventore minus obcaecati,
                     quas repellat sit suscipit! Ad eaque minus similique?" value={message} onChange={e => setMessage(e.target.value)} />
                     <div className="contact__submit">
                         <button >Wyślij</button>
                     </div>
                </form>
        </section>
    )
}

export default HomeContact