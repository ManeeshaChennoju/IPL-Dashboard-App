import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

const appLogoUrl = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

class Home extends Component {
  state = {cardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const teamData = await response.json()
    const {teams} = teamData
    const updatedTeamData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({cardsList: updatedTeamData, isLoading: false})
  }

  render() {
    const {cardsList, isLoading} = this.state
    console.log('------------------------------')
    console.log(cardsList)
    return (
      <div className="home_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="dashBoard_container">
            <div className="pageLogoAndHeading">
              <img src={appLogoUrl} alt="ipl logo" className="app_logo" />
              <h1 className="app-heading ">IPL Dashboard</h1>
            </div>
            <ul className="teamUl_container">
              {cardsList.map(item => (
                <TeamCard teamCardDetails={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
