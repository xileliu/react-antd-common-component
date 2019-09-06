/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import CityPicker from 'src/city-picker';
interface Props {}
const Area: React.FC<Props> = props => {
  return (
    <Fragment>
      <CityPicker showArea={false} />
    </Fragment>
  );
};
export default Area;
