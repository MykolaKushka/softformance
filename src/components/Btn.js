export default function Btn(props) {
  return (
    <>
      <a href='/' className={props.class}>
        {props.label}
      </a>
    </>
  );
}
