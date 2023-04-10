import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const colorsList = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
]

class TeamMatches extends Component {
  state = {
    recentMatchesList: [],
    isLoading: true,
    bannerUrl: '',
    latestMatches: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchesData = await response.json()
    const teamBannerUrl = matchesData.team_banner_url
    const recentMatches = matchesData.recent_matches
    const latestMatchDetails = matchesData.latest_match_details
    // console.log(recentMatches)

    this.setState({
      recentMatchesList: recentMatches,
      bannerUrl: teamBannerUrl,
      latestMatches: latestMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {recentMatchesList, bannerUrl, latestMatches, isLoading} = this.state
    const randomIndex = Math.floor(Math.random() * colorsList.length)
    const randomColorName = colorsList[randomIndex]
    return (
      <div className={`teamMatches_Container ${randomColorName}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="banner_Container">
              <img src={bannerUrl} alt="team banner" className="bannerImage" />
            </div>
            <div className="latestMatches_container">
              <p className="latestMatches_heading">Latest Matches</p>
              <LatestMatch
                latestMatchesInfo={latestMatches}
                key={latestMatches.id}
              />
            </div>
            <ul className="matchCard_container">
              {recentMatchesList.map(eachMatch => (
                <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
