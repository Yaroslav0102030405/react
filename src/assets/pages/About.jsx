import AuthContext from '../context/Auth';

const About = () => {
  return (
    <AuthContext.Consumer>
      {({ name }) => (
        <form>
          <label>
            <input type="text" value={name} />
          </label>
        </form>
      )}
    </AuthContext.Consumer>
  );
};

export default About;
