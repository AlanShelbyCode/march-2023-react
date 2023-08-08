import React, {useEffect, useState} from 'react';
import SpaceContainer from "../SpaceContainer/SpaceContainer";

const SpaceCopmonent = () => {

    const [flights, setFlights] = useState([]);
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => setFlights(flights))
    },[])

    return (
        <div>
            {flights
                .filter((item)=>item.launch_year !== '2020')
                .map((item) =>
                {
                    return(
                        <SpaceContainer
                        key={item.flight_number}
                        flight={item}
                        />

                    )
                })

            }

        </div>
    );
};

export default SpaceCopmonent;