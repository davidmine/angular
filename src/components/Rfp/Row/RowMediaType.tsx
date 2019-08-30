import React from 'react';
import { MediaType } from '../../../shared/enum';

export default (props: { mediaTypes: MediaType[] }) =>
  <td>{Object.values(props.mediaTypes).map(mt => MediaType[mt]).join(',')}</td>