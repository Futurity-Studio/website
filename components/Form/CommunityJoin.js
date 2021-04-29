import React, {useState} from "react";
import {Icon, ICONS, THEME} from "../Icon/Icon";
import styles from './Form.module.scss'

const CommunityJoin = ({}) => {
  const [email,setEmail] = useState('')
  const [submitted,setSubmitted] = useState(false)

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //
  // function encode(data) {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&")
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "community": e.target.getAttribute("email"),
  //       ...email
  //     })
  //   }).then(() => {
  //     console.log('success');
  //     setSubmitted(true);
  //     setEmail('');
  //   }).catch(error => console.log(error))
  // }

  return(
    <form className={styles.Form} name="community" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="community" />
      <label htmlFor="email">
        {(submitted) ?
          <h4>Email Submitted!</h4>
          :
          <h4>More coming soon.<br />Stay in touch for more updates!</h4>
        }
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={'Your Email Here'}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setSubmitted(false)
        }}
        required
      />
      <button
        type="submit"
        disabled={(!validateEmail(email))}
      >
        <Icon
          icon={ICONS.ARROW_RIGHT}
          theme={ (validateEmail(email)) ? THEME.NAV_MIX: THEME.NAV_MIX_NUDE }
        />
      </button>
    </form>
  )
}

export default CommunityJoin;