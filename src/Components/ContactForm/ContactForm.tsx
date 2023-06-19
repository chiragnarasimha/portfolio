// import "./_contactForm.scss";

// import { useState } from "react";

// const ContactForm = () => {
//   const initialFormDetials = {
//     firstName: ``,
//     lastName: ``,
//     email: ``,
//     phone: ``,
//     message: ``,
//   };
//   const [formDetails, setFormDetails] = useState(initialFormDetials);
//   const [sendButtonText, setSendButtonText] = useState(`Send`);
//   const [sendStatus, setSendStatus] = useState({});
//   const handleSubmit = () => {
//     return 1;
//   };
//   const onFormUpdate = (fieldName: string, value: string) => {
//     setFormDetails({
//       ...formDetails,
//       [fieldName]: value,
//     });
//   };
//   return (
//     <section className="section" id="contactMeForm">
//       <div className="section__container">
//         <form onSubmit={handleSubmit} className="section__form">
//           <input
//             type="text"
//             value={formDetails.firstName}
//             placeholder="First Name"
//             onChange={(e) => onFormUpdate("firstName", e.target.value)}
//           />
//           <input
//             type="text"
//             value={formDetails.lastName}
//             placeholder="Last Name"
//             onChange={(e) => onFormUpdate("lastName", e.target.value)}
//           />
//           <input
//             type="email"
//             value={formDetails.email}
//             placeholder="Email Address"
//             onChange={(e) => onFormUpdate("email", e.target.value)}
//           />
//           <input
//             type="tel"
//             value={formDetails.phone}
//             placeholder="Phone No."
//             onChange={(e) => onFormUpdate("phone", e.target.value)}
//           />
//           <textarea
//             rows={6}
//             value={formDetails.message}
//             placeholder="Message"
//             onChange={(e) => onFormUpdate("message", e.target.value)}
//           ></textarea>
//           <button type="submit">
//             <span>{sendButtonText}</span>
//           </button>
//           {sendStatus.message && (
//             <p className={sendStatus.success === false ? "error" : "success"}>
//               {sendStatus.message}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
