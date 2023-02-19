export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-primary">
            <i className="far fa-user" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Total User</h4>
            </div>
            <div className="card-body">
              10
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-danger">
            <i className="fas fa-chalkboard-teacher" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Total Guru</h4>
            </div>
            <div className="card-body">
              42
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-warning">
            <i className="fas fa-school" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Total Lab</h4>
            </div>
            <div className="card-body">
              1,201
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}