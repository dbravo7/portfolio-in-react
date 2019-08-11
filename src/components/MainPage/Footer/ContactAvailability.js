import React from 'react'; 
import { Link } from 'react-router-dom'; 

const ContactAvailability = () => {
  return (
    <section class="contact_info">
      <Link name="contact"></Link>
      <header class="email">
        <i class='far fa-envelope'></i>
        <h3 class="email_h3">Email</h3>
        <a href="mailto: dbravo7@yahoo.com">dbravo7@yahoo.com</a>
      </header>
      <div class="availability">
        <i class='far fa-calendar-alt'></i>
        <header>
          <h3>Availability</h3>
        </header>
        <table class="availability_list">
          <tr>
            <td>Full time</td>
            <td>Part-time</td>
          </tr>
          <tr>
            <td>Contract</td>
            <td>Freelance</td>
          </tr>
          <tr>
            <td>Onsite</td>
            <td>Remote</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default ContactAvailability; 