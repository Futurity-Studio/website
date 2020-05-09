import Link from 'next/link';

import './footer.scss'
import {ICONS, THEME} from "..";
import Icon from "../Icon/icon";

const Footer = () => {
  return(
    <section className={'footer'}>
      <div className={'section-content'}>
      <div>
      <h2>Eager to work with us?</h2>
      <em>get in touch <Icon icon={ICONS.RIGHT} theme={THEME.DARK} /></em>
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