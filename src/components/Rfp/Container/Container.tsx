import React, { useState, Component } from 'react';
import Rfp from '../Rfp.model'
import Row from '../Row/Row'

import './Container.css';

interface IState {
  rfps: Rfp[]
}

const Container = (props: IState) => {

  const [rfps, setRfps] = useState(props.rfps);

  const duplicateFunction = (rfpId: String) => {
    const duplicate = rfps.find(rfp => rfp.ReferenceId.ReferenceIdNumber == rfpId);
    if (duplicate){
      setRfps(rfps.concat(duplicate));
    }
  }

  const deleteFunction = (rfpId: String) => {
    const deleteRfp = rfps.find(rfp => rfp.ReferenceId.ReferenceIdNumber == rfpId);
    if (deleteRfp){
      setRfps(rfps.splice(rfps.indexOf(deleteRfp) + 1));
    }
  }

  return (
    <table>
      <tbody>
        {rfps.map((rfp, i) => <Row rfp={rfp} duplicate={duplicateFunction} delete={deleteFunction} uniqueKey={i} ></Row>)}
      </tbody>
    </table>
  );
}

// class Container extends Component<Rfp[], IState> {

//   state = {
//     rfps: Object.values(this.props),
//   };

//   duplicateFunction = (rfpId: String) => {
//     console.log(rfpId);
//     const duplicate = this.state.rfps.find(rfp => rfp.ReferenceId.ReferenceIdNumber == rfpId);
//     if (duplicate){
//       this.setState(prevState => ({
//         rfps: [...prevState.rfps.concat(duplicate)]
//       }));
//     }
//   }

//   deleteFunction = (rfpId: String) => {
//     const deleteRfp = this.state.rfps.find(rfp => rfp.ReferenceId.ReferenceIdNumber == rfpId);
//     if (deleteRfp){
//       this.setState(prevState => ({
//         rfps: [...prevState.rfps.splice(this.state.rfps.indexOf(deleteRfp) + 1)]
//       }));
//     }
//   }

//   render(){
//     console.log(this.state.rfps);
//     return (
//       <table>
//         <tbody>
//           {this.state.rfps.map((rfp, i) => <Row rfp={rfp} duplicate={this.duplicateFunction} delete={this.deleteFunction} uniqueKey={i} ></Row>)}
//         </tbody>
//       </table>
//     );
//   }

// }

export default Container;
