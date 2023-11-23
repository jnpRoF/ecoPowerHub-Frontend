import { IoEyeOutline } from 'react-icons/io5'
import EachField from '../EachField/EachField'

const Display = () => {
    return (
        <form className="bg-white mx-auto w-4/5 h-screen">
            <h2 className="font-base">API Configuration - Live Mode</h2>
            <div className="flex flex-col space-y-4 mt-20">
                <EachField label="Group ID">
                    <span className="text-lg text-darkGrey">
                        <IoEyeOutline />
                    </span>
                </EachField>
                <EachField label="Live Secret Key">
                    <span className="text-lg text-darkGrey">
                        <IoEyeOutline />
                    </span>
                </EachField>
                <p className="text-ctaColor ml-[222px]">
                    Generate new secret key
                </p>
                <EachField label="Live Public Key">
                    <span className="text-lg text-darkGrey">
                        <IoEyeOutline />
                    </span>
                </EachField>
                <EachField label="Live Callback URL" />
                <EachField label="IP Whitelist" />
            </div>
            <div className="flex justify-end mt-8">
                <button className="bg-ctaColor text-white px-6 py-2 rounded-sm">
                    Save changes
                </button>
            </div>
        </form>
    )
}

export default Display

// const [energyProjects, setenergyProjects] = useState([]);

// useEffect(() => {
//   const fetchEnergyProjects = async () => {
//     let response = await axios.get(
//       "https://ecopowerhub-backend-production.up.railway.app/marketplace"
//     );
//     setenergyProjects(response.data);
//   };
//   fetchEnergyProjects();
//   console.log(energyProjects);
// }, []);
