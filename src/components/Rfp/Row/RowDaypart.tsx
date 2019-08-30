import React from 'react';

export default (dayparts: string[]) =>
  <td>{Object.values(dayparts).join(',')}</td>