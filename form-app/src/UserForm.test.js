import { render , screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import UserForm from './UserForm';

test('it shows two inputs and a button', () =>{
    render(<UserForm/>)

    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button")

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})

test("it calls onUserAdd when the form is submitted", async () => {
    const mock = jest.fn()

    render(<UserForm onUserAdd={mock} />);
   
    const [nameInput, emailInput] = screen.getAllByRole("textbox");
   

    await user.click(nameInput);
    await user.keyboard("Diego");
   

    await user.click(emailInput);
    await user.keyboard("diego@gmail.com");

    const button = screen.getByRole("button")

    await user.click(button)
   
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name: "Diego", email: "diego@gmail.com"})

  });