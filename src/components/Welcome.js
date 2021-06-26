const Welcome = props => (
  <aside className={`welcomeTip ${props.showWelcome ? '' : 'welcomeTip--hide'}`}>
    <p>
      Create your first reminder below.<br />
      <b>Tip: </b>Add an emoji to bring some life to your todo-list 😉
    </p>
  </aside>
);

export default Welcome;
