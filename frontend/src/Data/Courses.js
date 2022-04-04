const courses = [
  {
    _id: '1',
    name: 'React Masterclass',
    imageUrl: '/images/react.jpg',
    videoUrl: '',
    description: 'Build real world project from scratch',
    category: 'Frontend',
    price: 999,
    rating: 4.5,
    numReviews: 4,
    language: 'english',
    content: [
      {
        _id: '1a',
        sectionTitle: 'Basics of Web',
        videos: [
          {
            _id: '1a1',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1a2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1b',
        sectionTitle: 'Frontend Basics',
        videos: [
          {
            _id: '1b1',
            name: 'Advanced Html5/Css3 ',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1b2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1c',
        sectionTitle: 'Mastering React.js',
        videos: [
          {
            _id: '1c1',
            name: 'react 101',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1c2',
            name: 'Lazy Loading',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1d',
        sectionTitle: 'Advanced Node.js, MongoDB & Grqphql Apis',
        videos: [
          {
            _id: '1d1',
            name: 'Node  Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1d2',
            name: 'mongodb Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    _id: '2',
    name: 'Fullstack Development',
    imageUrl: '/images/react.jpg',
    videoUrl: '',
    description: 'Master of all trades',
    category: 'Fullstack',
    price: 499,
    rating: 4.0,
    numReviews: 14,
    language: 'english',
    content: [
      {
        _id: '1a',
        sectionTitle: 'Basics of Web',
        videos: [
          {
            _id: '1a1',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1a2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1b',
        sectionTitle: 'Frontend Basics',
        videos: [
          {
            _id: '1b1',
            name: 'Advanced Html5/Css3 ',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1b2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1c',
        sectionTitle: 'Mastering React.js',
        videos: [
          {
            _id: '1c1',
            name: 'react 101',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1c2',
            name: 'Lazy Loading',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1d',
        sectionTitle: 'Advanced Node.js, MongoDB & Grqphql Apis',
        videos: [
          {
            _id: '1d1',
            name: 'Node  Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1d2',
            name: 'mongodb Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    _id: '3',
    name: 'Digital Entrepreneurship',
    imageUrl: '/images/react.jpg',
    videoUrl: '',
    description: 'Become a Successful risk taker',
    category: 'Entrepreneurship',
    price: 499,
    rating: 3,
    numReviews: 3,
    language: 'english',
    content: [
      {
        _id: '1a',
        sectionTitle: 'Basics of Web',
        videos: [
          {
            _id: '1a1',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1a2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1b',
        sectionTitle: 'Frontend Basics',
        videos: [
          {
            _id: '1b1',
            name: 'Advanced Html5/Css3 ',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1b2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1c',
        sectionTitle: 'Mastering React.js',
        videos: [
          {
            _id: '1c1',
            name: 'react 101',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1c2',
            name: 'Lazy Loading',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1d',
        sectionTitle: 'Advanced Node.js, MongoDB & Grqphql Apis',
        videos: [
          {
            _id: '1d1',
            name: 'Node  Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1d2',
            name: 'mongodb Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    _id: '4',
    name: 'Flutter - Zero to Hero',
    imageUrl: '/images/react.jpg',
    videoUrl: '',
    description: 'The ultimate Mobile dev course',
    category: 'Mobile Developement',
    price: 999,
    rating: 5,
    numReviews: 3,
    language: 'english',
    content: [
      {
        _id: '1a',
        sectionTitle: 'Basics of Web',
        videos: [
          {
            _id: '1a1',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1a2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1b',
        sectionTitle: 'Frontend Basics',
        videos: [
          {
            _id: '1b1',
            name: 'Advanced Html5/Css3 ',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1b2',
            name: 'internet Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1c',
        sectionTitle: 'Mastering React.js',
        videos: [
          {
            _id: '1c1',
            name: 'react 101',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1c2',
            name: 'Lazy Loading',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
      {
        _id: '1d',
        sectionTitle: 'Advanced Node.js, MongoDB & Grqphql Apis',
        videos: [
          {
            _id: '1d1',
            name: 'Node  Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
          {
            _id: '1d2',
            name: 'mongodb Fundamentals',
            duration: '2.00',
            isCompleted: false,
          },
        ],
      },
    ],
  },
]

export default courses
