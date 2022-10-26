import type { NextPage } from "next";
import { SignInPage, SignInForm } from "@organisms";
import { LabeledTextField } from "@molecules"


const Home: NextPage = () => {
  return (<SignInPage children={<SignInForm/>}/>);
};

export default Home;
