import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {

        super(props); 

        this.state = {

            linkName: '',

            url: ''

        }

    }

    handleChange = event => {

        if(event.target.id === "link")

            this.setState({ linkName: event.target.value}); 
        else

            this.setState({ url: event.target.value});         

    }

    onFormSubmit = event => { 

        event.preventDefault();
        let newFavLink = {linkName: this.state.linkName, url: this.state.url};

        this.props.addNew(newFavLink);
        this.setState({ linkName: '', url: ''}); 

    }

    render() {

        return(

            <form>

             

                <label htmlFor="link">Link Name : </label>

                <input type="text" id="link" value={this.state.linkName} onChange={(event) =>this.handleChange(event)}/>      

                <label htmlFor="url">URL : </label>

                <input type="text" id="url" value={this.state.url} onChange={(event) =>this.handleChange(event)}/>

                <button type="submit" onClick={(e)=>this.onFormSubmit(e)}>Submit</button>                

            </form>

        )

    }

}

export default Form;