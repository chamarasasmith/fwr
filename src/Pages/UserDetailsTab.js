
const UserDetailsTab = ({ userDetails }) => {


  return <div className="row g-4" style={{ paddingTop: 60 }}>
    <div className="col-sm-12">
      <form>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="row">

              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">ID</label>
                  <input type="text" className="form-control" value={userDetails?.id || ''} readOnly />
                </div>
              </div>


              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" value={userDetails?.firstname || ''} readOnly />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" value={userDetails?.lastname || ''} readOnly />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" value={userDetails?.username || ''} readOnly />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={userDetails?.email || ''} readOnly />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input type="text" className="form-control" value={userDetails?.Role?.rolename || ''} readOnly />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <input type="text" className="form-control" value={userDetails?.status || ''} readOnly />
                </div>
              </div>


              <div className="col-sm-4">
                <div className="mb-3">
                  <label className="form-label">Created Date</label>
                  <input type="text" className="form-control" value={userDetails?.createdAt || ''} readOnly />
                </div>
              </div>



            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </form>
    </div>
  </div>;
};


export default UserDetailsTab;
