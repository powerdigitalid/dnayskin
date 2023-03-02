import React from 'react'

export default function InputBooking() {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label>Text</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              id="date"

            />
          </div>

        </div>

      </form>
    </div>
  )
}
