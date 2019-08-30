import React from 'react';
import './Detail.css';
import RfpService from '../Rfp.service';
import { TransactionType, ReferenceType, ContactType } from '../../../shared/enum';
import { RouteComponentProps } from 'react-router';

// interface IDetailRouterProps {
//   rfpId: string
// }

export default (props: RouteComponentProps<{rfpId: string}>) => {
  const rfp = new RfpService().getRfps().find(rfp => rfp.ReferenceId.ReferenceIdNumber == props.match.params.rfpId)

  if (rfp){
    return (
      <div>
        <table>
          <tbody>
            <tr><td colSpan={2}><h3>TransactionHeader</h3></td></tr>
            <tr>
              <td>TipVersion</td>
              <td>{ rfp.TransactionHeader.TipVersion }</td>
            </tr>
            <tr>
              <td>TransactionNumber</td>
              <td>{ rfp.TransactionHeader.TransactionNumber }</td>
            </tr>
            <tr>
              <td>TransactionType</td>
              <td>{ TransactionType[rfp.TransactionHeader.TransactionType] }</td>
            </tr>
            <tr>
              <td>SourceId</td>
              <td>{ rfp.TransactionHeader.SourceId }</td>
            </tr>
            <tr>
              <td>SourceName</td>
              <td>{ rfp.TransactionHeader.SourceName }</td>
            </tr>
            <tr>
              <td>TimeStamp</td>
              <td>{ rfp.TransactionHeader.TimeStamp.toDateString() }</td>
            </tr>
  
            <tr><td colSpan={2}>&nbsp;</td></tr>
            <tr><td colSpan={2}><h3>ReferenceId</h3></td></tr>
            <tr>
              <td>ReferenceSourceName</td>
              <td>{ rfp.ReferenceId.ReferenceSourceName }</td>
            </tr>
            <tr>
              <td>ReferenceSourceId</td>
              <td>{ rfp.ReferenceId.ReferenceSourceId }</td>
            </tr>
            <tr>
              <td>ReferenceSourceLookup</td>
              <td>{ rfp.ReferenceId.ReferenceSourceLookup }</td>
            </tr>
            <tr>
              <td>ReferenceType</td>
              <td>{ ReferenceType[rfp.ReferenceId.ReferenceType] }</td>
            </tr>
            <tr>
              <td>ReferenceVersionId</td>
              <td>{ rfp.ReferenceId.ReferenceVersionId }</td>
            </tr>
            <tr>
              <td>ReferenceName</td>
              <td>{ rfp.ReferenceId.ReferenceName }</td>
            </tr>
  
            <tr><td colSpan={2}>&nbsp;</td></tr>
            <tr><td colSpan={2}><h3>Advertiser</h3></td></tr>
            <tr>
              <td>AdvertiserId</td>
              <td>{ rfp.Advertiser.AdvertiserId }</td>
            </tr>
            <tr>
              <td>AdvertiserName</td>
              <td>{ rfp.Advertiser.AdvertiserName }</td>
            </tr>
            <tr>
              <td>AdvertiserReference</td>
              <td>{ rfp.Advertiser.AdvertiserReference }</td>
            </tr>
  
            <tr><td colSpan={2}>&nbsp;</td></tr>
            <tr><td colSpan={2}><h3>Contact</h3></td></tr>
            <tr>
              <td>Type</td>
              <td>{ ContactType[rfp.Contact.Type] }</td>
            </tr>
            <tr>
              <td>ReferenceSourceName</td>
              <td>{ rfp.Contact.ReferenceSourceName }</td>
            </tr>
            <tr>
              <td>ContactFirstName</td>
              <td>{ rfp.Contact.ContactFirstName }</td>
            </tr>
            <tr>
              <td>ContactLastName</td>
              <td>{ rfp.Contact.ContactLastName }</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{ rfp.Contact.Email }</td>
            </tr>
            <tr>
              <td>EffectiveDate</td>
              <td>{ rfp.Contact.EffectiveDate.toDateString() }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return <div></div>
}