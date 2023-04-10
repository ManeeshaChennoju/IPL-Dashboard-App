import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamCardDetails} = this.props
    const {name, teamImageUrl, id} = teamCardDetails
    return (
      <Link to={`/team-matches/${id}`} className="link_item_Card">
        <li className="card_container">
          <div className="imgAndName">
            <img src={teamImageUrl} alt={name} className="card_Images" />
            <p className="names">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
