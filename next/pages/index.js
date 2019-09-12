import css from "../styles/index.scss"
// import { Title } from '@smaug/storybook-react'

// import "@smaug/webpack/dist/main.css";
// import Button from '@smaug/webpack'

function Home() {
    return (
        <div>
            {/* <Title>Welcome to Next.js!</Title> */}
            {/* <Button>Boom</Button> */}
            <div className={css.example}>Hello World!</div>
        </div>
    )
  }
  
  export default Home