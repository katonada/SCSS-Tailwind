import styles from './Card.module.scss';

const Card = ({ children, className, ...rest }) => {

  let cardClassName = styles.card;

  if ( className ) {
    cardClassName = `${className} ${cardClassName}`;
  }

  return (
    <div {...rest} className={cardClassName} >
      { children }
    </div>
  )
}

export default Card;
