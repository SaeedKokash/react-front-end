import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import Person from "../components/Person";

test( 'checking app page with person component', () => {
    render( <App /> );
    const person = screen.getByTestId( 'person' );
    expect( person ).toBeInTheDocument();
} );

test( 'checking app name', () => {
    render( <App /> );
    const appName = screen.getByTestId("appName");
    expect( appName ).toHaveTextContent('Identity Form App');
} );

test('working form onchange', async () => {

    render(<Person />);
    const nameInput = screen.getByTestId("name-input");
    const ageInput = screen.getByTestId("age-input");
    const genderInput= screen.getByTestId("gender-input");



    fireEvent.change(nameInput, { target: { value: 'saeed' } });
    fireEvent.change(ageInput, { target: { value: '28' } });
    fireEvent.change(genderInput, { target: { value: 'Male' } });


    const nameOutput = await waitFor(() => screen.findByTestId("name-output"));
    const ageOutput = await waitFor(() => screen.findByTestId("age-output"));
    const genderOutput = await waitFor(() => screen.findByTestId("gender-output"));



    expect(nameOutput).toHaveTextContent('Name: saeed');
    expect(ageOutput).toHaveTextContent('Age: 28');
    expect(genderOutput).toHaveTextContent('Gender: Male');

    // const submit = screen.getByTestId('submit');
    // fireEvent.click(submit);
    // expect(nameInput.value).toBe('saeed');
})

test('working new age onsubmit', async () => {
    render(<Person />);
    const ageInput = screen.getByTestId("age-input");
    const submit = screen.getByTestId('submit');

    fireEvent.change(ageInput, { target: { value: '28' } });
    fireEvent.click(submit);

    const newAgeOutput = await waitFor(() => screen.findByTestId("new-age-output"));
    setTimeout(() => {
        expect(newAgeOutput).toHaveTextContent('New Age: 33');
    }, 1);
})
