import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import DateInput from '@/Shared/DateInput';
import React, { useState } from 'react'

export default function MemberAdd(props) {
  const { errors } = usePage().props
  const [openTab, setOpenTab] = React.useState(1);

  const [values, setValues] = useState({
    title: "",
    last_name: "",
    status: "",
    first_name: "",
    middle: "",
    suffix: "",
    birth_date: "",
    join_date: "",
    address_1: "",
    gender: "",
    ethnicity: "",
    address_2: "",
    original_hire: "",
    badge: "",
    zip_code: "",
    state: "",
    position: "",
    city: "",
    sick_plan: "",
    social_security: "",
    employee_number: "",
    iaff_member: "",
    home_phone: "",
    cell_phone: "",
    email: "",
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
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Member Add</h2>}
      >
        <Head title="Member Add" />
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
            <div className="bg-gray-200 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className="block">
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
                          <label>Demographics</label>
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
                            <DateInput
                              className="w-full"
                              label="Birth Date:"
                              name="birth_date"
                              selected={values.birth_date}
                              errors={errors.birth_date}
                              onChange={(date) => handleDateChange("birth_date", date)}
                            />
                          </div>
                          <div className="mb-3 pt-0">
                            <DateInput
                              className="w-full"
                              label="Join Date:"
                              name="join_date"
                              selected={values.join_date}
                              errors={errors.join_date}
                              onChange={(date) => handleDateChange("join_date", date)}
                            />
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
                              label="Gender:"
                              name="gender"
                              errors={errors.gender}
                              value={values.gender}
                              onChange={handleChange}
                            >
                              <option value=""></option>
                              <option value="CA">Canada</option>
                              <option value="US">United States</option>
                            </SelectInput>
                          </div>
                          <div className="mb-3 pt-0">
                            <SelectInput
                              className="w-full"
                              label="Ethnicity:"
                              name="race"
                              errors={errors.race}
                              value={values.race}
                              onChange={handleChange}
                            >
                              <option value=""></option>
                              <option value="CA">Canada</option>
                              <option value="US">United States</option>
                            </SelectInput>
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
                              label="Original Hire:"
                              name="original_hire"
                              selected={values.original_hire}
                              errors={errors.original_hire}
                              onChange={(date) => handleDateChange("original_hire", date)}
                            />
                          </div>
                          <div className="mb-3 pt-0">
                            <TextInput
                              className="w-full"
                              label="Badge:"
                              name="badge"
                              value={values.address_2}
                              errors={errors.badge}
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
                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-3 pt-0">
                                <SelectInput
                                    className="w-full"
                                    label="Position:"
                                    name="position"
                                    errors={errors.position}
                                    value={values.position}
                                    onChange={handleChange}
                                >
                                    <option value=""></option>
                                    <option value="CA">Canada</option>
                                    <option value="US">United States</option>
                                </SelectInput>
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
                        <div className="grid grid-cols-1 gap-4">
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
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
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
                        <div className="grid grid-cols-2 gap-4">
                          <label>Contact Details</label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-3 pt-0">
                                <TextInput
                                className="w-full"
                                label="Home Phone:"
                                name="home_phone"
                                errors={errors.home_phone}
                                value={values.home_phone}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <TextInput
                                className="w-full"
                                label="Cell Phone:"
                                name="cell_phone"
                                errors={errors.cell_phone}
                                value={values.cell_phone}
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-3 pt-0">
                               
                            </div>
                            <div className="mb-3 pt-0">
                               
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-3 pt-0">
                                <TextInput
                                className="w-full"
                                label="Email Address:"
                                name="email"
                                errors={errors.email}
                                value={values.email}
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
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </Authenticated>
  )
}