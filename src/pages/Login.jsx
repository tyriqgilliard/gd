import styled from "styled-components";
import { mobile } from "../responsive";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";
import FormInput from "../components/FormInput";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const MenuItem = styled.div``;

const Logo = ({ to }) => {
  return (
    <a
      href={`/${to}`}
      style={{
        textDecoration: "none",
        color: "black",
        fontSize: "10px",
      }}
    >
      <ArrowBackIcon
        style={{
          fontSize: "10px",
          marginRight: "3px",
        }}
      />
      BACK HOME
    </a>
  );
};

styled.div`
  font-size: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NewAccount = styled.button`
border: none;
background-color: white;
text-decoration: underline;
cursor: pointer;
`;

const Link01 = ({ to }) => {
  return (
    <a href={`/${to}`} style={{
      margin: '5px 0px',
      fontSize: '12px',
    }}>
      <NewAccount>CREATE A NEW ACCOUNT</NewAccount>
    </a>
  );
};

const Link02 = ({ to }) => {
  return (
    <a href={`/${to}`} style={{
      margin: '5px 0px',
      fontSize: '12px',
    }}>
      <NewAccount>FORGOT MY PASSWORD?</NewAccount>
    </a>
  );
};

const Login = () => {

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "",
      label: "Password",
      required: true,
    },
    
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Logo to=""></Logo>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              y
              onChange={onChange}
            />
          ))}
          <Button>LOGIN</Button>
          <Link01 to="register">CREATE A NEW ACCOUNT</Link01>
          <Link02 to="">FORGOT MY PASSWORD?</Link02>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
