// import { boxShadow } from 'html2canvas/dist/types/css/property-descriptors/box-shadow'
import React from 'react'
import form from './form.css'
import { click } from '@testing-library/user-event/dist/click'


export default function Form() {
    return (
        <div className='form1' >``
            <div className="container">
                <h1 className="mt-4 mb-4 heading">Resume Builder</h1>

                {/* <!-- Personal Information --> */}
                <form class="form">
                    <h3 className="mt-4">Personal Information</h3>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text" className="form-control" id="phone" required />
                    </div>

                    {/* <!-- Education --> */}
                    <h3 className="mt-4">Education</h3>
                    <div className="form-group">
                        <label for="university">University:</label>
                        <input type="text" className="form-control" id="university" required />
                    </div>
                    <div className="form-group">
                        <label for="degree">Degree:</label>
                        <input type="text" className="form-control" id="degree" required />
                    </div>
                    <div className="form-group">
                        <label for="year">Year of Graduation:</label>
                        <input type="text" className="form-control" id="year" required />
                    </div>

                    {/* <!-- Work Experience --> */}
                    <h3 className="mt-4">Work Experience</h3>
                    <div className="form-group">
                        <label for="company">Company:</label>
                        <input type="text" className="form-control" id="company" required />
                    </div>
                    <div className="form-group">
                        <label for="position">Position:</label>
                        <input type="text" className="form-control" id="position" required />
                    </div>
                    <div className="form-group">
                        <label for="duration">Duration:</label>
                        <input type="text" className="form-control" id="duration" required />
                    </div>

                    <button type="submit"  className="btn btn-primary mt-4">Create Resume</button>
                </form>
            </div>
        </div>
    )
}
