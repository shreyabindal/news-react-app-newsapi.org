import React, { Component } from 'react';
import { Image, Card } from 'react-bootstrap'

class Article extends Component {

    constructor(props){
        super(props);
    }

    displayArticle = () => {
       return ( 
        <Card>
            <Card.Header>{this.props.article.source.name}</Card.Header>
            <Card.Img className="embed-responsive embed-responsive-16by9" variant="top" src={this.props.article.urlToImage} rounded />
            <Card.Body>
            <Card.Title>{this.props.article.title}</Card.Title>
            <Card.Text>
                {this.props.article.description}
            </Card.Text>
            </Card.Body>
            <Card.Text>
                    <small className="text-muted float-right">Author: {this.props.article.author}<br />{this.props.article.publishedAt}</small>
            </Card.Text>
            <Card.Footer>
                <Card.Link href={this.props.article.url}>Read complete article</Card.Link>
            </Card.Footer>
            
        </Card>
       );
    }
    render() { 
        return ( 
            <React.Fragment>
                <div class=" d-flex align-items-stretch">
                    {/* <div class="col-lg-3"></div> */}
                    <div class="col-lg-12 d-flex align-items-stretch">
                        {this.displayArticle()}
                    </div><br/><br/>
                    {/* <div class="col-lg-3"></div> */}
                </div> 
         </React.Fragment>
        );
    }
}
 
export default Article;