import PropTypes from 'prop-types';
import { Title, Sections } from './Section.styled';


const Section = ({ title, children }) => {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      {children}
    </Sections>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
