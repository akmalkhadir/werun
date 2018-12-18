
export default class Api {

  getRunnerRuns = (id) =>
    fetch(`http://localhost:3001/api/v1/runners/${id}`)
      .then(resp => resp.json())

  getAllRuns = () =>
    fetch(`http://localhost:3001/api/v1/runs`)
      .then(resp => resp.json())
}
