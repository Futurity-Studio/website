import Link from 'next/link';

import './footer.scss'
import {ICONS, THEME} from "..";
import Icon from "../Icon/Icon";

const Footer = () => {
  return(
    <section className={'footer'}>
      <div className={'section-content'}>
        <div>
          <Link prefetch={false} href={'mailto:inquiry@futurity.studio'}>
            <a target='_blank'>
              <h2>Eager to work with us?</h2>
              <div className={'footer--cta'}>
                <em>get in touch <Icon icon={ICONS.RIGHT} theme={THEME.DARK} /></em>
              </div>
            </a>
          </Link>
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