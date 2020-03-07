import React from "react"
import InsectData from "./insectData"


class Video extends React.Component {
  constructor() {
    super()
    this.state ={
      videoUrl: "https://www.youtube.com/embed/PBDWkUddJ-Q",
      availableVids: InsectData
    }
    this.randomize = this.randomize.bind(this)
  }


  randomize() {
    this.setState( {
      videoUrl: this.state.availableVids[Math.floor(Math.random() * this.state.availableVids.length)]
    })
  }


  render(){
    return(
      <div>
      <button onClick={this.randomize}>Randomize Video</button>
      <br />
      <iframe
        width="1000"
        height="600"
        src={this.state.videoUrl + "?start=300&autoplay=1&mute=1"}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
      </div>
    )
  }

}

export default Video
