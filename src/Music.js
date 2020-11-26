import React from "react"
import youtube from "./apis/youtube";


class Music extends React.Component {
  constructor() {
    super()
    this.state ={
      musicUrlPrefix: "https://www.youtube.com/embed/",
      musicUrl: "https://www.youtube.com/embed/N26tpehxUN4",
      musicData: [{
        "id": {
          "kind": "youtube#video",
          "videoId": "N26tpehxUN4"
        }
      }]
    }
    this.randomize = this.randomize.bind(this)
  }

  componentDidMount() {
    youtube.get('/search', {
      params: {
        q: "dubstep"
      }
    }).then(response => {
      console.log("LOGGING RESPONSE")
      console.log(response)
      this.setState({
        musicData: response.data.items
      })
    })

  }

  randomize() {
    const musicId = this.state.musicData[Math.floor(Math.random() * this.state.musicData.length)].id.videoId
    this.setState( {
      musicUrl: this.state.musicUrlPrefix + musicId
    })
  }
  render(){
    return(
      <div>
      <iframe
        className="MusicOnly"
        width="100"
        height="315"
        src={this.state.musicUrl + "?start=75&autoplay=1"}
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
