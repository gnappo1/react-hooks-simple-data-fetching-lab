import { useState, useEffect } from "react"
import DogCard from "./DogCard"
import toast, { Toaster } from "react-hot-toast";

function App() {
    const [dogData, setDogData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(
                    "https://dog.ceo/api/breeds/image/random"
                );
                const data = await resp.json()
                if (!resp.ok){
                    throw new Error(data.message)
                } else {
                    toast.success("Data fetched successfully")
                    setDogData(data);
                }
            } catch (error) {
                toast.error(error.message);
                
            }
        }
      fetchData();
    }, []);

    // if (!dogData) {
    //     return <p>Loading...</p>;
    // }

    return (
      <div>
        <Toaster />
        {dogData ? <DogCard url={dogData.message} /> : <p>Loading...</p>}
      </div>
    );
}

export default App;