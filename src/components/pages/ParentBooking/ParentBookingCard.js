import React from 'react';
import { Card, Button, Space } from 'antd';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import axiosWithAuth from '../../../utils/axiosWithAuth';

import { useOktaAuth } from '@okta/okta-react';

const ParentBookingCard = props => {
  console.log("props: ", props)
  const {
    child_name,
    subject,
    description,
    start_date,
    end_date,
    start_time,
    end_time,
    location,
    instructor_name,
    size,
    course_id,
  } = props.booking;

  // const { authState } = useOktaAuth();
  // const { idToken } = authState;
  // const handleClick = e => {
  //   axiosWithAuth(idToken)
  //     .post(
  //       '/children/1/enrollments', // TODO: Hook this request up to pass the ID of the parent/child involved once we have this data in state.
  //       { child_id: 1, class_id: course_id, completed: true }
  //     )
  //     .then(res => console.log(res)) // TODO: Let's perform some action with this result.
  //     .catch(err => console.log(`message: ${err.message}`));
  // };

  const data = [
    { title: 'student name', text: child_name },
    { title: 'course', text: subject },
    { title: 'description', text: description },
    { title: 'first day of class', text: dateConverter(start_date) },
    { title: 'last day of class', text: dateConverter(end_date) },
    {
      title: 'time',
      text: `${timeConverter(start_time)} - ${timeConverter(end_time)}`,
    },
    { title: 'location', text: location },
    { title: 'instructor', text: instructor_name },
    { title: 'class size', text: size },
  ];

  return (
    <Card title={subject} style={{ width: 280,}} hoverable="true" >     
      {data.map((itm, idx) => {
        return (
          <div key={idx}>
            {itm.title}: {itm.text}
          </div>
        );
      })} 
      <Button type="primary" style={{ background: "#006C72", color: "white" }} block> ADD </Button>       
    </Card>        
  
   
  );
};

export default ParentBookingCard;
