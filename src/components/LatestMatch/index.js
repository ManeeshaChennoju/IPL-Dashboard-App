import './index.css'

const LatestMatch = props => {
  const {latestMatchesInfo} = props
  const resultStatus = latestMatchesInfo.result
  const Umpires = latestMatchesInfo.umpires
  const manOfTheMatch = latestMatchesInfo.man_of_the_match
  const DateOfMatch = latestMatchesInfo.date
  const Venue = latestMatchesInfo.venue
  const competingTeam = latestMatchesInfo.competing_team
  const competingTeamLogo = latestMatchesInfo.competing_team_logo
  const firstInnings = latestMatchesInfo.first_innings
  const secondInnings = latestMatchesInfo.second_innings

  return (
    <ul className="latestMatch_container">
      <li className="first_container">
        <p className="competingName">{competingTeam}</p>
        <p className="items">{DateOfMatch}</p>
        <p className="items">{Venue}</p>
        <p className="items">{resultStatus}</p>
      </li>
      <li className="image_container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingImageLogo"
        />
      </li>
      <li className="second_container">
        <p className="headings">First Innings</p>
        <p className="items">{firstInnings}</p>

        <p className="headings">Second Innings</p>
        <p className="items">{secondInnings}</p>

        <p className="headings">Man Of The Match</p>
        <p className="items">{manOfTheMatch}</p>

        <p className="headings">Umpires</p>
        <p className="items">{Umpires}</p>
      </li>
    </ul>
  )
}

export default LatestMatch
