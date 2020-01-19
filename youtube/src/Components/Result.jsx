import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Video from './Video';
class Result extends React.Component {
    constructor(props) {
        super();
        this.state = {
            results: props.ids
        }
    }
    renderVideos = () => {
        let { results } = this.state
        return (
            <ul >
                {
                    results.map(result => {
                        return (
                            <li key={result.id}>
                                <Link to={`/video/${result.id}`}>
                                    {
                                        <>
                                        <h3>{result.title}</h3>
                                        <img
                                            src={result.thumbnail}
                                            width={result.width}
                                            height={result.height}
                                        >
                                        </img>
                                    </>
                                }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        return (
            <>
                <p>trial</p>
                <Switch>
                    <Route exact path='/' render={this.renderVideos} />
                    <Route path='/video/:id' component={Video} />
                </Switch>
            </>
        )
    }
}
export default Result;

