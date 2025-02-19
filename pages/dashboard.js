import DashboardLayout from '../components/layouts/DashboardLayout';

function DashboardPage() {
  return (
    <>
      <h1 className="mb-4">Dashboard</h1>
      <div className="row g-4">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="display-4">1,234</p>
            </div>
          </div>
        </div>
        {/* ... other dashboard cards ... */}
      </div>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;