import React, { Component } from 'react';


// CREACIÓN DE COMPONENTES CON FUNCIONES
// const SearchBar = () => {
//     return <input />
// }

// CREACIÓN DE COMPONENTES CON CON CLASES
class SearchBar extends Component{

    // Para inicializar el state de un componente debemos llamar al constructor
    // e declarar el estado inicial desde dentro de éste
    constructor(props){
        super(props)

        this.state = { term: ''};
    }

    render() {
        return(
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )

    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;


