import React from "react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';




function SocialLinks(){
    return(
        <div>
            <a href="https://www.instagram.com/lirio.prataa?igsh=Z2Z4MDM4M2RlNDVs&utm_source=qr" className="ig">
                <FaInstagram />
            </a>
            <a href="https://chat.whatsapp.com/JjN53NoY9sWEON7VpUNPay" className="ig">
                <FaWhatsapp/>
            </a>
        </div>
    );
}
export default SocialLinks;
