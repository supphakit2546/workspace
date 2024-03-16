import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ImageProfile } from './components/ImageProfile'
import './App.css'
import { Title } from './components/Title'
import moment from 'moment'
import imgprofile from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  const [hide , Sethid] = useState(false)

  return (

    <main id="main">
      <div className='leftPort'>
        <ImageProfile image={imgprofile} />

        <Title title="Supphakit Sriprathum">
          <h3>student</h3>
        </Title>

          <Title title="Contract">
            <p>{moment().format('dddd')}</p>
            <p style={{display : hide? "none" : 'block'}}>Tel : +6666666666</p>
            <button onClick={() => Sethid(!hide)}>hide</button>
            <p>Email : xxxxxx@gmail.com</p>
            <p>www.xxxxxxxxx.coom</p>
          </Title>
          
        <div className="eduction">
          <Title title="Eduction">
            <p>
              ปริญาตรี .....
            </p>
            <p>
              มหาลัย .....
            </p>
          </Title>
        </div>
      </div>
      <div className='rightPort'>
        <div className='profile'>
          <h2>profile</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum beatae corrupti inventore rerum repellendus, atque magnam ea nam ratione quae alias aspernatur, omnis sapiente nobis aliquid nemo facilis ad dignissimos dolorem totam modi optio. At, optio ratione quis, consectetur odio, quia incidunt tempore omnis ex deleniti eius mollitia vitae sapiente?</p>
        </div>
        <div className='workExperience'>
          <h2>Work Experience</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis aliquid expedita maxime alias. Tempora voluptates aliquid deleniti sed accusamus!</p>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>React.Js</p>
          <p>Next.Js</p>
        </div>
      </div>
    </main>

  )
}

export default App
