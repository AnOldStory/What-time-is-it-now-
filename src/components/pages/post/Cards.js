import React, { Component } from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';

import {
    FacebookShareButton,
    TwitterShareButton,
    LineShareButton
} from 'react-share';

import {
    FacebookIcon,
    TwitterIcon,
    LineIcon
} from 'react-share';

import "../../../css/AppBody.css";

class Cards extends Component {
    render() {
        return (
            <div>
                <Card >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" >
                                {this.props.author.charAt(0)}
                            </Avatar>
                        }
                        title={this.props.author}

                    />
                    <CardContent>
                        <Typography component="p">
                            {this.props.contents}
                        </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                        <FacebookShareButton quote="WhatTimeIsItNow?" hashtag="#WhatTimeIsItNow?" url={"https://anoldstory.github.io/WhatTimeIsItNow-Frontend/post/" + this.props.id} >
                            <IconButton>
                                <FacebookIcon size={32} round={true} />
                            </IconButton>
                        </FacebookShareButton>
                        <TwitterShareButton title="WhatTimeIsItNow?" hashtag="#WhatTimeIsItNow?" url={"https://anoldstory.github.io/WhatTimeIsItNow-Frontend/post/" + this.props.id} >
                            <IconButton>
                                <TwitterIcon size={32} round={true} />
                            </IconButton>
                        </TwitterShareButton>
                        <LineShareButton title="WhatTimeIsItNow?" url={"https://anoldstory.github.io/WhatTimeIsItNow-Frontend/post/" + this.props.id} >
                            <IconButton>
                                <LineIcon size={32} round={true} />
                            </IconButton>
                        </LineShareButton>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Cards;