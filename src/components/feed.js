import React, { Component } from 'react';
import Article from './article';
import {Row, Container, CardDeck} from 'react-bootstrap';

class Feed extends Component {
    
    constructor(props){
        super(props);
    }

    assignArticles = () => {
        return ( 
            <Container>
                {this.props.articles.map(article=>
                    <div className="row">
                        <CardDeck>
                            <Article key={article} article={article} /> 
                        </CardDeck>
                    </div>
                )}
            </Container>
            );
    }

    render() {
        return (
            <React.Fragment>
                {this.assignArticles()}
            </React.Fragment>
        );
    }
}
 
export default Feed;