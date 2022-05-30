export const parentDummyData = {
  parentProfile: {
    parent_id: 10,
    children: [
      { child_id: 1, child_name: 'Mark' },
      { child_id: 2, child_name: 'Shelly' },
      { child_id: 3, child_name: 'John' },
    ],
    bio: '',
  },

  cart: [],

  children: [
    { parent_id: 0, user_id: 3, username: 'Joannsson', age: 7 },
    { parent_id: 1, user_id: 4, username: 'Jordansdaughter', age: 9 },
    { parent_id: 1, user_id: 5, username: 'Jordansson', age: 12 },
  ],

  enrollments: [
    { child_id: 0, course_id: 0, completed: false },
    { child_id: 0, course_id: 0, completed: false },
    { child_id: 0, course_id: 0, completed: false },
  ],

  inbox: [{ user_id: 0 }, { user_id: 3 }, { user_id: 8 }],

  messages: [
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Help with Homework?',
      read: true,
      message: 'I need the answers to the assignment please.',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: "What's my grade?",
      read: true,
      message: 'Hey Ms. Teacher can you tell me my grade?',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Going to need to cancel.',
      read: false,
      message: 'My child has to miss the class',
      inbox_id: 1,
      sender_id: 2,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Kid is sick',
      read: true,
      message: 'Can we get a refund for this class?',
      inbox_id: 2,
      sender_id: 3,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'When is class?',
      read: false,
      message: 'I noticed the time was funky and had to ask.',
      inbox_id: 1,
      sender_id: 5,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Is this a yoga course?',
      read: false,
      message: 'How is yoga and coding taught together?',
      inbox_id: 3,
      sender_id: 7,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Where is my achievement?',
      read: false,
      message: "my achievement didn't pop up when I did class.",
      inbox_id: 0,
      sender_id: 1,
    },
  ],
  bookings: {
    isFetching: false,
    bookings: [
      {
        child_id: 2,
        child_name: 'Shelly',
        schedule_id: 1,
        course_id: 1,
        instructor_id: 1,
        instructor_name: 'Test003',
        size: 15,
        subject: 'CS101',
        description: 'Computer Science fundamentals',
        prereqs: null,
        start_date: '2022-10-29T07:00:00.000Z',
        end_date: '2022-10-10T07:00:00.000Z',
        start_time: '17:00:00',
        end_time: '18:00:00',
        location: 'https://zoom.us/my/john123',
      },
      {
        child_id: 12,
        child_name: 'Joe',
        schedule_id: 2,
        course_id: 3,
        instructor_id: 2,
        instructor_name: 'Test006',
        size: 16,
        subject: 'JavaScriptB',
        description: 'Intermediate JavaScript.',
        prereqs: ['JavaScriptA'],
        start_date: '2021-12-15T07:00:00.000Z',
        end_date: '2022-10-11T07:00:00.000Z',
        start_time: '15:00:00',
        end_time: '16:00:00',
        location: 'https://zoom.us/my/john321',
      },
      {
        child_id: 13,
        child_name: 'Mark',
        schedule_id: 1,
        course_id: 1,
        instructor_id: 1,
        instructor_name: 'Test003',
        size: 15,
        subject: 'CS101',
        description: 'Computer Science fundamentals',
        prereqs: null,
        start_date: '2021-12-22T07:00:00.000Z', // mm-dd-yyyy
        end_date: '2022-10-10T07:00:00.000Z',
        start_time: '17:00:00',
        end_time: '18:00:00',
        location: 'https://zoom.us/my/john123',
      },
      {
        child_id: 13,
        child_name: 'Mark',
        schedule_id: 2,
        course_id: 3,
        instructor_id: 2,
        instructor_name: 'Test006',
        size: 16,
        subject: 'JavaScriptB',
        description: 'Intermediate JavaScript.',
        prereqs: ['JavaScriptA'],
        start_date: '2021-12-20T07:00:00.000Z',
        end_date: '2022-10-11T07:00:00.000Z',
        start_time: '15:00:00',
        end_time: '16:00:00',
        location: 'https://zoom.us/my/john321',
      },
      {
        child_id: 13,
        child_name: 'Mark',
        schedule_id: 2,
        course_id: 3,
        instructor_id: 2,
        instructor_name: 'Test006',
        size: 9,
        subject: 'Python 102',
        description: 'Intermediate Python.',
        prereqs: ['Python 101'],
        start_date: '2022-11-29T07:00:00.000Z',
        end_date: '2022-12-11T07:00:00.000Z',
        start_time: '15:00:00',
        end_time: '16:00:00',
        location: 'https://zoom.us/my/john321',
      },
    ],
    error: '',
  },

  availableCourses: [
    {
      schedule_id: 1,
      course_id: 1,
      instructor_id: 1,
      instructor_name: 'Test003',
      size: 15,
      subject: 'CS101',
      description: 'Computer Science fundamentals',
      prereqs: [],
      start_date: '2021-12-10T07:00:00.000Z',
      end_date: '2022-10-10T07:00:00.000Z',
      start_time: '17:00:00',
      end_time: '18:00:00',
      location: 'https://zoom.us/my/john123',
      price: 1000,
    },
    {
      schedule_id: 3,
      course_id: 5,
      instructor_id: 10,
      instructor_name: 'Mark',
      size: 20,
      subject: 'Fundamental Python',
      description: 'Computer Science fundamentals',
      prereqs: ['JavaScript', 'HTML', 'CSS'],
      start_date: '2021-12-10T07:00:00.000Z',
      end_date: '2022-10-10T07:00:00.000Z',
      start_time: '17:00:00',
      end_time: '18:00:00',
      location: 'https://zoom.us/my/john123',
      price: 500,
    },
    {
      schedule_id: 2,
      course_id: 3,
      instructor_id: 2,
      instructor_name: 'Test006',
      size: 16,
      subject: 'JavaScriptB',
      description: 'Intermediate JavaScript.',
      prereqs: ['JavaScriptA'],
      start_date: '2021-12-05T07:00:00.000Z',
      end_date: '2022-10-11T07:00:00.000Z',
      start_time: '15:00:00',
      end_time: '16:00:00',
      location: 'https://zoom.us/my/john321',
      price: 1200,
    },
  ],
  newsfeed: [],
};