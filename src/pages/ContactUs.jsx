import React, { useState } from 'react'

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.prevent.Default();
        if(!form.name || !form.email || !form.message){
            alert("Please fill all the fields");
            return;
        }
        setSubmitted(true);
        setForm({
            name:"",
            email: "",
            message: ""
        });
    }
  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Contact Us
      </h2>

      {submitted && (
        <div className="alert alert-success">
          Message sent successfully!
        </div>
      )}
      {submitted && (
        <div className="alert alert-success">
          Message sent successfully!
        </div>
      )}

      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Name
          </label>

          <input type="text" name="name" required className="form-control" value={form.name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email
          </label>

          <input type="email" name="email" required className="form-control" value={form.email} onChange={handleChange}  />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Message
          </label>

          <textarea name="message" className="form-control" required rows="5"  value={form.message} onChange={handleChange} />
        </div>

        <button className="btn btn-primary w-100">
          Send Message
        </button>

      </form>

    </div>
  )
}

export default ContactUs
