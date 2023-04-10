import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props

  const resultStatus = matchCardDetails.result
  const competingTeam = matchCardDetails.competing_team
  const competingTeamLogo = matchCardDetails.competing_team_logo
  const matchStatus = matchCardDetails.match_status

  const statusClassName = matchStatus === 'Lost' ? 'LostStatus' : 'WinStatus'
  return (
    <li className="eachCardContainer">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logoImage"
      />
      <p className="team_name">{competingTeam}</p>
      <p className="result">{resultStatus}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
