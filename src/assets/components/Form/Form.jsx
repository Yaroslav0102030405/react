import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onHangleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.log('Такого поля не має');
    }
  };

  const reset = () => {
    setName('');
    setPassword('');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(name, password);

    reset();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          Имя
          <input
            name="name"
            type="text"
            value={name}
            onChange={onHangleChange}
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={onHangleChange}
          />
        </label>

        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default Form;

// class Form extends React.Component {
//   state = {
//     name: '',
//     password: '',
//     experience: 'junior',
//     licence: false,
//   };

//   hangleChange = (e) => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   hangleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   handleLicenceChange = (e) => {
//     this.setState({ licence: e.currentTarget.checked });
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       password: '',
//       experience: 'junior',
//       licence: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.hangleSubmit}>
//           <label>
//             Имя
//             <input
//               name="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.hangleChange}
//             />
//           </label>
//           <label>
//             Пароль
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.hangleChange}
//             />
//           </label>

//           <p>Ваш уровень:</p>
//           <label>
//             <input
//               type="radio"
//               name="experience"
//               value="junior"
//               onChange={this.hangleChange}
//               checked={this.state.experience === 'junior'}
//             />
//             Junior
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="experience"
//               value="middle"
//               onChange={this.hangleChange}
//               checked={this.state.experience === 'middle'}
//             />
//             Middle
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="experience"
//               value="senior"
//               onChange={this.hangleChange}
//               checked={this.state.experience === 'senior'}
//             />
//             Senior
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="licence"
//               checked={this.state.licence}
//               onChange={this.handleLicenceChange}
//             />
//             Согласен с условиями
//           </label>

//           <button type="submit" disabled={!this.state.licence}>
//             Отправить
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;
