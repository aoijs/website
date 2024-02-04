import { useEffect, useState } from "react";

const Footer = () => {
    const [buildInfo, setBuildInfo] = useState({ buildDate: '', commitHash: '' });

    // figure out how to access client data and retrieve build info from github actions

    return (
        <div>
            <div>
                Last built: {buildInfo.buildDate || "N/A"} 
                Commit: {buildInfo.commitHash || "N/A"}
            </div>
            © {new Date().getFullYear()} Brought to you by <b>Akarui Development</b>
        </div>
    );
};

export default Footer;