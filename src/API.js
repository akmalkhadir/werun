export default class Api {
  static getRunnerRuns = id =>
    fetch(`https://werun-api-eu.herokuapp.com/api/v1/runners/${id}`).then(
      resp => resp.json()
    )

  static getAllRuns = () =>
    fetch(`https://werun-api-eu.herokuapp.com/api/v1/runs`).then(resp =>
      resp.json()
    )

  static getARun = id =>
    fetch(`https://werun-api-eu.herokuapp.com/api/v1/runs/${id}`).then(resp =>
      resp.json()
    )

  static createNewRun = data =>
    fetch(`https://werun-api-eu.herokuapp.com/api/v1/runs`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  // .then(response => console.log('Success:', response))
  // .catch(error => console.error('Error:', error))

  static joinARun = userAndRunId =>
    fetch(`https://werun-api-eu.herokuapp.com/api/v1/runners_runs/`, {
      method: 'POST',
      body: JSON.stringify(userAndRunId),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error))

  static unJoinARun = userAndRunId =>
    fetch(`https://werun-api-eu.herokuapp.com/api/v1/runners_runs/`, {
      method: 'DELETE',
      body: JSON.stringify(userAndRunId),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error))
}
