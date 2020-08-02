import React,{Component} from "react"

/* Initialize state*/

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText : "" ,
            bottomText : "" ,
            randomImg : "https://imgflip.com/s/meme/Doge.jpg",
            allMemeImgs : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImgs: memes})
        })
    }

    handleChange(event){
        const {name,value}  = event.target;
        this.setState({[name]:value})
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        console.log(randNum)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        console.log(randMemeImg)
        this.setState({randomImg : randMemeImg})
    }

    render(){
        return(
            <div className="bg-light container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="query col-md-6 justify-content-center align-items-center d-flex">
                    <form className="form meme-form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.topText}
                            name="topText"
                            placeholder="Top Text"
                            onChange={this.handleChange}
                            className="form-control form-control-lg mt-2 input-lg"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.bottomText}
                            name="bottomText"
                            placeholder="Bottom Text"
                            onChange={this.handleChange}
                            className="form-control form-control-lg input-lg mt-2"
                        />
                        <br />
                        <button
                            className="btn btn-lg mt-2 form-control-xl input-lg btn-success"
                        >
                            Generate Meme
                        </button>
                        <br />
                    </form>
                    </div>


                    <div className="meme col-md-6 justify-content-center d-flex p-5">
                        <div className="top-centered justify-content-center text-uppercase"> <p>{this.state.topText}</p> </div>
                        <img
                            src={this.state.randomImg}
                            alt="nhi hai madarchod"
                            width="85%"
                            className="memist img-fluid"
                        />
                        <div className="bottom-centered justify-content-center text-uppercase"> <p>{this.state.bottomText}</p>  </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default MemeGenerator
