import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import DateInput from '@/Shared/DateInput';
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

  function handleDateChange(field, value) {
    setValues(values => ({
      ...values,
      [field]: value,
    }))
  }

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.id]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/api/memberdata', values)
  }

  return (
      <Authenticated
          auth={props.auth}
          errors={props.errors}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Member Management</h2>}
      >
        <Head title="Member Management" />
        <div className="container mx-auto">
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
                            <SelectInput
                              className="w-full"
                              label="Title"
                              name="title"
                              errors={errors.title}
                              value={values.title}
                              onChange={handleChange}
                            >
                              <option value=""></option>
                              <option value="CA">Canada</option>
                              <option value="US">United States</option>
                            </SelectInput>
                          </div>
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Last Name"
                              name="last_name"
                              errors={errors.last_name}
                              value={values.last_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <SelectInput
                              className="w-full"
                              label="Union Status:"
                              name="union_status"
                              errors={errors.union_status}
                              value={values.union_status}
                              onChange={handleChange}
                            >
                              <option value=""></option>
                              <option value="CA">Canada</option>
                              <option value="US">United States</option>
                            </SelectInput>
                          </div>
                          <div className="mb-3 pt-0">
                            <DateInput
                              className="w-full"
                              label="Join Date"
                              name="join_date"
                              selected={values.join_date}
                              errors={errors.join_date}
                              onChange={(date) => handleDateChange("join_date", date)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="First name:"
                              name="first_name"
                              errors={errors.first_name}
                              value={values.first_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Middle:"
                              name="middle"
                              errors={errors.middle}
                              value={values.middle}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <SelectInput
                              className="w-full"
                              label="Sick Plan:"
                              name="sick_plan"
                              errors={errors.sick_plan}
                              value={values.sick_plan}
                              onChange={handleChange}
                            >
                              <option value=""></option>
                              <option value="CA">Canada</option>
                              <option value="US">United States</option>
                            </SelectInput>
                          </div>
                          <div className="mb-3 pt-0">
                            <DateInput
                              className="w-full"
                              label="Retire Date:"
                              name="retire_date"
                              selected={values.retire_date}
                              errors={errors.retire_date}
                              onChange={(date) => handleDateChange("retire_date", date)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Suffix:"
                              name="suffix"
                              errors={errors.suffix}
                              value={values.suffix}
                              onChange={handleChange}
                            />
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
                            <TextInput
                              className="w-full"
                              label="Address 1:"
                              name="address_1"
                              errors={errors.address_1}
                              value={values.address_1}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <SelectInput
                              className="w-full"
                              label="Status:"
                              name="status"
                              errors={errors.status}
                              value={values.status}
                              onChange={handleChange}
                            >
                              <option value=""></option>
                              <option value="CA">Canada</option>
                              <option value="US">United States</option>
                            </SelectInput>
                          </div>
                          <div className="mb-3 pt-0">
                            <DateInput
                              className="w-full"
                              label="Last Worked:"
                              name="last_worked"
                              selected={values.last_worked}
                              errors={errors.last_worked}
                              onChange={(date) => handleDateChange("last_worked", date)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Address 2:"
                              name="address_2"
                              errors={errors.address_2}
                              value={values.address_2}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <DateInput
                              className="w-full"
                              label="Start Date:"
                              name="start_date"
                              selected={values.start_date}
                              errors={errors.start_date}
                              onChange={(date) => handleDateChange("start_date", date)}
                            />
                          </div>
                          <div className="mb-3 pt-0">
                            <DateInput
                              className="w-full"
                              label="End Date:"
                              name="end_date"
                              selected={values.end_date}
                              errors={errors.end_date}
                              onChange={(date) => handleDateChange("end_date", date)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Zip Code:"
                              name="zip_code"
                              errors={errors.zip_code}
                              value={values.zip_code}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="State:"
                              name="state"
                              errors={errors.state}
                              value={values.state}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Social Security:"
                              name="social_security"
                              errors={errors.social_security}
                              value={values.social_security}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Employee Number:"
                              name="employee_number"
                              errors={errors.employee_number}
                              value={values.employee_number}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="City:"
                              name="city"
                              errors={errors.city}
                              value={values.city}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="IAFF Member:"
                              name="iaff_member"
                              errors={errors.iaff_member}
                              value={values.iaff_member}
                              onChange={handleChange}
                            />
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
    </Authenticated>
  )
}