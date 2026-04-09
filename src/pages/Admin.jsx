import { useEffect, useState } from "react";
import { getUsers, updateStatus, deleteUser } from "../api";
import "./Admin.css";

function Admin() {

  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = () => {
    getUsers().then((res) => setReports(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSolve = (id) => {
    updateStatus(id).then(() => loadData());
  };

  const handleDelete = (id) => {
    deleteUser(id).then(() => loadData());
  };

  const filtered = reports.filter(r =>
    r.name?.toLowerCase().includes(search.toLowerCase())
  );

  const total = reports.length;
  const pending = reports.filter(r => r.status === "Pending").length;
  const solved = reports.filter(r => r.status === "Solved").length;

  return (
    <div className="admin-container">

      <h1 className="admin-title">Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="stats-container">

        <div className="card total">
          <h2>Total</h2>
          <p>{total}</p>
        </div>

        <div className="card pending">
          <h2>Pending</h2>
          <p>{pending}</p>
        </div>

        <div className="card solved">
          <h2>Solved</h2>
          <p>{solved}</p>
        </div>

      </div>

      <table className="reports-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filtered.map((r) => (

            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.category}</td>
              <td>{r.location}</td>

              <td className={
                r.status === "Pending"
                  ? "status-pending"
                  : "status-solved"
              }>
                {r.status}
              </td>

              <td>

                {r.status === "Pending" && (
                  <button
                    className="solve-btn"
                    onClick={() => handleSolve(r.id)}
                  >
                    Solve
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(r.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Admin;