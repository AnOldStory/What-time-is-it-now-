import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Cards from '../Cards';
import { Link } from 'react-router-dom';
import CONFIG from '../../../../config.js';

class ShowPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notice: []
        }
    }
    componentDidMount() {
        fetch(CONFIG.URL +"/board/" + this.props.match.params.id)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.setState({
                    notice: [JSON.parse(json)]
                });
            })
            .catch(err => console.log(err));
    }
    render() {
        let { notice } = this.state;
        return (
            <div>
                <Grid className="center-box" container spacing={40} justify="center" alignItems="center">
                    <Grid className="paper" item>
                        <Paper>
                        {notice.map(row => (
                                <Cards key={row.id} author={row.author} contents={row.contents} id={row.id} />
                            ))}
                        </Paper>
                    </Grid>
                    <Button variant="contained" component={Link} to="/post">글쓰는 곳으로 돌아가기</Button>
                    
                </Grid>
            </div >
        );
    }
}

export default ShowPost;