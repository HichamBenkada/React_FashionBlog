import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <main>
      <Section date="11/12/20" title ="On the Street in Brooklyn" imgURL="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolor cum repellendus veritatis amet doloremque consequuntur odio,lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolor cum repellendus veritatis amet doloremque consequuntur odio, eius inventore rerum numquam aspernatur rem repudiandae minima aliquam, sunt perspiciatis animi beatae! eius inventore rerum numquam aspernatur rem repudiandae minima aliquam, sunt perspiciatis animi beatae!"
 />
      <Section  date="11/11/20" title ="Vintage in Vogue" imgURL="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg" content="Sorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolor cum repellendus veritatis amet doloremque consequuntur odio,lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolor cum repellendus veritatis amet doloremque consequuntur odio, eius inventore rerum numquam aspernatur rem repudiandae minima aliquam, sunt perspiciatis animi beatae! eius inventore rerum numquam aspernatur rem repudiandae minima aliquam, sunt perspiciatis animi beatae!"/>
      </main>
      <Footer/>
    </>
  )
}

export default App
