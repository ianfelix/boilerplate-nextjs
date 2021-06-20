import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  render(<Main />);

  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Boilerplate NextJs/i })
    ).toBeInTheDocument();
  });
});
