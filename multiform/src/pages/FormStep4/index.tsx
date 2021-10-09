import * as C from './styles'
import { Theme } from "../../components/Theme";
import { Link, useHistory } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useEffect } from "react";

export const FormStep4 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(()=>{

    if(state.name === '' || state.email === '' || state.github === ''){
      history.push("/");
    }else{
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
    })
    }
  }, []);

  return (
    <Theme>
      <C.Container>

        <p>Seu registro foi realizado com sucesso! 🎉</p>
        <h1>Olá {state.name}</h1>
        <p>Em breve você receberá sua oportunidade, não esqueça de deixar projetos pessoais no seu portfólio no Github</p>
        <hr />

        <Link className="backButton" to="/">Voltar</Link>
      </C.Container>
    </Theme>
  );
};
