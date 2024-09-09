import Header from "./components/Header"
import List from "./components/List"
import Images from "./components/Images"
import lasagna from './images/main/lasagna.jpg'
import desert2 from './images/main/dessert2.jpg'
import sauce from './images/main/sauce.jpg'
import stew from './images/main/stew.jpg'

function App() {

  return (
    <div>
      <Header />
        <div className="main-content">
            <div className="recipe-images">
                <div className="lasagna-image">
                  <img src={lasagna} alt="" srcSet="" />
                </div>
                <Images 
                source={desert2}
                imgClass="dessert-image"
                textClass="desert-text"
                strongText="desert recipes"
                />
                <Images 
                source={stew}
                imgClass="stew-image"
                textClass="stew-text"
                strongText="stew recipes"
                />
                <Images
                source={sauce}
                imgClass="sauce-image"
                textClass="sauce-text"
                strongText="sauce recipes"
                />
            </div>
        </div>
      <List />
    </div>
  )
}

export default App
