import React from 'react'

const HomeContact = () => {
  
    return (
        <section className="contact">
            <h2>Skontaktuj się z nami</h2>
            <form>
                <div className="contact__name">
                    <div className="contact__name__group">
                        <label>
                            Wpisz swoje imię
                        </label>
                        <input type="text" name="name" placeholder="Imię"  />
                    </div>
                    <div className="contact__name__group">
                        <label>
                            Wpisz swój meil
                        </label>
                        <input type="text" name="meil" placeholder="Meil"  />
                    </div>
                </div>
                <label>
                    Wpisz swoją wiadomość
                </label>
                <textarea placeholder="Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit. Deserunt inventore minus obcaecati,
                     quas repellat sit suscipit! Ad eaque minus similique?" />
                     <div className="contact__submit">
                         <button >Wyślij</button>
                     </div>
                </form>
        </section>
    )
}

export default HomeContact