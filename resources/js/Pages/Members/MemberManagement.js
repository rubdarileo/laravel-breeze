import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

export default function MemberManagement(props) {
  const { errors } = usePage().props
  const [openTab, setOpenTab] = React.useState(1);

  const [values, setValues] = useState({
    title: "",
    last_name: "",
    union_status: "",
    join_date: "",
    first_name: "",
    sick_plan: "",
    retire_date: "",
    suffix: "",
    iaff_benefits: "",
    uniaff_dues: "",
    address_1: "",
    status: "",
    last_worked: "",
    address_2: "",
    start_date: "",
    end_date: "",
    zip_code: "",
    state: "",
    social_security: "",
    employee_number: "",
    city: "",
    iaff_member: "",
  })

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.id]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/api/members', values)
  }

  return (
      <Authenticated
          auth={props.auth}
          errors={props.errors}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Member Management</h2>}
      >
        <Head title="Member Management" />
        <div class="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-gray-600"
                      : "text-black-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> Member
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-gray-600"
                      : "text-black-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <i className="fas fa-cog text-base mr-1"></i>  Personal
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-gray-600"
                      : "text-black-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i>  Job Info
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-gray-600"
                      : "text-black-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i>  Web
                </a>
              </li>
            </ul>
            <div className="bg-gray-200 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="Title">Title:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="title" value={values.title} onChange={handleChange} />
                            {errors.title && <div>{errors.title}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="last_name">Last name:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="last_name" value={values.last_name} onChange={handleChange} />
                            {errors.last_name && <div>{errors.last_name}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="union_status">Union Status:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="union_status" value={values.union_status} onChange={handleChange} />
                            {errors.union_status && <div>{errors.union_status}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="join_date">Join Date:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="join_date" value={values.join_date} onChange={handleChange} />
                            {errors.join_date && <div>{errors.join_date}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="first_name">First name:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="first_name" value={values.first_name} onChange={handleChange} />
                            {errors.first_name && <div>{errors.first_name}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="middle">Middle:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="middle" value={values.middle} onChange={handleChange} />
                            {errors.middle && <div>{errors.middle}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="sick_plan">Sick Plan:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="sick_plan" value={values.sick_plan} onChange={handleChange} />
                            {errors.sick_plan && <div>{errors.sick_plan}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="retire_date">Retire Date:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="retire_date" value={values.retire_date} onChange={handleChange} />
                            {errors.retire_date && <div>{errors.retire_date}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="suffix">Suffix:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="suffix" value={values.suffix} onChange={handleChange} />
                            {errors.suffix && <div>{errors.suffix}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="iaff_benefits">IAFF Benefits:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="iaff_benefits" value={values.iaff_benefits} onChange={handleChange} />
                            {errors.iaff_benefits && <div>{errors.iaff_benefits}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="uniaff_dues">Uniaff Dues:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="uniaff_dues" value={values.uniaff_dues} onChange={handleChange} />
                            {errors.uniaff_dues && <div>{errors.uniaff_dues}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="address_1">Address 1:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="address_1" value={values.address_1} onChange={handleChange} />
                            {errors.address_1 && <div>{errors.address_1}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="status">Status:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="status" value={values.status} onChange={handleChange} />
                            {errors.status && <div>{errors.status}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="last_worked">Last Worked:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="last_worked" value={values.last_worked} onChange={handleChange} />
                            {errors.last_worked && <div>{errors.last_worked}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="address_2">Address 2:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="address_2" value={values.address_2} onChange={handleChange} />
                            {errors.address_2 && <div>{errors.address_2}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="start_date">Start Date:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="start_date" value={values.start_date} onChange={handleChange} />
                            {errors.start_date && <div>{errors.start_date}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="end_date">End Date:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="end_date" value={values.end_date} onChange={handleChange} />
                            {errors.end_date && <div>{errors.end_date}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="zip_code">Zip Code:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="zip_code" value={values.zip_code} onChange={handleChange} />
                            {errors.zip_code && <div>{errors.zip_code}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="state">State:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="state" value={values.state} onChange={handleChange} />
                            {errors.state && <div>{errors.state}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="social_security">Social Security:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="social_security" value={values.social_security} onChange={handleChange} />
                            {errors.social_security && <div>{errors.social_security}</div>}
                          </div>
                          <div className="mb-3 pt-0">
                            <label htmlFor="employee_number">Employee Number:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="employee_number" value={values.employee_number} onChange={handleChange} />
                            {errors.employee_number && <div>{errors.employee_number}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="city">City:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="city" value={values.city} onChange={handleChange} />
                            {errors.city && <div>{errors.city}</div>}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <label htmlFor="iaff_member">IAFF Member:</label>
                            <input className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" id="iaff_member" value={values.iaff_member} onChange={handleChange} />
                            {errors.iaff_member && <div>{errors.iaff_member}</div>}
                          </div>
                        </div>
                      </div>
                      
                      <button className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                        type="button" 
                        type="submit">
                          Submit
                      </button>
                    </form>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <p>
                      
                    </p>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <p>
                     
                    </p>
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <p>
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="container mx-auto ">
          
        </div>
    </Authenticated>
  )
}