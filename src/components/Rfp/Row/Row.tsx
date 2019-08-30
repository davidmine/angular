import React from 'react';
import Rfp from '../Rfp.model';

import RowDaypart from './RowDaypart';
import RowMediaType from './RowMediaType';

import { TransactionType, ReferenceType } from '../../../shared/enum';
import { Link } from 'react-router-dom';


// to explicitly declare an interface, do the following
// interface IState {
//   rfp: Rfp,
//   duplicate: Function,
//   delete: Function
// }
// const Row = (props: IState) => {
const Row = (props: {
  rfp: Rfp,
  duplicate: Function,
  delete: Function,
  uniqueKey: number
}) => {
  const rfp = props.rfp;
  const daypart: string[] = rfp.DaypartPreferences ? rfp.DaypartPreferences : ["", ""];
  return (
    <tr key={props.uniqueKey}>
      <td>{TransactionType[rfp.TransactionHeader.TransactionType]}</td>
      <td>
        <span>{ReferenceType[rfp.ReferenceId.ReferenceType]} by {rfp.ReferenceId.ReferenceSourceName}</span>
      </td>
      <td>from {rfp.Advertiser.AdvertiserName}</td>
      <RowMediaType mediaTypes={rfp.MediaType}></RowMediaType>
      <td>{rfp.ReferenceId.ReferenceIdNumber}</td>
      <RowDaypart {...daypart}></RowDaypart>
      {/* <td><button onClick={() => props.duplicate(rfp.ReferenceId.ReferenceIdNumber)}>duplicate</button></td> */}
      <td><Link to={"rfp/" + rfp.ReferenceId.ReferenceIdNumber.toString()} >view</Link></td>
      <td><button onClick={() => props.delete(rfp.ReferenceId.ReferenceIdNumber)}>delete</button></td>
    </tr>
  )
}

export default Row;
