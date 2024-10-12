import { useState } from 'react';
import { initialTravelPlan, TravelPlanType } from './places9';


function PlaceTree(
    { id, placesById }:
        { id: number, placesById: TravelPlanType }
) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree
                            key={childId}
                            id={childId}
                            placesById={placesById}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const planetIds = root.childIds;
    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        placesById={plan}
                    />
                ))}
            </ol>
        </>
    );
}
