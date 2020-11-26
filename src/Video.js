import React from "react"
import youtube from "./apis/youtube";


class Video extends React.Component {
  constructor() {
    super()
    this.state ={
      videoUrlPrefix: "https://www.youtube.com/embed/",
      videoUrl: "https://www.youtube.com/embed/PBDWkUddJ-Q",
      videoData: [{
        "id": {
          "kind": "youtube#video",
          "videoId": "PBDWkUddJ-Q"
        }
      }]
    }
    this.randomize = this.randomize.bind(this)
  }

  componentDidMount() {
    youtube.get('/search', {
      params: {
        q: "insects"
      }
    }).then(response => {
      console.log("LOGGING RESPONSE")
      console.log(response)
      this.setState({
        videoData: response.data.items
      })
    })

  }


  randomize() {
    const videoId = this.state.videoData[Math.floor(Math.random() * this.state.videoData.length)].id.videoId
    this.setState( {
      videoUrl: this.state.videoUrlPrefix + videoId
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
        src={this.state.videoUrl + "?start=75&autoplay=1&mute=1"}
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
