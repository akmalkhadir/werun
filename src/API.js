export default class Api {
  getRunnerRuns = id =>
    fetch(`http://localhost:3001/api/v1/runners/${id}`).then(resp =>
      resp.json()
    )

  getAllRuns = () =>
    fetch(`http://localhost:3001/api/v1/runs`).then(resp => resp.json())

  static getARun = id =>
    fetch(`http://localhost:3001/api/v1/runs/${id}`).then(resp => resp.json())

  createNewRun = data =>
    fetch(`http://localhost:3001/api/v1/runs`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error))

  static joinARun = userAndRunId =>
    fetch(`http://localhost:3001/api/v1/runners_runs/`, {
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
    fetch(`http://localhost:3001/api/v1/runners_runs/`, {
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
