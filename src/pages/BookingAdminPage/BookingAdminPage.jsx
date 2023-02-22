import React from 'react'

const BookingAdminPage = () => {
  return (
    <div className='manage-container'>
      <div className="top">
          <h2>Quản lý booking</h2>
      </div>
      <div className='main'>
            {/* <div className='main__form'>
                <form>
                  <div className="form-input">
                      <label>Employee Name</label>
                      <input type="text"  placeholder='enter employee name'/>
                  </div>
                  <div className="form-input">
                      <label>Position</label>
                      <select >
                        <option value="receptionist">Receptionist</option>
                        <option value="staff">Staff</option>
                        <option value="guard">Guard</option>
                        <option value="technical ">Technical</option>
                        <option value="manager">manager</option>
                      </select>
                  </div>
                  <div className="form-input">
                      <label>Employee Image</label>
                      <input type="text"  placeholder='enter employee image'/>
                  </div>
                  <div className="form-input">
                      <label>Date Of Birth</label>
                      <input type="text"placeholder='enter date of birth'/>
                  </div>
                  <div className='form-btn'>
                    <button>Submit</button>
                  </div>
                </form>
            </div> */}
            <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Name User</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Amount Paid</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                          <button className='edit-btn'>View</button>
                          <button className='delete-btn'>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </div>
  )
}

export default BookingAdminPage