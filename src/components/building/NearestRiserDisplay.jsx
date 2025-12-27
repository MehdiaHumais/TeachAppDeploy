import React from 'react';
import Button from '../ui/Button';

const NearestRiserDisplay = ({ riserInfo }) => {
  const { onCurrentFloor, above, below } = riserInfo;

  return (
    <div className="space-y-3">
      {/* Risers on the current floor */}
      {onCurrentFloor && onCurrentFloor.length > 0 && (
        <div>
          <strong>Risers on Current Floor:</strong>
          <div className="mt-1 space-y-1">
            {onCurrentFloor.map((riser, index) => (
              <div key={index}>
                {riser.number}: Same floor
                <br />
                <small>{riser.locationDescription}</small>
                <br />
                <Button variant="outline" size="sm" className="mt-1">View Riser Details</Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nearest riser above */}
      {above ? (
        <div>
          <strong>Nearest Riser Above:</strong> {above.number} ({above.distance} floor{above.distance > 1 ? 's' : ''} above)
          <br />
          <small>{above.locationDescription}</small>
          <br />
          <Button variant="outline" size="sm" className="mt-1">View Riser Details</Button>
        </div>
      ) : (
        <p>No riser above.</p>
      )}

      {/* Nearest riser below */}
      {below ? (
        <div>
          <strong>Nearest Riser Below:</strong> {below.number} ({below.distance} floor{below.distance > 1 ? 's' : ''} below)
          <br />
          <small>{below.locationDescription}</small>
          <br />
          <Button variant="outline" size="sm" className="mt-1">View Riser Details</Button>
        </div>
      ) : (
        <p>No riser below.</p>
      )}
    </div>
  );
};

export default NearestRiserDisplay;