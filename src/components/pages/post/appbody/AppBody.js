import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Cards from '../Cards';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../../../../css/AppBody.css';

class AppBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "익명",
            text: "글을 써주세요",
            notice: [],
            loding: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        fetch("https://opso.ml/board")
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.setState({
                    notice: JSON.parse(json)
                });
            })
            .catch(err => console.log(err));
    }


    handleChange = target => event => {
        this.setState({
            [target]: event.target.value,
        });
    };

    handleSubmit() {
        this.setState({
            loding: 1
        })
        fetch("https://opso.ml/board", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "author": this.state.name,
                "contents": this.state.text
            })
        }).then(() => {
            this.handleUpdate()
            this.setState({
                text: "",
                loding: 0
            })
        })
            .catch(err => console.log(err));
    }

    handleUpdate() {
        fetch("https://opso.ml/board")
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.setState({
                    notice: JSON.parse(json)
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
                        <Paper >
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                className="grid-padding"
                            >
                                <TextField
                                    id="outlined-name"
                                    label="이름"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="none"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="내용"
                                    multiline
                                    value={this.state.text}
                                    onChange={this.handleChange('text')}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button variant="contained" color="primary" onClick={this.handleSubmit} disabled={this.state.loding === 1 ? true : false}>
                                    {this.state.loding === 1 ? "글을 올리고 있습니다. " : "글 올리기 "}
                                    <Icon >send</Icon>
                                </Button>
                            </Grid>

                        </Paper>
                        <br />

                        {this.state.loding === 1 ? <CircularProgress className="loding" disableShrink /> : <br />}

                        <Paper >
                            {notice.map(row => (
                                <Cards key={row.id} author={row.author} contents={row.contents} id={row.id} />
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default AppBody;