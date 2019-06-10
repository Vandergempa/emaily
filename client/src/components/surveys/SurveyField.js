// SurveyField contains logic to render a single label and text input
import React from 'react'

export default ({ input, label, placeholder, meta: { active, error, touched } }) => {
  // When we don't want to give any name to the props, we just pass it down as ...props
  return (
    <div>
      <label className="label">{label}</label>
      {(active && error)
        ? <input {...input} className="invalid" />
        : <input {...input} placeholder={placeholder} />
      }
      <div>
        {(active && error) && <div id="snackbar" className="show">{(label !=="Recipient List" && label !=="Sender email") ? error : "Please provide (an) email address(es)"}</div>}
        {(touched && error) && <div className="red-text redtext">{(label !=="Recipient List" && label !=="Sender email") ? "Empty field" : error}</div>}
      </div>
    </div>
  )
}