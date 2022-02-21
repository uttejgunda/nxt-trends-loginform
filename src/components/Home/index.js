// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="left-container">
        <h1 className="home-header">Clothes That Get YOU Noticed</h1>
        <p className="desc">
          {' '}
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <div className="button-container">
          <button className="home-button" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="right-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes"
          className="home-image"
        />
      </div>
    </div>
  </>
)

export default Home
