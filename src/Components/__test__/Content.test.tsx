import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '../Content';
import userEvent from '@testing-library/user-event';
import Note from '../Note';

test('text input element should render', () => {
  render(<Content />);
  
  const textInputEl = screen.getByPlaceholderText(/Enter a word or sentence/i);

  expect(textInputEl).toBeInTheDocument();
});

test("text input element should be empty", () => {
  render(<Content />);

  const textInputEl = screen.getByPlaceholderText(/Enter a word or sentence/i);

  expect((textInputEl as HTMLInputElement).value).toBe("");
})

test("text input element should change", async () => {
  render(<Content />);

  const textInputEl = screen.getByPlaceholderText(/Enter a word or sentence/i);

  await userEvent.type(textInputEl, "ifeanyi")

  expect((textInputEl as HTMLInputElement).value).toBe("ifeanyi");
})


test('button is working', () => {
  render(<Content />);
  
  const buttonEl = screen.getByRole("button");

  userEvent.click(buttonEl);

  expect(buttonEl).toBeInTheDocument();
});


test("count the vowels", () => {

  render(<Content />);

  const textInputEl = screen.getByPlaceholderText(/Enter a word or sentence/i);

  userEvent.type(textInputEl, "ifeanyi")

  const buttonEl = screen.getByRole("button");

  userEvent.click(buttonEl);

  const sentence: string = "There are 3 vowels in the word";

  type componentProps = React.ComponentProps<typeof Note>

  const props: componentProps = {
    answer: sentence
  }

  render(<Note {...props} />);

  expect(sentence).toBe("There are 3 vowels in the word")
})