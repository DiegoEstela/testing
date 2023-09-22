import { render,screen} from "@testing-library/react";
import  user  from '@testing-library/user-event';
import App from './App';


test('can receive a new user and show it on a list', ()=>{
    render(<App/>)

    const nameInput = screen.getByRole("textbox", {name: /name/i});
    const emailInput = screen.getByRole("textbox", {name: /email/i})
    const button = screen.getByRole('button')

    user.click(nameInput);
    user.keyboard('diego');
    user.click(emailInput);
    user.keyboard('diego@diego.com');

    user.click(button)

   const name = screen.getByRole('cell', {name: "diego"})
   const email = screen.getByRole('cell', {name: "diego@diego.com"})

   expect(name).toBeInTheDocument()
   expect(email).toBeInTheDocument()


})