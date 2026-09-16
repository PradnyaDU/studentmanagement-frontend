import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return users;
    return users.filter((user) =>
      [user.userName, user.role, ...(user.authorities || [])]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query)),
    );
  }, [searchTerm, users]);

  const adminCount = users.filter(
    (user) => user.role?.toUpperCase() === "ADMIN",
  ).length;
  const authorityCount = new Set(
    users.flatMap((user) => user.authorities || []),
  ).size;

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (requestError) {
      setError(
        "Could not load users. Check that Spring Boot is running and the users endpoint is accessible.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <main className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <section className="users-panel" aria-labelledby="page-title">
        <header className="panel-header">
          <div>
            <div className="brand-line">
              <span className="brand-mark">S</span>
              <p className="eyebrow">Student Management</p>
            </div>
            <h1 id="page-title">
              Meet your <span>community.</span>
            </h1>
            <p className="subtitle">
              A clear view of every user, role, and permission across your
              application.
            </p>
          </div>
          <button
            className="refresh-button"
            type="button"
            onClick={loadUsers}
            disabled={isLoading}
          >
            <span aria-hidden="true">&#8635;</span>
            {isLoading ? "Loading" : "Refresh"}
          </button>
        </header>

        <div className="dashboard-strip">
          <div className="metric metric-blue">
            <span className="metric-icon">U</span>
            <div>
              <strong>{users.length}</strong>
              <small>Total users</small>
            </div>
          </div>
          <div className="metric metric-violet">
            <span className="metric-icon">A</span>
            <div>
              <strong>{adminCount}</strong>
              <small>Administrators</small>
            </div>
          </div>
          <div className="metric metric-mint">
            <span className="metric-icon">&#10003;</span>
            <div>
              <strong>{authorityCount}</strong>
              <small>Permissions</small>
            </div>
          </div>
          <span className="status-pill">
            <span className="status-dot" />
            Live API
          </span>
        </div>

        {!isLoading && !error && users.length > 0 && (
          <div className="toolbar">
            <label className="search-box">
              <span aria-hidden="true">&#9906;</span>
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search name, role, or permission..."
                aria-label="Search users"
              />
            </label>
            <span className="result-count">
              Showing {filteredUsers.length} of {users.length}
            </span>
          </div>
        )}

        {isLoading && (
          <div className="status-message" role="status">
            <span className="loader" />
            <p>Loading users...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="error-message" role="alert">
            <span className="error-icon">!</span>
            <div>
              <strong>Unable to load users</strong>
              <p>{error}</p>
            </div>
            <button type="button" onClick={loadUsers}>
              Try again
            </button>
          </div>
        )}

        {!isLoading && !error && users.length === 0 && (
          <div className="status-message">
            <div className="empty-icon">U</div>
            <p>No users found in the database.</p>
          </div>
        )}

        {!isLoading &&
          !error &&
          users.length > 0 &&
          filteredUsers.length === 0 && (
            <div className="status-message">
              <div className="empty-icon">?</div>
              <p>No users match “{searchTerm}”.</p>
            </div>
          )}

        {!isLoading && !error && filteredUsers.length > 0 && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Role</th>
                  <th scope="col">Authorities</th>
                  <th scope="col">ID</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-cell">
                        <span className={`avatar avatar-${index % 4}`}>
                          {user.userName?.charAt(0).toUpperCase() || "?"}
                        </span>
                        <div>
                          <strong>{user.userName || "Unnamed user"}</strong>
                          <small>Application user</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`role-badge role-${user.role?.toLowerCase()}`}
                      >
                        {user.role || "Not assigned"}
                      </span>
                    </td>
                    <td>
                      <div className="authority-list">
                        {user.authorities?.length ? (
                          user.authorities.map((authority, index) => (
                            <span
                              className="authority"
                              key={`${authority}-${index}`}
                            >
                              {authority}
                            </span>
                          ))
                        ) : (
                          <span className="muted">No authorities</span>
                        )}
                      </div>
                    </td>
                    <td className="user-id">#{user.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
