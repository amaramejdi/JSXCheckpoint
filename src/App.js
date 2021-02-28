import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {
  render() {
    return (
<>
<h1 className="title-red">Movies</h1>
  <div className="pell">
    <br />
    <img src={"https://media.senscritique.com/media/000018630904/325/Once_Upon_a_Time_in_Hollywood.jpg"} />
    <br />
    <img src="https://mediathequesaujon.files.wordpress.com/2017/12/114160.jpg" />
  </div>
  <video className="movie" controls>
    <source src="https://youtu.be/IBUyCSKju9I" type="video/mp4" />
  </video>
</>
    );
  }
}

export default App;