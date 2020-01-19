import React from 'react';
import axios from 'axios';
import Result from './Result';
import api from '../secret.js'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            search: '',
            loading: true,
            results: [],
            ids: []
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { search, ids } = this.state;
        // console.log(search)
        let videoIDs = [];
       
        let searchAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=relevance&key=${api}&q=${search}&type=video`
        let res = await axios.get(searchAPI)
        videoIDs = res.data.items
        console.log(videoIDs)
        for (let i = 0; i < videoIDs.length; i++) {
            ids.push({
                id: `${videoIDs[i].id.videoId}`,
                title: `${videoIDs[i].snippet.title}`,
                thumbnail: `${videoIDs[i].snippet.thumbnails.medium.url}`,
                width: `${videoIDs[i].snippet.thumbnails.medium.width}`,
                height: `${videoIDs[i].snippet.thumbnails.medium.height}`
            })
            console.log(ids)
        }
        this.setState({
            ids: ids,
            loading: false
        })
    }
    handleSearchInput = (event) => {
        this.setState({
            search: event.target.value,
            ids: [],
            loading: true
        })

    }
    render = () => {
        const { ids, loading } = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Search for a video' onChange={this.handleSearchInput}></input>
                    <input type='submit' value='Search'></input>
                </form>
                {loading ?
                    <p>No Search Results. Search for videos above! </p> :
                    <Result ids={ids} />}




            </>
        )
    }
}

export default Home;