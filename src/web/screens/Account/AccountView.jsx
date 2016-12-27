import React, {Component, PropTypes} from 'react';
import Login  from 'shared/components/LoginWidget';
import SavedWordsWidget from 'shared/components/SavedWordsWidget';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { saveWord, loadWords } from 'actions/saved-words-action';

class AccountView extends Component {
    constructor(props) {
        super(props);
        this.onWordClick = this.onWordClick.bind(this);
    }
    
    onWordClick(word){
        if(word) 
            this.props.router.push("/word?w="+ word);
    }

    render() {
        return (
            <div className="app--padding app--margin-top">
                <div className="w3-section">
                    <Login />
                </div>
                <div className="w3-section">
                    <SavedWordsWidget onWordClick={this.onWordClick} wordList={this.props.account.wordList} loadWords={this.props.loadWords} saveWord =  {this.props.saveWord}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.account
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({saveWord : saveWord, loadWords: loadWords }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AccountView);