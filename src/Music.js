import React from "react"
import MusicData from "./musicData"


class Music extends React.Component {
  constructor() {
    super()
    this.state ={
      musicUrl: "https://www.youtube.com/embed/N26tpehxUN4",
      availableMusic: MusicData
    }
    this.randomize = this.randomize.bind(this)
  }


  randomize() {
    this.setState( {
      musicUrl: this.state.availableMusic[Math.floor(Math.random() * this.state.availableMusic.length)]
    })
  }
  render(){
    return(
      <div>
      <iframe
        className="MusicOnly"
        width="100"
        height="315"
        src={this.state.musicUrl + "?start=300&autoplay=1"}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <button onClick={this.randomize}>Randomize Music</button>
      </div>
    )
  }

}

export default Music
