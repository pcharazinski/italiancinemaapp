import React from 'react';

class RegisterForm extends React.Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); //nie bedzie rerenderowany, dopoki sie nie zmieni jego wratosc


        this.state ={
                name: '',
                LastName: '',
                mail: '',
                Title: this.props.idOfMovie.title,
                Runtime: this.props.idOfMovie.runtime,
                date: this.props.date,
                seat: '',
                isReserved: true,
        }
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
      }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
                <div className='registerForm'>
                    <form onChange ={this.handleChange}>
                        <label htmlFor = 'name'><h3>Imię</h3> ></label>
                        <input type='text' id='FirstName' FirstName='FirstName' onChange={this.handleChange} required/>
                        <label htmlFor='LastName'><h3>Nazwisko</h3></label>
                        <input type='text' id='LastName' name='LastName' onChange={this.handleChange} required/>
                        <label htmlFor ='email'><h3>Email</h3></label>
                        <input type='email' id='email' name='mail' onChange={this.handleChange} required/>
                        <button type='submit'><div className='submit'/></button>
                    </form>
                </div>
        );
    }
}


 
