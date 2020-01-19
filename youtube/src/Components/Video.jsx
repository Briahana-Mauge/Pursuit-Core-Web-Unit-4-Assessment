import React from 'react'
import YouTube from 'react-youtube';
class Video extends React.Component {
    constructor(props) {
        super()
        this.state = {
            id: props.location.pathname.replace(`/video/`, ``)
        }
    }
    ready = (event) => {
        event.target.pauseVideo()
    }
    render() {
        const opts = {
            height: `390`,
            width: `640`,
        }
        const { id } = this.state
        return (
            <>
                <YouTube videoId={id}
                    opts={opts}
                    onReady={this.ready} />
                <form>
                    <input type='text' placeholder='name' />
                    <input type='text' placeholder='comment' />
                    <input type='submit' value='Submit' />
                </form>
            </>
        )
    }
}

// const Video = (props) => {
//     console.log(props)
//     let videoId = props.location.pathname.replace(`/video/`, ``)
//     console.log(props, videoId)
//     return (
//         <>
//             {/* <Youtube/> */}
//             <h1>Video</h1>
//             <p>Welcome to Briahana's personal website</p>

//             <form>
//                 <input type='text' placeholder='name' />
//                 <input type='text' placeholder='comment' />
//                 <input type='submit' value='Submit' />
//             </form>
//         </>
//     )
// }

export default Video;