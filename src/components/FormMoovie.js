import React from 'react';
import axios from 'axios';


class FormEmployee extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',          
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

    onChange(e) {
    this.setState({[e.target.name]: e.target.value})
    
    }

    submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
          .then(res => res.data)
          .then(res => {
            alert(`vos informations ont bien été enregistrées`);
              })
              .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout du film`);
              });
            
    }

    render() {
        return (
            <div >
                <h1>Saisie d'un film</h1>

                <form onSubmit={this.submitForm} >
                  <fieldset className="FormFilm">
                    <legend>Film</legend>
                    <div className="form-data">
                      <label htmlFor="lastname">Titre</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.lastname}
                      />
                    </div>

                    <div className="form-data">
                      <label htmlFor="firstname">Poster</label>
                      <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.firstname}
                      />
                    </div>

                    <div className="textarea">
                      <label htmlFor="email">Commentaires</label>
                      <textarea
                        className="textBox"
                        type="text"
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                    </div>
                    <hr />
                    <div className="form-data">
                      <input type="submit" value="Envoyer" />
                    </div>
                  </fieldset>
                </form>
              </div>
              )
    }
}

export default FormEmployee;