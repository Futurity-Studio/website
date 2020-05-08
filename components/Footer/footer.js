import Link from 'next/link';

import './footer.scss'

const Footer = () => {
  return(
    <section className={'footer'}>
      <div className={'section-content'}>
      <div>
      <h1>Eager to work with us?</h1>
      <em>get in touch →</em>
      </div>
      <div>
        <p><em>© Futurity Studios<br />2019 - 2020</em></p>
        <p><em>Barcelona, Spain</em><br />11 Carrer de Bailèn</p>
      </div>
      </div>
    </section>
  )
}

export default Footer