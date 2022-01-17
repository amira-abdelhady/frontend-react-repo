import React from "react";

class Footer extends React.Component {
  render() {
    return  (
     < div>
      <div class="w3-section">
      <label><b>Email</b></label>
      <input class="w3-input w3-border" type="text" required name="Email" />
     </div>
    <div class="w3-section">
      <label><b>Message</b></label>
      <input class="w3-input w3-border" required name="Message" />
    </div>
     </div>
    )
  }
}

export default Footer;
