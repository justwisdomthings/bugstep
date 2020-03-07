import React from "react"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleGen = this.handleGen.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        console.log(response.data.memes)
        this.setState({allMemeImgs: response.data.memes})
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleGen(event) {
    const currMemes = this.state.allMemeImgs
    this.setState({
      randomImg: currMemes[Math.floor(Math.random() * currMemes.length)].url
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleGen}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            onChange={this.handleChange}
            value={this.state.topText}
          />

          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
