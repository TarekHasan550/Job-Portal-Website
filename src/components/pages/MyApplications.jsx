import React from 'react'

export default function MyApplications() {
  return (
    <div className='min-h-[80vh] grid items-center'>
      <div className="overflow-x-auto">
        <table className="table table-md table-zebra">
          <thead className='text-xl'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody className='text-xl bg-blue-100'>
            {
              [1, 1, 1, 1, 1].map((i, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
