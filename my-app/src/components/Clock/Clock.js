import { useEffect } from 'react';
import { useState } from 'react';
import { Component } from 'react';

// export default class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       options: {
//         format: 'HH:mm:ss',
//       },
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     this._interval = setInterval(() => {
//       // Object.assign() / shallow merge
//       this.setState({
//         options: {
//           delay: 1000,
//         },
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     // dans un composant stateful on manipule les props via this.props
//     return <div className="Clock">{this.state.now.toLocaleTimeString()}</div>;
//   }
// }

// forme d'un state (objet) si composant sous forme de classe
// {
//   format: 'HH:mm:ss',
//   now: new Date(),
// }

// forme d'un state (tableau) avec le hook useState
// [
//   'HH:mm:ss',
//   new Date(),
// ]

// export default function Clock() {
//   //    ['HH:m', () => {} ]
//   const [format, setFormat] = useState('HH:mm:ss');
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {}) // componentDidMount + componentDidUpdate
//   useEffect(() => {}, []); // componentDidMount
//   useEffect(() => {}, [format]); // componentDidMount + componentDidUpdate (si format change)

//   useEffect(() => {
//     return () => {}; // componentWillUnmount + componentWillUpdate
//   }) // componentDidMount + componentDidUpdate
//   useEffect(() => {
//     return () => {}; // componentWillUnmount
//   }, []); // componentDidMount
//   useEffect(() => {
//     return () => {}; // componentWillUnmount + componentWillUpdate (si format change)
//   }, [format]); // componentDidMount + componentDidUpdate (si format change)

//   useEffect(() => {
//     const _interval = setInterval(() => {
//       setNow(new Date());
//     }, 1000);
//     return () => {
//       clearInterval(_interval);
//     };
//   }, []);

//   return <div className="Clock">{now.toLocaleTimeString()}</div>;
// }

function useNow() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const _interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(_interval);
    };
  }, []);

  return now;
}

export default function Clock() {
  // console.log('Clock renders');

  const now = useNow();

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}
