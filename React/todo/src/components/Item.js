const Item = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={`${props.clicked ? 'clicked' : ''}`} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Item;
