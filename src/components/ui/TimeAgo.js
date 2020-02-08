import  React from 'react';
import { ago } from '../../utils/TimeAgo';
import '../../stylesheets/TimeAgo.scss';

const TimeAgo = ({timeStamp}) =>
   <div className="timeAgo">
      {ago(timeStamp)}
   </div>

export default TimeAgo;