import React, {Component} from 'react'

class MovieList extends Component {
  render(){
  	return (
    	<div>
      	{
          (this.props.profiles).map((profile) => {
          	const personName = this.props.users[profile.favoriteMovieID].name;
          	return(
          		<ul>
          			<li key={profile.id}>{personName}</li>
          		</ul>
          );
        })}
      	</div>
    )
  }

}

export default MovieList