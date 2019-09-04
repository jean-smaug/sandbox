import css from "../styles/index.scss"
import { Title } from '@smaug/storybook-react'

function Home() {
    return (
        <div>
            <Title>Welcome to Next.js!</Title>
            <div className={css.example}>Hello World!</div>
        </div>
    )
  }
  
  export default Home