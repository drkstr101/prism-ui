import styled from 'tailwind';

const StyledThemeStyles = styled.div`
  color: pink;
`;
export function ThemeStyles() {
  return (
    <StyledThemeStyles>
      <h1>Welcome to ThemeStyles!</h1>
    </StyledThemeStyles>
  );
}

export default ThemeStyles;
