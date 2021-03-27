import React, {useState} from "react";
import {Icon, ICONS, THEME} from "../Icon/Icon";
import styles from './Form.module.scss'

const CommunityJoin = ({}) => {
  const [email,setEmail] = useState('')

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return(
    <form className={styles.Form} name="community" netlify>
      <label htmlFor="email"><h4>More coming soon.<br /> Stay in touch for more updates!</h4></label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={'Your Email Here'}
        value={email || null}
        onChange={(e) => {setEmail(e.target.value)}}
        required
      />
      <button
        type="submit"
        disabled={(!validateEmail(email))}
      >
        <Icon
          icon={ICONS.ARROW_RIGHT}
          theme={ (validateEmail(email)) ? THEME.DARK: THEME.DISABLED }
        />
      </button>
    </form>
  )
}

export default CommunityJoin;