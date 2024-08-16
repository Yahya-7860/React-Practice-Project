import React from 'react'
import '../CSS files/Dashboard.css'
function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-tables">
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Yahya</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Shamin</td>
                            <td>Inactive</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ansari</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>

                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Manager</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Ansari</td>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <td>Mobile App</td>
                            <td>Shamin</td>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <td>Data Migration</td>
                            <td>Yahya</td>
                            <td>2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard