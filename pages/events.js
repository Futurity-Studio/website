import {Footer, Image, Menu} from "../components";
import '../theme/styles.scss';

const Events = () => {
  return(
    <main className={'events'}>
      <section>
        <h1>dis events</h1>
        <Image src={'team.png'} />
      </section>
      <Footer/>
    </main>
  )
}

export default Events